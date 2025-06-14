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

export function RegistrationForm({ title, description, buttonText, idPrefix = "form" }: RegistrationFormProps) {
  return (
    <Card className="w-full max-w-lg bg-brand-bg-dark/80 backdrop-blur-sm border-brand-neutral-dark/50 shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-brand-text-primary text-2xl md:text-3xl">{title}</CardTitle>
        <CardDescription className="text-brand-text-secondary pt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor={`${idPrefix}-fullName`} className="text-brand-text-secondary">
              Nome Completo
            </Label>
            <Input
              id={`${idPrefix}-fullName`}
              type="text"
              placeholder="Seu nome completo"
              required
              className="bg-brand-neutral-dark border-brand-neutral-dark/50 text-brand-text-primary focus:border-brand-accent-red placeholder:text-brand-text-secondary/60"
            />
          </div>
          <div>
            <Label htmlFor={`${idPrefix}-email`} className="text-brand-text-secondary">
              Email
            </Label>
            <Input
              id={`${idPrefix}-email`}
              type="email"
              placeholder="seu@email.com"
              required
              className="bg-brand-neutral-dark border-brand-neutral-dark/50 text-brand-text-primary focus:border-brand-accent-red placeholder:text-brand-text-secondary/60"
            />
          </div>
          <div>
            <Label htmlFor={`${idPrefix}-phone`} className="text-brand-text-secondary">
              Telefone/WhatsApp
            </Label>
            <Input
              id={`${idPrefix}-phone`}
              type="tel"
              placeholder="(XX) XXXXX-XXXX"
              required
              className="bg-brand-neutral-dark border-brand-neutral-dark/50 text-brand-text-primary focus:border-brand-accent-red placeholder:text-brand-text-secondary/60"
            />
          </div>
          <div>
            <Label htmlFor={`${idPrefix}-companyName`} className="text-brand-text-secondary">
              Nome da Empresa
            </Label>
            <Input
              id={`${idPrefix}-companyName`}
              type="text"
              placeholder="Nome da sua empresa"
              required
              className="bg-brand-neutral-dark border-brand-neutral-dark/50 text-brand-text-primary focus:border-brand-accent-red placeholder:text-brand-text-secondary/60"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-brand-accent-red hover:bg-brand-accent-red-hover text-brand-text-primary font-bold text-lg py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-brand-accent-red/50"
          >
            QUERO TER UMA FÁBRICA DE RECEITA
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
