"use client"

import { Instagram, Facebook, Youtube } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (id: string) => {
    // If we're on the home page, scroll directly
    if (pathname === '/') {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Navigate to home page with hash
      router.push(`/#${id}`)
    }
  }

  return (
    <footer className="bg-secondary text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/images/logo-color.png" alt="Black Panther Pro" className="h-10 w-auto" />
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Produtos químicos premium para ciclismo com foco em parceria B2B. Base industrial BIOVAX – 20 anos de
              experiência em química de alta performance.
            </p>
            <p className="text-sm text-white/60">Performance comprovada. Margem competitiva. Parceria real.</p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/blackpantherpro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/blackpantherpro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@blackpantherpro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#sobre"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection("sobre")
                    }
                  }}
                  className="cursor-pointer text-white/80 hover:text-primary transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos"
                  className="cursor-pointer text-white/80 hover:text-primary transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/#parceria"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection("parceria")
                    }
                  }}
                  className="cursor-pointer text-white/80 hover:text-primary transition-colors"
                >
                  Parceria B2B
                </Link>
              </li>
              <li>
                <Link
                  href="/#contato"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection("contato")
                    }
                  }}
                  className="cursor-pointer text-white/80 hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Contato B2B</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="mailto:atendimento@bvquimica.com.br" className="hover:text-primary transition-colors">
                  atendimento@bvquimica.com.br
                </a>
              </li>
              <li>
                <a href="tel:+551932649607" className="hover:text-primary transition-colors">
                  (19) 3264-9607
                </a>
              </li>
              <li className="pt-2 text-white/60">Atendimento: Seg-Sex, 8h-18h</li>
            </ul>
            <div className="mt-4 text-xs text-white/60 leading-relaxed">
              <p>R. Alberto Guizo, 190</p>
              <p>Distrito Industrial João Narezzi</p>
              <p>Indaiatuba - SP, 13347-402</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {currentYear} Black Panther Pro. Todos os direitos reservados.</p>
            <p>Marca BIOVAX Indústria Química | CNPJ: 47.467.043/0001-45</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
