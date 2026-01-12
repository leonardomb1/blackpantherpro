"use client"

import { Building2, Award, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary mb-6 text-balance">
            Tecnologia industrial para o ciclismo profissional
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A Black Panther Pro nasce da experiência de 20 anos da BIOVAX em química industrial, trazendo performance
            técnica comprovada e margens atrativas para seu negócio.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("contato")}
            className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
          >
            Quero ser parceiro
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <div className="bg-muted rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">Origem Industrial</h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              BIOVAX com 20 anos de experiência em produtos químicos de alta performance para diversos segmentos
              industriais.
            </p>
          </div>

          <div className="bg-muted rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">Foco em Performance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Produtos desenvolvidos com tecnologia cerosa premium para durabilidade comprovada e mínimo acúmulo de
              sujeira.
            </p>
          </div>

          <div className="bg-muted rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-11">Parceria B2B</h3>
            <p className="text-muted-foreground leading-relaxed">
              Não competimos com nossos parceiros. Foco 100% em venda B2B para bike shops, oficinas e distribuidores.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%2810%29-yiI68FBbyt7pBFRO7OgZXyWUhqdTwv.png"
              alt="Cera de Corrente Black Panther Pro"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-6 text-balance">
              Produtos que <span className="text-primary">impulsionam suas vendas</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
              Nossa linha foi desenvolvida para entregar performance ao ciclista e margem ao lojista. Com embalagens profissionais, grande diversidade de produtos e suporte técnico completo.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Margens entre 40% e 60% para revenda em todos itens.  </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Performance comprovada de todos nossos produtos.            </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Suporte técnico e material de venda incluídos.</span>
              </li>
            </ul>
            <Button
              size="lg"
              onClick={() => scrollToSection("produtos")}
              className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
            >
              Ver linha completa
            </Button>
          </div>
        </div>

        <div className="bg-secondary rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-balance">
                Por trás da solução, tem <span className="text-primary">engenharia química</span>
              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Nossa linha nasce de base industrial sólida: desenvolvimento químico sério, aplicado ao mundo da bike.
                Anos de experiência em formulação química antes de chegar ao ciclismo, produtos desenvolvidos em
                conjunto com mecânicos, lojistas e ciclistas.
              </p>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("produtos")}
                className="border-2 border-white hover:bg-white hover:text-secondary font-bold text-foreground"
              >
                Ver mais detalhes técnicos
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-white/80">Controle de qualidade</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-white/80">Suporte ativo</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                <div className="text-sm text-white/80">Venda direta</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-2">60mL á 1Lt  </div>
                <div className="text-sm text-white/80">Frasco de diversos tamanhos  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
