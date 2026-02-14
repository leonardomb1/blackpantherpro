"use client"

import type React from "react"

import { useState } from "react"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [businessType, setBusinessType] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      city: formData.get("city"),
      state: formData.get("state"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      businessType: businessType,
    }

    try {
      const response = await fetch("https://formspree.io/f/xlggewee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // Meta Pixel: Lead event (primary conversion for ad optimization)
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead", {
            content_name: "Formulário de Parceria B2B",
            content_category: data.businessType,
            value: 0,
            currency: "BRL",
          })

          // Meta Pixel: Contact event (user initiated contact)
          window.fbq("track", "Contact")

          // Meta Pixel: SubmitApplication event (B2B partnership application)
          window.fbq("track", "SubmitApplication", {
            content_name: "Parceria Black Panther Pro",
            content_category: data.businessType,
          })
        }

        setSubmitted(true)
      } else {
        console.error("[v0] Erro ao enviar formulário")
        alert("Erro ao enviar formulário. Por favor, entre em contato pelo WhatsApp: +55 19 3264-9607")
      }
    } catch (error) {
      console.error("[v0] Erro ao enviar formulário:", error)
      alert("Erro ao enviar formulário. Por favor, entre em contato pelo WhatsApp: +55 19 3264-9607")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="contato" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-2xl mx-auto p-8 lg:p-12 text-center border-2 border-primary">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4">Formulário enviado com sucesso!</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Nossa equipe entrará em contato em até <strong className="text-primary">24 horas</strong> para iniciar
              nossa parceria.
            </p>
            <p className="text-sm text-muted-foreground">Fique atento ao seu WhatsApp e e-mail.</p>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* Left Column - Info */}
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
              SEJA PARCEIRO
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary mb-6 text-balance">Vamos crescer juntos?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato para apresentar as condições comerciais e iniciar
              nossa parceria.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                  <div className="font-bold text-secondary">Resposta em até 24h</div>
                  <div className="text-sm text-muted-foreground">Atendimento ágil e humano</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                  <div className="font-bold text-secondary">Sem compromisso</div>
                  <div className="text-sm text-muted-foreground">Conheça a proposta sem obrigação</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                  <div className="font-bold text-secondary">Condições especiais</div>
                  <div className="text-sm text-muted-foreground">Margem de 40% a 60% e suporte completo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="p-8 lg:p-10 border-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-bold text-secondary">
                  Nome completo *
                </Label>
                <Input id="name" name="name" required placeholder="Seu nome" className="h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-bold text-secondary">
                  Empresa *
                </Label>
                <Input id="company" name="company" required placeholder="Nome da empresa" className="h-12" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-bold text-secondary">
                    Cidade *
                  </Label>
                  <Input id="city" name="city" required placeholder="Sua cidade" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-sm font-bold text-secondary">
                    Estado *
                  </Label>
                  <Input id="state" name="state" required placeholder="UF" maxLength={2} className="h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-bold text-secondary">
                  E-mail *
                </Label>
                <Input id="email" name="email" type="email" required placeholder="seu@email.com" className="h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-sm font-bold text-secondary">
                  WhatsApp *
                </Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business-type" className="text-sm font-bold text-secondary">
                  Tipo de negócio *
                </Label>
                <Select required value={businessType} onValueChange={setBusinessType}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bike-shop">Bike Shop</SelectItem>
                    <SelectItem value="oficina">Oficina</SelectItem>
                    <SelectItem value="distribuidor">Distribuidor</SelectItem>
                    <SelectItem value="atacadista">Atacadista</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base h-12"
              >
                {loading ? (
                  "Enviando..."
                ) : (
                  <>
                    Quero ser parceiro Black Panther Pro
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Ao enviar, você concorda em receber contato da nossa equipe comercial.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
