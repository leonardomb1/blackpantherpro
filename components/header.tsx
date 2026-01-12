"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle scrolling to sections with hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [pathname])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/logo-large.png" alt="Black Panther Pro" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/#sobre"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault()
                  scrollToSection("sobre")
                }
              }}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/#diferenciais"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault()
                  scrollToSection("diferenciais")
                }
              }}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Diferenciais
            </Link>
            <Link
              href="/produtos"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Produtos
            </Link>
            <Link
              href="/#parceria"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault()
                  scrollToSection("parceria")
                }
              }}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Parceria B2B
            </Link>
            <Link
              href="/#contato"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault()
                  scrollToSection("contato")
                }
              }}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <Button
            asChild
            className="hidden lg:flex bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
          >
            <Link
              href="/#contato"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault()
                  scrollToSection("contato")
                }
              }}
            >
              Seja Parceiro
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/#sobre"
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault()
                    scrollToSection("sobre")
                  }
                }}
                className="text-left text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="/#diferenciais"
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault()
                    scrollToSection("diferenciais")
                  }
                }}
                className="text-left text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Diferenciais
              </Link>
              <Link
                href="/produtos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Produtos
              </Link>
              <Link
                href="/#parceria"
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault()
                    scrollToSection("parceria")
                  }
                }}
                className="text-left text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Parceria B2B
              </Link>
              <Link
                href="/#contato"
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault()
                    scrollToSection("contato")
                  }
                }}
                className="text-left text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Contato
              </Link>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold w-full"
              >
                <Link
                  href="/#contato"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection("contato")
                    }
                  }}
                >
                  Seja Parceiro
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}