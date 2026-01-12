"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsappButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Droplets, Mountain, Shield, Sparkles, Bike } from "lucide-react"
import Link from "next/link"

export default function ProdutosPage() {
  const router = useRouter()

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/#contato")
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary text-primary-foreground">Linha Completa</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Produtos Black Panther Pro</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Lubrificantes e limpadores profissionais desenvolvidos para máxima performance e durabilidade
            </p>
          </div>
        </div>
      </section>

      {/* Cuidados com a Corrente */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Cuidados com a Corrente</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lubrificantes especializados para cada tipo de condição e terreno
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Cera Seco Mountain Bike */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary flex flex-col">
              <div className="aspect-square mb-6 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src="/images/products/cera-seca-60ml.png"
                  alt="Cera de Corrente Seco Mountain Bike"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Mountain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Cera de Corrente Seco Mountain Bike</h3>
                  <Badge className="bg-primary/10 text-primary mb-3">60ml</Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed min-h-[4.5rem]">
                Especialmente indicado para correntes de bicicletas MTB, oferecendo proteção e desempenho em condições
                de baixa umidade e poeira.
              </p>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Indicado para trilhas secas e estradas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Proteção contra poeira e sujidades</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Caixa com 20 unidades de 60ml</p>
                </div>
              </div>
              <Link href="/#contato" onClick={handleContactClick} className="mt-auto">
                <Button className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                  Solicitar Orçamento
                </Button>
              </Link>
            </Card>

            {/* Cera Úmido Speed Bike */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary flex flex-col">
              <div className="aspect-square mb-6 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src="/images/products/cera-umida-60ml.png"
                  alt="Cera de Corrente Úmido Speed Bike"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Droplets className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Cera de Corrente Úmido Speed Bike</h3>
                  <Badge className="bg-primary/10 text-primary mb-3">60ml</Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed min-h-[4.5rem]">
                Recomendado para ambientes controlados livres de poeira. Ideal para uso em chuva, asfalto ou pistas sem
                poeira e sujidades.
              </p>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Perfeito para uso em chuva</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Ambientes controlados sem poeira</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Caixa com 20 unidades de 60ml</p>
                </div>
              </div>
              <Link href="/#contato" onClick={handleContactClick} className="mt-auto">
                <Button className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                  Solicitar Orçamento
                </Button>
              </Link>
            </Card>

            {/* Parafina de Corrente */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary flex flex-col">
              <div className="aspect-square mb-6 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src="/images/products/parafina-160g.png"
                  alt="Parafina de Corrente"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Parafina de Corrente</h3>
                  <Badge className="bg-primary/10 text-primary mb-3">160g</Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed min-h-[4.5rem]">
                Cria uma película que reduz atrito, repele sujeira e aumenta a durabilidade da corrente, coroas e
                cassete.
              </p>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Todo tipo de ambiente e climas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Máxima durabilidade dos componentes</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Caixa com 20 unidades de 120ml</p>
                </div>
              </div>
              <Link href="/#contato" onClick={handleContactClick} className="mt-auto">
                <Button className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                  Solicitar Orçamento
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Cuidados com a Bike */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Cuidados com a Bike</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Limpadores profissionais para manutenção completa da bicicleta
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Desengrax */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary flex flex-col">
              <div className="aspect-square mb-6 flex items-center justify-center bg-white rounded-lg overflow-hidden">
                <img
                  src="/images/products/desengrax-500ml.png"
                  alt="Desengrax"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Desengrax</h3>
                  <Badge className="bg-primary/10 text-primary mb-3">500ml</Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed min-h-[4.5rem]">
                Indicado para limpeza em geral, principalmente peças em metal que tendem a evitar o contato com água.
              </p>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Cria um filme protetor</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Seca rapidamente</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Biodegradável</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Caixa com 15 unidades de 500ml</p>
                </div>
              </div>
              <Link href="/#contato" onClick={handleContactClick} className="mt-auto">
                <Button className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                  Solicitar Orçamento
                </Button>
              </Link>
            </Card>

            {/* Clean Tec */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary flex flex-col">
              <div className="aspect-square mb-6 flex items-center justify-center bg-white rounded-lg overflow-hidden">
                <img
                  src="/images/products/clean-tec-500ml.png"
                  alt="Clean Tec"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Clean Tec</h3>
                  <Badge className="bg-primary/10 text-primary mb-3">500ml</Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed min-h-[4.5rem]">
                Indicado para remoção de graxa, óleo e sujeira pesada. Muito recomendado para limpeza da corrente de
                bikes em geral.
              </p>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Remove sujeira pesada</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Não ataca plásticos, borrachas ou tintas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Ideal para correntes</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Caixa com 15 unidades de 500ml</p>
                </div>
              </div>
              <Link href="/#contato" onClick={handleContactClick} className="mt-auto">
                <Button className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                  Solicitar Orçamento
                </Button>
              </Link>
            </Card>

            {/* Clear Bike - Shampoo Multiuso */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary flex flex-col">
              <div className="aspect-square mb-6 flex items-center justify-center bg-white rounded-lg overflow-hidden">
                <img
                  src="/images/products/clear-bike-1l.png"
                  alt="Clear Bike Shampoo Multiuso"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Bike className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Clear Bike - Shampoo Multiuso</h3>
                  <Badge className="bg-primary/10 text-primary mb-3">1 Litro</Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed min-h-[4.5rem]">
                Remove com eficiência sujidades do dia a dia, além de ajudar a prevenir ferrugem e corrosão em partes
                metálicas.
              </p>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Preserva mecânica e corrente</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Seguro para todos os materiais</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Alumínio, aço, carbono e plásticos</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Caixa com 15 unidades de 1L</p>
                </div>
              </div>
              <Link href="/#contato" onClick={handleContactClick} className="mt-auto">
                <Button className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                  Solicitar Orçamento
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto p-12 text-center border-2 border-primary">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Quer revender Black Panther Pro?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Margens de 40% a 60% e produtos de alta performance comprovada. Fale com nosso time comercial e conheça as
              condições de parceria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contato" onClick={handleContactClick}>
                <Button
                  size="lg"
                  className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 font-bold w-full sm:w-auto"
                >
                  Falar com Comercial
                </Button>
              </Link>
              <a
                href="https://wa.me/551932649607?text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Black%20Panther%20Pro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer border-primary text-primary hover:bg-primary/10 font-bold bg-transparent w-full sm:w-auto"
                >
                  Baixar Catálogo
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  )
}