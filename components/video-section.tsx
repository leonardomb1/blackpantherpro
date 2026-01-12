"use client"

import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import { useState } from "react"

interface VideoSectionProps {
  videoUrl?: string
}

export function VideoSection({ videoUrl }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    const videoId = match && match[2].length === 11 ? match[2] : null
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : null
  }

  const getVimeoEmbedUrl = (url: string) => {
    const regExp = /vimeo.com\/(\d+)/
    const match = url.match(regExp)
    return match ? `https://player.vimeo.com/video/${match[1]}?autoplay=1` : null
  }

  const embedUrl = videoUrl
    ? videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")
      ? getYouTubeEmbedUrl(videoUrl)
      : videoUrl.includes("vimeo.com")
        ? getVimeoEmbedUrl(videoUrl)
        : null
    : null

  if (!videoUrl || videoUrl.trim() === "") {
    return null
  }

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Veja Black Panther Pro em Ação</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Performance comprovada em condições reais. Assista e entenda por que somos a escolha de bike shops
              profissionais.
            </p>
          </div>

          <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary transition-all">
            <div className="relative aspect-video bg-black/90">
              {embedUrl && isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src={embedUrl}
                  title="Black Panther Pro - Vídeo Institucional"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/80 to-black/60">
                  <div className="text-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/90 transition-all transform hover:scale-110 cursor-pointer shadow-lg"
                      aria-label="Reproduzir vídeo"
                    >
                      <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                    </button>
                    <p className="text-white font-medium text-lg">
                      {embedUrl ? "Clique para assistir" : "Formato de vídeo não suportado"}
                    </p>
                    <p className="text-white/60 text-sm mt-2">Vídeo institucional Black Panther Pro</p>
                  </div>
                </div>
              )}
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center border-primary/20 hover:border-primary/40 transition-colors">
              <p className="text-4xl font-bold text-primary mb-2">+80km</p>
              <p className="text-sm text-muted-foreground">Performance por aplicação</p>
            </Card>
            <Card className="p-6 text-center border-primary/20 hover:border-primary/40 transition-colors">
              <p className="text-4xl font-bold text-primary mb-2">40-60%</p>
              <p className="text-sm text-muted-foreground">Margem para parceiros</p>
            </Card>
            <Card className="p-6 text-center border-primary/20 hover:border-primary/40 transition-colors">
              <p className="text-4xl font-bold text-primary mb-2">20 anos</p>
              <p className="text-sm text-muted-foreground">Base industrial BIOVAX</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
