"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    city: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contato" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
            SEJA PARCEIRO
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary mb-6 text-balance">
            Nosso processo de parceria em 4 passos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Simples, direto e focado em fazer seu negócio crescer.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">01</span>
            </div>
            <h3 className="font-bold text-secondary mb-2">Preencha o formulário</h3>
            <p className="text-sm text-muted-foreground">Informe seus dados e tipo de negócio</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">02</span>
            </div>
            <h3 className="font-bold text-secondary mb-2">Nosso time entra em contato</h3>
            <p className="text-sm text-muted-foreground">Atendimento humano e rápido</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">03</span>
            </div>
            <h3 className="font-bold text-secondary mb-2">Catálogo e primeira compra</h3>
            <p className="text-sm text-muted-foreground">Materiais de apoio inclusos</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">04</span>
            </div>
            <h3 className="font-bold text-secondary mb-2">Pós-venda com foco em giro</h3>
            <p className="text-sm text-muted-foreground">Suporte contínuo ao parceiro</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-secondary mb-6">Quero ser parceiro Black Panther</h3>

            {isSubmitted ? (
              <div className="bg-primary/10 border-2 border-primary rounded-xl p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-secondary mb-2">Formulário enviado com sucesso!</h4>
                <p className="text-muted-foreground">
                  Nossa equipe entrará em contato em breve para apresentar as condições de parceria.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Seu nome completo"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="business">Nome do empreendimento *</Label>
                  <Input
                    id="business"
                    type="text"
                    required
                    value={formData.business}
                    onChange={(e) => handleChange("business", e.target.value)}
                    placeholder="Nome da sua bike shop, oficina ou distribuidora"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="city">Cidade/Estado *</Label>
                  <Input
                    id="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    placeholder="Ex: São Paulo/SP"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail comercial *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">WhatsApp com DDD *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="businessType">Tipo de negócio *</Label>
                  <Select value={formData.businessType} onValueChange={(value) => handleChange("businessType", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecione o tipo de negócio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bike-shop">Bike shop</SelectItem>
                      <SelectItem value="oficina">Oficina de bikes</SelectItem>
                      <SelectItem value="distribuidor">Distribuidora/atacadista</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Conte-nos mais sobre seu negócio e interesse na parceria"
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                >
                  Quero ser parceiro Black Panther
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda em ser contatado pela nossa equipe comercial.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-secondary to-secondary/95 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">E-mail B2B</div>
                    <a
                      href="mailto:atendimento@bvquimica.com.br"
                      className="text-white/90 hover:text-primary transition-colors"
                    >
                      atendimento@bvquimica.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Telefone</div>
                    <a href="tel:+551932649607" className="text-white/90 hover:text-primary transition-colors">
                      (19) 3264-9607
                    </a>
                    <div className="text-sm text-white/70 mt-1">Seg-Sex, 8h-18h</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Endereço</div>
                    <div className="text-white/90 text-sm leading-relaxed">
                      R. Alberto Guizo, 190
                      <br />
                      Distrito Industrial João Narezzi
                      <br />
                      Indaiatuba - SP, 13347-402
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-6">Dúvidas Frequentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-secondary mb-2">A Black Panther vende direto pro consumidor?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Não. Nosso foco é o B2B. A estratégia é fortalecer bike shops, oficinas e distribuidores parceiros,
                    não concorrer com eles.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-2">Qual o pedido mínimo?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Entre em contato com nossa equipe para conhecer as condições comerciais e pedido mínimo para sua
                    região.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-2">Vocês têm material técnico e treinamento?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sim! Fornecemos catálogo completo, material de ponto de venda, argumentos de venda e suporte técnico
                    para sua equipe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
