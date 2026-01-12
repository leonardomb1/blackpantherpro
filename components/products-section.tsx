"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sun, Cloud, Sparkles, Shield, Wind, Droplets, ArrowRight } from "lucide-react"

export function ProductsSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="produtos" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
            LINHA DE PRODUTOS
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary mb-6 text-balance">
            Cera certa, no frasco certo
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Nossa linha de ceras lubrificantes em frascos compactos de 60 mL foi pensada para a rotina real do ciclista:
            fácil de levar, fácil de vender.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("contato")}
            className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
          >
            Ver condições de revenda
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
        {/* Cera Seca */}
        <a href="/produtos" className="block">
          <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl h-full">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Sun className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <Badge className="bg-primary text-primary-foreground mb-2">CLIMA SECO</Badge>
                  <h3 className="text-2xl font-bold text-secondary">Cera Lubrificante Seca</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Para clima seco, estrada e terra batida. Transmissão limpa e silenciosa.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Menos sujeira grudada, visual clean da bike</span>
                </div>
                <div className="flex items-start gap-2">
                  <Wind className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Transmissão silenciosa e eficiente</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Durabilidade de alto rendimento</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Formato ideal</div>
                    <div className="text-2xl font-bold text-secondary">60 mL</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 bg-white flex items-center justify-center p-8">
              <img
                src="/images/design-20sem-20nome-20-2814-29.png"
                alt="Cera de Corrente Seco Mountain Bike 60ml Black Panther Pro"
                className="w-full h-full object-contain"
              />
            </div>
          </Card>
        </a>

        {/* Cera Úmida */}
        <a href="/produtos" className="block">
          <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl h-full">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <Badge className="bg-primary text-primary-foreground mb-2">CLIMA ÚMIDO</Badge>
                  <h3 className="text-2xl font-bold text-secondary">Cera Lubrificante Úmida</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Para chuva, lama e uso intenso. Aguenta água e lama pesada, ideal pra quem depende da bike todo dia.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Droplets className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Alta resistência à água e umidade</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Protege contra corrosão</span>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Eficácia de 80km para reaplicação</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Formato ideal</div>
                    <div className="text-2xl font-bold text-secondary">60 mL</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 bg-white flex items-center justify-center p-8">
              <img
                src="/images/attachments-gen-images-v0-image.png"
                alt="Cera de Corrente Úmido Speed Bike 60ml Black Panther Pro"
                className="w-full h-full object-contain"
              />
            </div>
          </Card>
        </a>
      </div>

        {/* Why 60ml */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4">
              Formato <span className="text-primary">60 mL</span> pra quem pedala e pra quem vende
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Tamanho estratégico pensado para otimizar seu negócio
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-secondary mb-2">Cabe na bolsinha</h4>
              <p className="text-sm text-muted-foreground">Jersey ou mochila</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-secondary mb-2">Compra por impulso</h4>
              <p className="text-sm text-muted-foreground">Ideal pra balcão</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-secondary mb-2">Gira rápido</h4>
              <p className="text-sm text-muted-foreground">Ocupa pouco espaço</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-secondary mb-2">Ideal pra trilha</h4>
              <p className="text-sm text-muted-foreground">Rua e treino diário</p>
            </div>
          </div>
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
            >
              Solicitar catálogo completo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Linha completa */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-8">Linha completa de produtos</h3>
          <div className="max-w-4xl mx-auto mb-8">
            <img
              src="/images/chatgpt-20image-204-12-2025-2c-2011-33-28.png"
              alt="Linha completa Black Panther Pro: Clean Tec, Desengrax, Cera de Corrente Seco e Úmido, Parafina de Corrente, Clear Bike"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
            <div className="text-center">
              <div className="bg-muted rounded-xl p-4 mb-3 h-32 flex items-center justify-center">
                <img
                  src="/images/products/clean-tec-500ml.png"
                  alt="Clean Tec 500ml"
                  className="h-full object-contain"
                />
              </div>
              <h4 className="font-bold text-sm text-secondary">Clean Tec</h4>
              <p className="text-xs text-muted-foreground">Desengraxante Multiuso 500ml</p>
            </div>
            <div className="text-center">
              <div className="bg-muted rounded-xl p-4 mb-3 h-32 flex items-center justify-center">
                <img
                  src="/images/products/desengrax-500ml.png"
                  alt="Desengrax 500ml"
                  className="h-full object-contain"
                />
              </div>
              <h4 className="font-bold text-sm text-secondary">Desengrax</h4>
              <p className="text-xs text-muted-foreground">Desengraxante Integral 500ml</p>
            </div>
            <div className="text-center">
              <div className="bg-muted rounded-xl p-4 mb-3 h-32 flex items-center justify-center">
                <img src="/images/products/parafina-160g.png" alt="Parafina 160g" className="h-full object-contain" />
              </div>
              <h4 className="font-bold text-sm text-secondary">Parafina de Corrente</h4>
              <p className="text-xs text-muted-foreground">
                {"Lubrificação e proteção da corrente                           160g"}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-muted rounded-xl p-4 mb-3 h-32 flex items-center justify-center">
                <img src="/images/products/clear-bike-1l.png" alt="Clear Bike 1L" className="h-full object-contain" />
              </div>
              <h4 className="font-bold text-sm text-secondary">Clear Bike</h4>
              <p className="text-xs text-muted-foreground">Shampoo Multiuso 1L</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/5 rounded-xl p-4 mb-3 h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">+</div>
                  <p className="text-xs text-secondary font-semibold">Outros produtos</p>
                </div>
              </div>
              <h4 className="font-bold text-sm text-secondary">Catálogo completo</h4>
              <p className="text-xs text-muted-foreground">Consulte-nos</p>
            </div>
          </div>
          <Button
            size="lg"
            onClick={() => scrollToSection("parceria")}
            className="cursor-pointer bg-secondary text-white hover:bg-secondary/90 font-bold"
          >
            Conhecer condições de parceria
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
