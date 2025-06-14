"use client"
import { useState, type FormEvent } from "react" // Import useState e FormEvent
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RegistrationFormProps {
  title: string
  description: string
  buttonText: string
  idPrefix?: string
}

interface SubmissionStatus {
  success: boolean
  message: string
}

export function RegistrationForm({ title, description, buttonText, idPrefix = "form" }: RegistrationFormProps) {
  const [isPending, setIsPending] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus | null>(null)

  // Construa o endpoint do Formspree usando a variável de ambiente
  // Certifique-se de que NEXT_PUBLIC_FORMSPREE_PROJECT é o seu ID de formulário/projeto do Formspree
  const formspreeEndpoint = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_PROJECT}`

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPending(true)
    setSubmissionStatus(null)

    if (!process.env.NEXT_PUBLIC_FORMSPREE_PROJECT) {
      setSubmissionStatus({
        success: false,
        message: "Erro de configuração: ID do projeto Formspree não encontrado. Contate o suporte.",
      })
      setIsPending(false)
      return
    }

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json", // Importante para o Formspree retornar JSON
        },
      })

      if (response.ok) {
        setSubmissionStatus({
          success: true,
          message: "Inscrição realizada com sucesso! Em breve entraremos em contato.",
        })
        event.currentTarget.reset() // Limpa o formulário após o sucesso
      } else {
        const data = await response.json()
        let errorMessage = "Ocorreu um erro ao enviar sua inscrição."
        if (data && data.errors) {
          errorMessage = data.errors.map((error: { message: string }) => error.message).join(", ")
        } else if (data && data.error) {
          errorMessage = data.error
        }
        setSubmissionStatus({ success: false, message: errorMessage })
      }
    } catch (error) {
      console.error("Erro ao enviar para o Formspree:", error)
      setSubmissionStatus({
        success: false,
        message: "Erro de rede ou servidor. Por favor, tente novamente mais tarde.",
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <Card className="w-full max-w-lg bg-brand-bg-dark/80 backdrop-blur-sm border-brand-neutral-dark/50 shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-brand-text-primary text-2xl md:text-3xl">{title}</CardTitle>
        <CardDescription className="text-brand-text-secondary pt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Atualize a tag form para usar o onSubmit */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor={`${idPrefix}-fullName`} className="text-brand-text-secondary text-left">
              Nome Completo
            </Label>
            <Input
              id={`${idPrefix}-fullName`}
              type="text"
              placeholder="Seu nome completo"
              required
              className="bg-brand-neutral-dark border-brand-neutral-dark/50 text-brand-text-primary focus:border-brand-accent-red placeholder:text-brand-text-secondary/60"
              name="fullName" // Nome do campo para o Formspree
            />
          </div>
          <div>
            <Label htmlFor={`${idPrefix}-email`} className="text-brand-text-secondary text-left">
              Email
            </Label>
            <Input
              id={`${idPrefix}-email`}
              type="email"
              placeholder="seu@email.com"
              required
              className="bg-brand-neutral-dark border-brand-neutral-dark/50 text-brand-text-primary focus:border-brand-accent-red placeholder:text-brand-text-secondary/60"
              name="email" // Nome do campo para o Formspree
            />
          </div>
          <div>
            <Label htmlFor={`${idPrefix}-phone`} className="text-brand-text-secondary text-left">
              Telefone/WhatsApp
            </Label>
            <Input
              id={`${idPrefix}-phone`}
              type="tel"
              placeholder="(XX) XXXXX-XXXX"
              required
              className="bg-brand-neutral-dark border-brand-neutral-dark/50 text-brand-text-primary focus:border-brand-accent-red placeholder:text-brand-text-secondary/60"
              name="phone" // Nome do campo para o Formspree
            />
          </div>
          <div>
            <Label htmlFor={`${idPrefix}-companyName`} className="text-brand-text-secondary text-left">
              Nome da Empresa
            </Label>
            <Input
              id={`${idPrefix}-companyName`}
              type="text"
              placeholder="Nome da sua empresa"
              required
              className="bg-brand-neutral-dark border-brand-neutral-dark/50 text-brand-text-primary focus:border-brand-accent-red placeholder:text-brand-text-secondary/60"
              name="companyName" // Nome do campo para o Formspree
            />
          </div>
          {/* Campos ocultos comuns para Formspree, se necessário (ex: _subject, _replyto) */}
          {/* <input type="hidden" name="_subject" value="Nova Inscrição - Fábrica de Receitas!" /> */}

          <Button
            type="submit"
            size="lg"
            className="w-full bg-brand-accent-red hover:bg-brand-accent-red-hover text-brand-text-primary font-bold text-lg py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-brand-accent-red/50"
            disabled={isPending}
          >
            {isPending ? "Enviando..." : buttonText}
          </Button>
        </form>
        {submissionStatus?.message && (
          <div
            className={`mt-4 p-3 rounded-md text-center ${
              submissionStatus.success ? "bg-green-600/20 text-green-400" : "bg-red-600/20 text-red-400"
            }`}
            role="alert"
            aria-live="polite"
          >
            {submissionStatus.message}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
