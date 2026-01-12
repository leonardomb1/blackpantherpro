import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "A Black Panther Pro vende direto ao consumidor final?",
      answer:
        "Não. Nosso foco é 100% B2B. Trabalhamos exclusivamente com bike shops, oficinas e distribuidores. Não competimos com nossos parceiros.",
    },
    {
      question: "Qual é o foco comercial da Black Panther Pro?",
      answer:
        "Nosso foco é fornecer produtos premium de alta performance para parceiros B2B, com margem competitiva de 40% a 60% e suporte técnico completo para fazer seu negócio crescer.",
    },
    {
      question: "Existe material técnico e treinamento para a equipe de vendas?",
      answer:
        "Sim! Fornecemos materiais de sell-out completos: displays, artes, vídeos, fichas técnicas e conteúdo pronto para usar. Também oferecemos suporte técnico direto para sua equipe.",
    },
    {
      question: "Qual o diferencial da Black Panther Pro frente aos concorrentes?",
      answer:
        "Base cerosa premium (não oleosa) com durabilidade comprovada de +80 km, controle de qualidade industrial BIOVAX (20 anos), margem B2B de 40-60%, frasco 60 mL ideal para giro rápido e atendimento humano focado em parceria.",
    },
    {
      question: "Qual o pedido mínimo para se tornar parceiro?",
      answer:
        "Entre em contato através do formulário e nossa equipe apresentará as condições comerciais ideais para o seu tipo de negócio, sem compromisso.",
    },
    {
      question: "Como funciona o pós-venda e suporte?",
      answer:
        "Temos um time dedicado com atendimento humano e direto, focado em fazer seu negócio crescer. Oferecemos suporte técnico, materiais de marketing contínuos e acompanhamento ativo do giro dos produtos.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
              FAQ
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary mb-6 text-balance">Perguntas frequentes</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tire suas dúvidas sobre a parceria Black Panther Pro
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 border-2 border-border hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-secondary hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
            <p className="text-secondary font-bold">Entre em contato e nossa equipe responde rapidamente.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
