import { FileText, Phone, Package, TrendingUp } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Preenche o formulário",
      description: "Compartilhe suas informações e tipo de negócio",
    },
    {
      icon: Phone,
      number: "02",
      title: "Time entra em contato",
      description: "Atendimento humano e direto em até 24h",
    },
    {
      icon: Package,
      number: "03",
      title: "Primeira compra + materiais",
      description: "Receba os produtos e todo material de apoio",
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Pós-venda focado em giro",
      description: "Suporte contínuo para seu negócio crescer",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary mb-6 text-balance">Como funciona a parceria</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Processo simples e direto. Do primeiro contato ao crescimento do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-primary/20"></div>
                )}

                <div className="bg-white rounded-2xl p-6 text-center relative z-10 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary/20 mb-2">{step.number}</div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-bold text-secondary">Sem burocracia. Atendimento humano e rápido.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
