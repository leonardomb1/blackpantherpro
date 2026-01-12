"use client"

import { TrendingUp, Package, MessageCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PartnershipSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Margem Forte",
      description: "40% a 60% de margem para seu negócio crescer com produtos de alta qualidade",
    },
    {
      icon: Package,
      title: "Suporte Técnico",
      description: "Time especializado para tirar dúvidas e apoiar sua equipe de vendas",
    },
    {
      icon: MessageCircle,
      title: "Materiais de Sell-Out",
      description: "Displays, artes, vídeos e conteúdo pronto para usar em sua loja",
    },
    {
      icon: Award,
      title: "Marca Aliada",
      description: "Não competimos com você. Zero venda direta ao consumidor final",
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="parceria" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
            PARCERIA B2B
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary mb-6 text-balance">
            Mais que um fornecedor. <span className="text-primary">Um parceiro.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferecemos muito mais do que produtos de qualidade. Entregamos uma parceria estratégica para fazer seu
            negócio crescer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 rounded-2xl p-8 lg:p-12 text-white max-w-4xl mx-auto text-center">
          <h3 className="text-2xl lg:text-4xl font-bold mb-4 text-balance">
            Pronto para crescer com a Black Panther Pro?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Junte-se aos parceiros que estão oferecendo produtos premium com margem competitiva e suporte completo.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("contato")}
            className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base h-14 px-10"
          >
            Quero ser parceiro Black Panther Pro
          </Button>
          <p className="text-sm text-white/70 mt-4">Atendimento rápido e humano. Sem burocracia.</p>
        </div>
      </div>
    </section>
  )
}
