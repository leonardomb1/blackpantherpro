"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239ACD32' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Lubrificantes profissionais
              <span className="text-primary"> para bike shops</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Performance comprovada e margens atrativas para seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base h-12 px-8"
              >
                Quero ser parceiro
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("produtos")}
                className="cursor-pointer border-2 border-white hover:bg-white hover:text-secondary font-bold text-base h-12 px-8 text-foreground"
              >
                Ver produtos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">+80km</div>
                <div className="text-sm text-white/80">Por aplicação</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">40-60%</div>
                <div className="text-sm text-white/80">Margem B2B</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">20 anos</div>
                <div className="text-sm text-white/80">Base industrial</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm p-8 bg-popover-foreground">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%2813%29-jqafErIWpCeJYsYEl21iwndsBG74Jy.png"
                alt="Linha completa Black Panther Pro"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Floating Card */}
            
          </div>
        </div>
      </div>
    </section>
  )
}
