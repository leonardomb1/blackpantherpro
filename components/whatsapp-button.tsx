"use client"

import { MessageCircle } from "lucide-react"

export function WhatsappButton() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/551932649607?text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Black%20Panther%20Pro",
      "_blank",
    )
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco!
      </span>
    </button>
  )
}
