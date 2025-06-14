"use server"

interface FormState {
  success: boolean
  message: string
}

// A URL do webhook N8N fornecida pelo usuário (como fallback, idealmente via process.env)
const FALLBACK_N8N_WEBHOOK_URL = "https://n8n.main.mktlab.app/webhook-test/bbc117f4-84e9-4616-85e1-8b811b2306b5"

export async function submitToN8N(prevState: FormState, formData: FormData): Promise<FormState> {
  const fullName = formData.get("fullName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const companyName = formData.get("companyName") as string

  if (!fullName || !email || !phone || !companyName) {
    return { success: false, message: "Por favor, preencha todos os campos obrigatórios." }
  }

  if (!email.includes("@") || !email.includes(".")) {
    return { success: false, message: "Por favor, insira um endereço de e-mail válido." }
  }

  const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || FALLBACK_N8N_WEBHOOK_URL

  if (!n8nWebhookUrl) {
    console.error("URL do webhook N8N não está configurada (nem via env, nem como fallback).")
    return {
      success: false,
      message:
        "Erro crítico de configuração do servidor: URL do webhook N8N não definida. Por favor, contate o suporte.",
    }
  }

  if (n8nWebhookUrl === FALLBACK_N8N_WEBHOOK_URL && process.env.NODE_ENV === "production") {
    console.warn(
      "ALERTA: Usando URL de webhook N8N de fallback em ambiente de produção. Verifique a configuração da variável de ambiente N8N_WEBHOOK_URL.",
    )
  }

  const payload = {
    fullName,
    email,
    phone,
    companyName,
    timestamp: new Date().toISOString(),
    source: "Fábrica de Receitas LP (Via Server Action)",
  }

  try {
    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Adicione cabeçalhos de autenticação se o seu N8N exigir
        // Ex: 'Authorization': `Bearer ${process.env.N8N_AUTH_TOKEN}`
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      return { success: true, message: "Inscrição enviada com sucesso para processamento!" }
    } else {
      let errorResponseMessage = "Erro desconhecido ao contatar o servidor de processamento."
      try {
        const errorData = await response.json()
        errorResponseMessage = errorData.message || JSON.stringify(errorData)
      } catch (e) {
        errorResponseMessage = `Status: ${response.status} - ${response.statusText}`
      }
      console.error("Erro ao enviar para N8N:", response.status, errorResponseMessage, "URL usada:", n8nWebhookUrl)
      return { success: false, message: `Erro ao enviar inscrição: ${errorResponseMessage}` }
    }
  } catch (error) {
    console.error("Erro na comunicação com N8N:", error, "URL usada:", n8nWebhookUrl)
    let errorMessage = "Erro de rede ou servidor. Por favor, tente novamente mais tarde."
    if (error instanceof Error) {
      errorMessage = `Erro de comunicação: ${error.message}`
    }
    return { success: false, message: errorMessage }
  }
}
