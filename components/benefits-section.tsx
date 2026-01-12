"use client"

import { User, Store, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BenefitsSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary mb-6 text-balance">
            Para o seu cliente ciclista e para você
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Quando o produto funciona, o cliente volta. E quando o cliente volta, seu negócio cresce.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Para o Ciclista */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-border hover:border-primary/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Para Seu Cliente</h3>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-secondary mb-1">Proteção da corrente por até 80 km</div>
                  <div className="text-sm text-muted-foreground">Performance sem relubrificar por aplicação</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-secondary mb-1">Menos ruído e desgaste</div>
                  <div className="text-sm text-muted-foreground">Transmissão sempre com sensação de nova</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-secondary mb-1">Embalagem compacta de 60ml</div>
                  <div className="text-sm text-muted-foreground">Para trilha, estrada ou uso urbano</div>
                </div>
              </li>
            </ul>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("produtos")}
              className="cursor-pointer w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold"
            >
              Ver produtos
            </Button>
          </div>

          {/* Para o Lojista */}
          <div className="bg-gradient-to-br from-secondary to-secondary/95 rounded-2xl p-8 lg:p-10 text-white border-2 border-primary">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Store className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Para Você, Lojista</h3>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold mb-1">Linha premium com margem atrativa</div>
                  <div className="text-sm text-white/80">40% a 60% de margem na revenda B2B</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold mb-1">Portfólio enxuto e fácil</div>
                  <div className="text-sm text-white/80">Fácil de explicar e treinar o time</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold mb-1">Foco em B2B</div>
                  <div className="text-sm text-white/80">Não vendemos direto pro seu cliente</div>
                </div>
              </li>
            </ul>
            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
            >
              Quero ser parceiro
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  )
}
