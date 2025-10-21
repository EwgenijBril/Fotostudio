"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Camera, Users, Palette, Baby, FileText, Utensils, Package } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function LeistungenPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Camera,
      title: "Porträt Fotografie",
      description: "Professionelle Porträts für Business, Bewerbungen oder persönliche Zwecke",
      image: "/images/services/portrait-service.avif",
      features: [
        "Studio- oder Outdoor-Shooting",
        "Professionelle Bildbearbeitung",
        "Verschiedene Outfits möglich",
        "Digitale Galerie",
      ],
      price: "ab 150€",
      link: "/portfolio/portraet",
    },
    {
      icon: Palette,
      title: "Content Shooting",
      description: "Hochwertige Inhalte für Social Media, Websites und Marketing",
      image: "/images/services/content-service.avif",
      features: ["Konzeptentwicklung", "Styling-Beratung", "Mehrere Looks pro Shooting", "Social Media optimiert"],
      price: "ab 250€",
      link: "/portfolio/content-shooting",
    },
    {
      icon: Users,
      title: "Kreative Shootings",
      description: "Künstlerische und konzeptuelle Fotografie für besondere Projekte",
      image: "/images/services/creative-service.avif",
      features: [
        "Individuelle Konzepte",
        "Kreative Bildbearbeitung",
        "Requisiten und Styling",
        "Künstlerische Umsetzung",
      ],
      price: "ab 300€",
      link: "/portfolio/kreative-shooting",
    },
    {
      icon: Baby,
      title: "Kinder & Familie",
      description: "Liebevolle Familienporträts und Kinderfotos in entspannter Atmosphäre",
      image: "/images/services/family-service.avif",
      features: [
        "Natürliche Familienmomente",
        "Kinderfreundliche Umgebung",
        "Geduld und Einfühlungsvermögen",
        "Spielerische Herangehensweise",
      ],
      price: "ab 200€",
      link: "/portfolio/kinder-und-familie",
    },
    {
      icon: FileText,
      title: "Reportage",
      description: "Dokumentarische Fotografie für Events, Hochzeiten und besondere Anlässe",
      image: "/images/services/reportage-service.avif",
      features: [
        "Diskrete Dokumentation",
        "Natürliche Momente",
        "Vollständige Berichterstattung",
        "Schnelle Lieferung",
      ],
      price: "ab 400€",
      link: "/portfolio/reportage",
    },
    {
      icon: Utensils,
      title: "Food Fotografie",
      description: "Appetitliche Aufnahmen für Restaurants, Cafés und Food-Blogger",
      image: "/images/services/food-service.avif",
      features: [
        "Professionelle Food-Styling",
        "Appetitliche Präsentation",
        "Restaurant oder Studio",
        "Menü-Fotografie",
      ],
      price: "ab 180€",
      link: "/portfolio/food-foto",
    },
    {
      icon: Package,
      title: "Produkt Fotografie",
      description: "Hochwertige Produktaufnahmen für E-Commerce und Marketing",
      features: [
        "Weißer Hintergrund oder Lifestyle",
        "Mehrere Perspektiven",
        "E-Commerce optimiert",
        "Schnelle Bearbeitung",
      ],
      price: "ab 120€",
      link: "/portfolio/produkt-foto",
    },
  ]

  return (
    <div className="pt-24 bg-dark">
      {/* Hero Section */}
      <section className="py-32 bg-dark-secondary relative overflow-hidden">
        <div className="container-cinematic text-center relative z-10">
          <div className={`${isVisible ? "animate-cinematic-slide-up" : ""}`}>
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">MEINE EXPERTISE</div>
            <h1 className="font-light tracking-wide mb-8 text-white text-cinematic accent-line-gold inline-block">
              Leistungen
            </h1>
            <p className="text-white/90 mb-4 max-w-4xl mx-auto font-light leading-relaxed">
              Mein Dienstleistungsfeld umfasst mehrere Richtungen der Fotografie.
            </p>
            <p className="text-white/70 max-w-3xl mx-auto font-light">
              Zu jeder Anfrage komme ich individuell heran.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="container-cinematic">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`glass-dark rounded-2xl overflow-hidden cinematic-shadow hover-cinematic ${
                  isVisible ? (index % 2 === 0 ? "animate-cinematic-slide-in" : "animate-cinematic-slide-in-right") : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 glass-gold rounded-xl flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="glass-dark rounded-lg px-4 py-2">
                      <div className="text-xl font-light text-gold">{service.price}</div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-light text-white mb-4 text-cinematic">{service.title}</h3>
                  <p className="text-white/80 mb-6 leading-relaxed font-light">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-gold mr-3 flex-shrink-0" />
                        <span className="text-white/70 font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <Button
                      asChild
                      className="flex-1 btn-primary"
                    >
                      <Link href={service.link}><span>Portfolio</span></Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent cinematic-border font-medium"
                    >
                      <Link href="/kontakt"><span>Anfragen</span></Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-dark-secondary">
        <div className="container-cinematic">
          <div
            className={`text-center glass-dark rounded-2xl p-8 ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "1.4s" }}
          >
            <p className="text-white/80 font-light mb-2">
              * Der angegebene Preis gilt für Freudenstadt und die umliegende Region innerhalb von 50 km.
            </p>
            <p className="text-white/60 font-light">
              Bei Entfernungen von mehr als 50 km fällt ein Aufpreis von 20 € an.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="container-cinematic">
          <div
            className={`text-center mb-20 ${isVisible ? "animate-cinematic-slide-up" : ""}`}
            style={{ animationDelay: "1.6s" }}
          >
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">WORKFLOW</div>
            <h2 className="font-light tracking-wide text-white text-cinematic accent-line-gold inline-block">
              Arbeitsprozess
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Beratung",
                description: "Kostenloses Erstgespräch zur Klärung Ihrer Wünsche und Vorstellungen.",
              },
              {
                step: "02",
                title: "Planung",
                description: "Detailplanung des Shootings inklusive Location, Styling und Konzept.",
              },
              {
                step: "03",
                title: "Shooting",
                description: "Professionelle Durchführung in entspannter und kreativer Atmosphäre.",
              },
              {
                step: "04",
                title: "Lieferung",
                description: "Professionelle Bildbearbeitung und Lieferung Ihrer finalen Bilder.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className={`text-center glass-dark rounded-2xl p-8 hover-gold-lift ${
                  isVisible ? "animate-cinematic-slide-up" : ""
                }`}
                style={{ animationDelay: `${1.8 + index * 0.2}s` }}
              >
                <div className="text-5xl font-light text-gold mb-6 text-cinematic">{process.step}</div>
                <h3 className="text-xl font-light mb-4 text-white text-cinematic">{process.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 gradient-cinematic text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gold/5 to-transparent" />
        </div>

        <div className="container-cinematic text-center relative z-10">
          <div className={`${isVisible ? "animate-cinematic-slide-up" : ""}`} style={{ animationDelay: "2.6s" }}>
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-6 text-dramatic">
              BEREIT FÜR IHR SHOOTING?
            </div>
            <h2 className="font-light tracking-wide mb-8 text-cinematic text-glow">
              Lassen Sie uns
              <span className="block text-gold">Ihr Projekt starten</span>
            </h2>
            <p className="text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Kontaktieren Sie mich für ein unverbindliches Beratungsgespräch und lassen Sie uns Ihr perfektes Shooting
              planen.
            </p>
            <Button
              asChild
              size="lg"
              className="px-12 py-6 btn-primary text-xl animate-gold-glow"
            >
              <Link href="/kontakt"><span>Jetzt Kontakt aufnehmen</span></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
