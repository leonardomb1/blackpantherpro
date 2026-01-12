import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { ProductsSection } from "@/components/products-section"
import { VideoSection } from "@/components/video-section"
import { BenefitsSection } from "@/components/benefits-section"
import { PartnershipSection } from "@/components/partnership-section"
import { ProcessSection } from "@/components/process-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { WhatsappButton } from "@/components/whatsapp-button"

export default function Home() {
  // Exemplos válidos:
  // - "https://www.youtube.com/watch?v=VIDEO_ID"
  // - "https://youtu.be/VIDEO_ID"
  // - "https://vimeo.com/VIDEO_ID"
  const videoUrl = "" // Cole o link do seu vídeo aqui dentro das aspas

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <DifferentialsSection />
      <ProductsSection />
      <VideoSection videoUrl={videoUrl} />
      <BenefitsSection />
      <PartnershipSection />
      <ProcessSection />
      <ContactFormSection />
      <FAQSection />
      <Footer />
      <WhatsappButton />
    </main>
  )
}
