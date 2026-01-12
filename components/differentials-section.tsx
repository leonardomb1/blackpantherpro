"use client"

import { CheckCircle2, Droplets, Shield, Sparkles, TestTube, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function DifferentialsSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const differentials = [
    {
      icon: TestTube,
      title: "Durabilidade Comprovada",
      description: "+80 km por aplicação em condições reais de uso",
      highlight: "+80 km",
    },
    {
      icon: Sparkles,
      title: "Base Cerosa Premium",
      description: "Não oleosa. Menos sujeira, menos desgaste, mais durabilidade",
      highlight: "Cerosa",
    },
    {
      icon: Droplets,
      title: "Menos Sujeira e Desgaste",
      description: "Transmissão limpa e silenciosa que mantém a bike performando",
      highlight: "Limpo",
    },
    {
      icon: Shield,
      title: "Controle de Qualidade Industrial",
      description: "20 anos de experiência BIOVAX em química de alta performance",
      highlight: "20 anos",
    },
    {
      icon: Handshake,
      title: "Atendimento Humano e Direto",
      description: "Time focado em fazer seu negócio crescer, não em burocracia",
      highlight: "Humano",
    },
    {
      icon: CheckCircle2,
      title: "Estrutura Pensada para Giro",
      description: "Frasco 60 mL ideal para venda rápida e margem de 40-60%",
      highlight: "40-60%",
    },
  ]

  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
            DIFERENCIAIS TÉCNICOS
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary mb-6 text-balance">
            Performance que se prova no pedal e no balcão
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Tecnologia cerosa premium desenvolvida para máxima durabilidade e mínima manutenção, com estrutura comercial
            pensada para otimizar seu giro e margem.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("parceria")}
            className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
          >
            Ver condições de parceria
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-primary mb-2">{item.highlight}</div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed px-0 py-0 m-0">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Technical Proof Section */}
        <div className="mt-16 bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-4xl font-bold mb-6 text-balance">
                Não é promessa. <span className="text-primary">É prova técnica.</span>
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Testado em condições reais</div>
                    <div className="text-white/80 text-sm">Mais de 80 km de performance em estrada e terra</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Tecnologia cerosa de ponta</div>
                    <div className="text-white/80 text-sm">
                      Base não oleosa que não atrai sujeira como produtos convencionais
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Controle industrial rigoroso</div>
                    <div className="text-white/80 text-sm">Padrão BIOVAX de qualidade em cada lote produzido</div>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
              >
                Solicitar orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/bicycle-chain-close-up-clean-lubricated-profession.jpg"
                alt="Corrente lubrificada"
                className="rounded-xl shadow-2xl leading-7"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
