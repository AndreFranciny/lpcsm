import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  TrendingDown,
  FileArchive,
  Settings,
  TrendingUp,
  Users,
  Award,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  Lightbulb,
  ShieldCheck,
  HelpCircle,
  Star,
  Rocket,
} from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import { RegistrationForm } from "@/components/registration-form"
import { AnimatedSection } from "@/components/animated-section"

// Componentes auxiliares
const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text-primary text-center ${className}`}>
    {children}
  </h2>
)

const SectionText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <p
    className={`text-brand-text-secondary text-lg md:text-xl max-w-3xl mx-auto text-center leading-relaxed ${className}`}
  >
    {children}
  </p>
)

export default function FabricaDeReceitasPageCreative() {
  const eventDate = "2025-08-05T09:00:00-03:00"

  const benefits = [
    {
      icon: Settings,
      title: "Implemente e Otimize",
      description: "Transforme seu plano em ação com estratégias práticas e orientação de especialistas.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento de Longo Prazo",
      description: "Descubra um modelo de crescimento sustentável e construa uma parceria duradoura com a V4.",
    },
    {
      icon: Users,
      title: "Networking Exclusivo",
      description: "Conecte-se com uma rede selecionada de empreendedores e líderes da indústria.",
    },
  ]

  const agendaItems = [
    {
      title: "A Escada de Valor",
      description:
        "Posicionamos a Estruturação como o primeiro degrau. Mostramos os próximos: Implementação, Otimização e Escala.",
      icon: Award,
    },
    {
      title: "Palestra Transformacional",
      description: "Conteúdo inspirador para criar o desejo e a necessidade de ir para o próximo nível.",
      icon: Lightbulb,
    },
    {
      title: "O Custo da Não-Continuidade",
      description: "Mostramos o ROI que está sendo deixado na mesa sem a execução do plano.",
      icon: TrendingDown,
    },
    {
      title: "Plano de Continuidade",
      description: "Apresentamos o portfólio de soluções para implementar a estratégia que você já tem.",
      icon: ShieldCheck,
    },
    {
      title: "Oferta Exclusiva",
      description: "Uma oportunidade única, com tempo limitado, para os participantes do evento.",
      icon: CheckCircle,
    },
  ]

  const faqItems = [
    {
      question: "Para quem é este evento?",
      answer:
        "O Fábrica de Receitas é exclusivo para clientes da V4 Company que concluíram a Estruturação Estratégica e estão prontos para implementar e escalar seus planos.",
    },
    {
      question: "O que vou aprender?",
      answer:
        "Você aprenderá estratégias práticas para implementação, otimização, crescimento a longo prazo e como alavancar o ecossistema da V4 para resultados contínuos.",
    },
    {
      question: "Há algum custo para participar?",
      answer:
        "Por favor, consulte o e-mail de convite ou entre em contato com seu representante da V4 para obter detalhes sobre o acesso ao evento e quaisquer custos associados.",
    },
    {
      question: "O que torna este evento diferente?",
      answer:
        "Este não é um workshop teórico. É uma imersão prática e focada em ativar o plano estratégico que você já possui, com insights diretos de especialistas em crescimento e oportunidades de networking com seus pares.",
    },
  ]

  return (
    <div className="bg-brand-bg-black min-h-screen font-sans text-brand-text-primary">
      {/* Seção Herói */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?width=1920&height=1080"
            alt="Fundo abstrato com linhas de energia vermelhas"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-black/30 via-brand-bg-black to-brand-bg-black"></div>
        </div>
        <div className="container relative z-10 mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left space-y-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-tight">
                  DA <span className="text-brand-accent-red">ESTRUTURA</span> A{" "}
                  <span className="text-brand-accent-red">{"GERAÇÃO"}</span> DE RECEITA
                </h1>
                <p className="text-xl sm:text-2xl text-brand-text-secondary max-w-xl mx-auto md:mx-0">
                  O Fábrica de Receitas é o evento exclusivo para transformar sua estratégia em uma máquina de
                  resultados. Chegou a hora de acelerar.
                </p>
              </div>
              <div>
                <RegistrationForm
                  title="Garanta sua Vaga"
                  description="Vagas limitadas. Acelere seu crescimento."
                  buttonText="QUERO TER UMA FÁBRICA DE RECEITA"
                  idPrefix="hero"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Seção de Dor/Problema */}
      <AnimatedSection className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionTitle>
            Uma estratégia brilhante na gaveta <br /> <span className="text-brand-accent-red">não paga as contas.</span>
          </SectionTitle>
          <SectionText>
            Você investiu na Estruturação Estratégica e tem um plano poderoso. Mas sem execução, otimização e
            acompanhamento, ele é apenas um documento. O verdadeiro potencial do seu negócio está no próximo passo.
          </SectionText>
          <div className="flex justify-center items-center space-x-8 text-brand-text-secondary">
            <div className="flex flex-col items-center space-y-2 text-center">
              <FileArchive size={56} strokeWidth={1.5} className="text-brand-accent-red/70" />
              <p>Plano Guardado</p>
            </div>
            <div className="text-4xl font-thin text-brand-neutral-dark">&rarr;</div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <TrendingDown size={56} strokeWidth={1.5} className="text-brand-accent-red/70" />
              <p>Crescimento Estagnado</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Seção de Apresentação da Solução */}
      <AnimatedSection className="py-20 md:py-32 bg-brand-neutral-dark/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center">
            <p className="text-brand-accent-red font-semibold text-lg mb-2">A SOLUÇÃO</p>
            <SectionTitle>Bem-vindo à Fábrica de Receitas.</SectionTitle>
            <SectionText className="mt-4">
              Onde o Potencial vira Performance. Uma imersão prática para ativar o crescimento que a Estruturação
              Estratégica revelou.
            </SectionText>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="bg-brand-neutral-dark/40 border border-brand-neutral-dark/50 shadow-lg p-8 rounded-xl h-full transition-all duration-300 red-glow-hover transform hover:-translate-y-2">
                  <benefit.icon className="w-12 h-12 text-brand-accent-red mb-6" />
                  <h3 className="text-brand-text-primary text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-brand-text-secondary">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Seção do Palestrante */}
      <AnimatedSection className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <Image
                src="/placeholder.svg?width=500&height=600"
                alt="Ricardo Almeida"
                width={500}
                height={600}
                className="rounded-xl shadow-2xl object-cover red-glow-hover transition-all duration-300"
              />
            </div>
            <div className="md:col-span-3 text-center md:text-left">
              <p className="text-brand-accent-red font-semibold text-lg mb-2">O MENTOR</p>
              <SectionTitle className="text-left text-4xl md:text-5xl">
                Conduzido por quem vive o crescimento.
              </SectionTitle>
              <h3 className="text-4xl font-bold text-brand-text-primary mt-6">Ricardo Almeida</h3>
              <p className="text-brand-text-secondary text-lg mt-4">
                Com mais de 15 anos de experiência, Ricardo Almeida é um dos maiores especialistas em alavancagem de
                negócios do país. Ele não vai te dar teoria, vai te entregar o mapa prático para transformar sua
                estratégia em um sistema de vendas recorrente e escalável.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Seção de Prova Social */}
      <AnimatedSection className="py-20 md:py-32 bg-brand-neutral-dark/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <SectionTitle>Resultados Reais, Não Promessas.</SectionTitle>
          <SectionText>Veja a jornada que o Carlos fez. A mesma que você pode começar agora.</SectionText>
          <div className="bg-brand-bg-dark p-8 md:p-12 rounded-xl shadow-2xl max-w-4xl mx-auto border border-brand-neutral-dark/50 text-left">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-brand-text-secondary mb-1 opacity-70">ANTES</h4>
                  <p className="text-brand-text-primary text-lg">
                    "Tínhamos um plano, mas a execução era um desafio. Faturamento estagnado em R$ 45.000/mês."
                  </p>
                </div>
                <div className="w-full h-px bg-brand-neutral-dark"></div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-accent-red mb-1">DEPOIS</h4>
                  <p className="text-brand-text-primary text-lg">
                    "Em 3 meses, o faturamento <span className="font-bold">dobrou</span>. Hoje, estamos na fase de
                    escala, com previsibilidade e lucro."
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/placeholder.svg?width=300&height=200"
                  alt="Gráfico de Crescimento"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
              </div>
            </div>
            <blockquote className="mt-10 pt-8 border-t border-brand-neutral-dark/70 text-center">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-xl md:text-2xl italic text-brand-text-primary leading-relaxed">
                "O Fábrica de Receitas foi o catalisador. Saímos de um plano estático para um motor de crescimento que
                aumentou nosso faturamento em{" "}
                <span className="text-brand-accent-red font-semibold">120% em 3 meses!</span>"
              </p>
              <p className="text-brand-text-secondary mt-2">- Carlos Ferreira, CEO da TechSolutions Inc.</p>
            </blockquote>
          </div>
        </div>
      </AnimatedSection>

      {/* Seção da Jornada do Evento (Linha do Tempo) */}
      <AnimatedSection className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionTitle>
              Uma Agenda Para a <span className="text-brand-accent-red">Sua Transformação.</span>
            </SectionTitle>
            <SectionText className="mt-4">Sem enrolação. Apenas conteúdo prático e acionável.</SectionText>
          </div>
          <div className="max-w-3xl mx-auto timeline-container">
            <div className="timeline-line"></div>
            {agendaItems.map((item, index) => (
              <AnimatedSection key={index} className="timeline-item" delay={index * 150}>
                <div className="timeline-dot"></div>
                <div className="timeline-content pl-10">
                  <div className="flex items-center mb-2">
                    <item.icon className="w-8 h-8 text-brand-accent-red mr-4" />
                    <h4 className="text-2xl font-bold text-brand-text-primary">{item.title}</h4>
                  </div>
                  <p className="text-brand-text-secondary">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Seção de CTA Final */}
      <AnimatedSection className="py-20 md:py-32 bg-brand-neutral-dark/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="w-16 h-16 text-brand-accent-red mx-auto mb-6" />
          <SectionTitle>
            Sua Jornada de Crescimento <span className="text-brand-accent-red">Começa Agora.</span>
          </SectionTitle>
          <SectionText className="mt-4">
            A decisão de transformar seu negócio é sua. Nós te damos o incentivo para começar.
          </SectionText>

          {/* Novo container de grade */}
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            {/* Coluna da Esquerda: Oferta e Countdown */}
            <div className="space-y-8 text-left md:text-center">
              {" "}
              {/* Adicionado text-left md:text-center para melhor alinhamento interno */}
              <div className="bg-brand-accent-red text-brand-text-primary p-8 rounded-xl shadow-2xl red-glow-hover transition-all duration-300">
                <h3 className="text-3xl font-bold mb-2">OFERTA EXCLUSIVA POR TEMPO LIMITADO!</h3>
                <p className="text-xl">Feche a continuidade em até 7 dias após o evento e ganhe:</p>
                <p className="text-3xl font-extrabold text-yellow-300 mt-2">1 MÊS DE BÔNUS NO PLANO DE IMPLEMENTAÇÃO</p>
                <p className="text-lg mt-1">(Valor: Até R$ 15.000)</p>
              </div>
              <CountdownTimer targetDate={eventDate} className="max-w-xl mx-auto" />
            </div>

            {/* Coluna da Direita: Formulário */}
            <div>
              <RegistrationForm
                title="Garanta sua Vaga"
                description="Preencha abaixo para garantir sua participação e bônus."
                buttonText="QUERO TER UMA FÁBRICA DE RECEITA"
                idPrefix="final"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Seção de FAQ */}
      <AnimatedSection className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionTitle className="mb-12">
            Perguntas <span className="text-brand-accent-red">Frequentes</span>
          </SectionTitle>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-brand-neutral-dark/50">
                <AccordionTrigger className="text-brand-text-primary hover:text-brand-accent-red text-xl py-6 text-left font-semibold">
                  <HelpCircle className="w-6 h-6 mr-4 text-brand-accent-red/80 flex-shrink-0" />
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-text-secondary pb-6 text-lg pl-16">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>

      {/* Rodapé */}
      <footer className="py-12 bg-brand-bg-black text-brand-text-secondary border-t border-brand-neutral-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Removido o placeholder da imagem do logo */}
          <p>&copy; {new Date().getFullYear()} V4 Company. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                aria-label="Social Media"
                className="text-brand-text-secondary/70 hover:text-brand-accent-red transition-colors"
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
