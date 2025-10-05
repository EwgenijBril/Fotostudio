"use client"

import Image from "next/image"
import { Camera, Award, Users, Heart, Star, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="pt-24 bg-dark">
      {/* Hero Section */}
      <section className="py-20 bg-dark-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-gold rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-gold rounded-full" />
        </div>

        <div className="container-cinematic relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className={`${isVisible ? "animate-cinematic-slide-in" : ""}`}>
              <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">ÜBER MICH</div>
              <h1 className="font-light tracking-wide mb-8 text-white text-cinematic accent-line-gold">
                Willkommen in meiner
                <span className="block text-gold text-glow">Fotowelt</span>
              </h1>
              <p className="text-white/90 mb-8 font-light leading-relaxed">
                Hallo! Mein Name ist Daria und ich bin eine leidenschaftliche Fotografin. Ich brenne dafür, einzigartige
                Momente festzuhalten und Ihre Geschichte visuell zum Leben zu erwecken.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Camera, label: "10+ Jahre", sublabel: "Erfahrung" },
                  { icon: Users, label: "500+", sublabel: "Kunden" },
                  { icon: Award, label: "Ausgezeichnet", sublabel: "Qualität" },
                  { icon: Heart, label: "Mit Herz", sublabel: "& Leidenschaft" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`glass-dark rounded-2xl p-6 hover-gold-lift ${
                      isVisible ? "animate-cinematic-fade-in" : ""
                    }`}
                    style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                  >
                    <stat.icon className="h-8 w-8 text-gold mb-3" />
                    <div className="text-lg font-light text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-white/60 font-light">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`${isVisible ? "animate-cinematic-slide-in-right" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative corner-accent">
                <div className="relative h-[700px] rounded-2xl overflow-hidden cinematic-shadow hover-cinematic">
                  <Image
                    src="/images/daria-portrait.jpg"
                    alt="Daria - Leidenschaftliche Fotografin"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="container-cinematic">
          <div
            className={`text-center mb-16 ${isVisible ? "animate-cinematic-slide-up" : ""}`}
            style={{ animationDelay: "1.2s" }}
          >
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">MEINE GESCHICHTE</div>
            <h2 className="font-light tracking-wide text-white text-cinematic accent-line-gold inline-block">
              Leidenschaft
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {[
              "Egal ob es sich um Ihre besondere Veranstaltung, ein bedeutendes Ereignis oder die Präsentation Ihrer Produkte handelt - meine Bilder werden Ihre Emotionen einfangen und die Atmosphäre perfekt widerspiegeln.",
              "Wenn es um Werbefotos von Produkten geht, präsentieren wir sie auf eine Art und Weise, die das Verlangen nach einem Kauf weckt. Bei Blog- oder Social-Media-Shootings sorge ich dafür, dass Sie Aufmerksamkeit erregen und Vertrauen aufbauen.",
              "Durch individuelle Fotoshootings zeige ich Ihre Einzigartigkeit, um Ihre Individualität und Persönlichkeit zu unterstreichen.",
              "Als einfühlsame Fotografin verstehe ich die Bedeutung der Beziehungen und Momente zwischen Eltern und ihren Kindern. Meine Aufnahmen halten die Liebe, Freude und das Abenteuer des Familienlebens fest.",
            ].map((text, index) => (
              <p
                key={index}
                className={`text-white/80 leading-relaxed font-light ${
                  isVisible ? "animate-cinematic-fade-in" : ""
                }`}
                style={{ animationDelay: `${1.4 + index * 0.2}s` }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-32 bg-dark-secondary relative overflow-hidden">
        <div className="container-cinematic">
          <div
            className={`text-center mb-20 ${isVisible ? "animate-cinematic-slide-up" : ""}`}
            style={{ animationDelay: "2.2s" }}
          >
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">MEINE EXPERTISE</div>
            <h2 className="font-light tracking-wide text-white text-cinematic accent-line-gold inline-block">
              Was mich auszeichnet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: "Emotionen einfangen",
                description: "Ich halte die besonderen Momente und Emotionen fest, die Ihre Geschichte erzählen.",
              },
              {
                icon: Star,
                title: "Verkaufsstarke Produktfotos",
                description: "Produktpräsentationen, die das Verlangen nach einem Kauf wecken.",
              },
              {
                icon: Users,
                title: "Social Media Expertise",
                description: "Content, der Aufmerksamkeit erregt und Vertrauen aufbaut.",
              },
              {
                icon: Heart,
                title: "Familien & Kinder",
                description: "Entspannte Atmosphäre, in der sich alle wohlfühlen und authentisch sein können.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className={`text-center glass-dark rounded-2xl p-8 hover-gold-lift ${
                  isVisible ? "animate-cinematic-slide-up" : ""
                }`}
                style={{ animationDelay: `${2.4 + index * 0.2}s` }}
              >
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-light mb-4 text-white text-cinematic">{service.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-32 gradient-cinematic text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gold/5 to-transparent" />
        </div>

        <div className="container-cinematic text-center relative z-10">
          <div className={`${isVisible ? "animate-cinematic-slide-up" : ""}`} style={{ animationDelay: "3.2s" }}>
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-6 text-dramatic">HERZLICHE GRÜSSE</div>
            <div className="text-6xl font-light text-gold/30 mb-8 text-cinematic">Daria</div>
            <p className="text-white/90 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Lassen Sie uns gemeinsam Ihre einzigartige Geschichte in wunderschönen Bildern festhalten.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="px-12 py-6 btn-primary text-lg"
              >
                <Link href="/kontakt">
                  <span>Jetzt Kontakt aufnehmen</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="px-12 py-6 btn-primary text-lg"
              >
                <Link href="/portfolio/portraet"><span>Portfolio ansehen</span></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
