"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function KontaktPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="pt-24 bg-dark">
      {/* Hero Section */}
      <section className="py-32 bg-dark-secondary relative overflow-hidden">
        <div className="container-cinematic text-center relative z-10">
          <div className={`${isVisible ? "animate-cinematic-slide-up" : ""}`}>
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">KONTAKT</div>
            <h1 className="font-light tracking-wide mb-8 text-white text-cinematic accent-line-gold inline-block">
              Lassen Sie uns
              <span className="block text-gold text-glow">sprechen</span>
            </h1>
            <p className="text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              Lassen Sie uns über Ihr nächstes Fotoprojekt sprechen. Ich freue mich auf Ihre Nachricht und berate Sie
              gerne unverbindlich.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="container-cinematic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className={`${isVisible ? "animate-cinematic-slide-in" : ""}`} style={{ animationDelay: "0.4s" }}>
              <div className="glass-dark rounded-2xl p-8 cinematic-shadow">
                <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">NACHRICHT SENDEN</div>
                <h3 className="font-light tracking-wide mb-8 text-white text-cinematic accent-line-gold">
                  Projekt anfragen
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white/80 font-light mb-2 block">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="bg-dark-tertiary border-gold/30 text-white placeholder:text-white/40 focus:border-gold transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white/80 font-light mb-2 block">
                        E-Mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="bg-dark-tertiary border-gold/30 text-white placeholder:text-white/40 focus:border-gold transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-white/80 font-light mb-2 block">
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="bg-dark-tertiary border-gold/30 text-white placeholder:text-white/40 focus:border-gold transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-white/80 font-light mb-2 block">
                        Gewünschte Leistung
                      </Label>
                      <Select onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className="bg-dark-tertiary border-gold/30 text-white focus:border-gold transition-colors duration-300">
                          <SelectValue placeholder="Bitte wählen" />
                        </SelectTrigger>
                        <SelectContent className="bg-dark-tertiary border-gold/30">
                          <SelectItem value="portraet">Porträt</SelectItem>
                          <SelectItem value="content">Content Shooting</SelectItem>
                          <SelectItem value="kreativ">Kreative Shootings</SelectItem>
                          <SelectItem value="familie">Kinder & Familie</SelectItem>
                          <SelectItem value="reportage">Reportage</SelectItem>
                          <SelectItem value="food">Food Fotografie</SelectItem>
                          <SelectItem value="produkt">Produkt Fotografie</SelectItem>
                          <SelectItem value="sonstiges">Sonstiges</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-white/80 font-light mb-2 block">
                      Budget
                    </Label>
                    <Select onValueChange={(value) => handleChange("budget", value)}>
                      <SelectTrigger className="bg-dark-tertiary border-gold/30 text-white focus:border-gold transition-colors duration-300">
                        <SelectValue placeholder="Bitte wählen" />
                      </SelectTrigger>
                      <SelectContent className="bg-dark-tertiary border-gold/30">
                        <SelectItem value="unter-200">Unter 200€</SelectItem>
                        <SelectItem value="200-500">200€ - 500€</SelectItem>
                        <SelectItem value="500-1000">500€ - 1.000€</SelectItem>
                        <SelectItem value="1000-2000">1.000€ - 2.000€</SelectItem>
                        <SelectItem value="ueber-2000">Über 2.000€</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white/80 font-light mb-2 block">
                      Nachricht *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      rows={6}
                      className="bg-dark-tertiary border-gold/30 text-white placeholder:text-white/40 focus:border-gold transition-colors duration-300"
                      placeholder="Erzählen Sie mir von Ihrem Projekt..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full px-8 py-6 btn-primary text-lg"
                  >
                    <Send className="h-5 w-5 mr-3" />
                    Nachricht senden
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div
              className={`${isVisible ? "animate-cinematic-slide-in-right" : ""}`}
              style={{ animationDelay: "0.6s" }}
            >
              <div className="glass-dark rounded-2xl p-8 cinematic-shadow">
                <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">
                  KONTAKTINFORMATIONEN
                </div>
                <h3 className="font-light tracking-wide mb-8 text-white text-cinematic accent-line-gold">
                  Erreichen Sie mich
                </h3>

                <div className="space-y-8 mb-12">
                  {[
                    {
                      icon: Mail,
                      title: "E-Mail",
                      content: "d.golovchenko@gmx.de",
                      href: "mailto:d.golovchenko@gmx.de",
                    },
                    {
                      icon: MessageCircle,
                      title: "WhatsApp",
                      content: "+49 152 09029117",
                      href: "https://wa.me/4915209029117",
                    },
                    {
                      icon: Clock,
                      title: "Verfügbarkeit",
                      content: "Mo - Fr: 9:00 - 18:00\nSa: 10:00 - 16:00\nSo: Nach Vereinbarung",
                      href: null,
                    },
                  ].map((contact, index) => (
                    <div
                      key={contact.title}
                      className={`flex items-start gap-4 p-4 rounded-xl hover:glass-gold transition-all duration-300 ${
                        isVisible ? "animate-cinematic-fade-in" : ""
                      }`}
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <contact.icon className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-light mb-2 text-white text-cinematic">{contact.title}</h4>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-white/80 hover:text-gold transition-colors duration-300 font-light whitespace-pre-line"
                          >
                            {contact.content}
                          </a>
                        ) : (
                          <p className="text-white/80 font-light whitespace-pre-line">{contact.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="glass-gold rounded-2xl p-6">
                  <h3 className="font-light mb-4 text-white text-cinematic">Schnelle Antwort garantiert</h3>
                  <p className="text-white/80 mb-4 font-light leading-relaxed">
                    Ich antworte in der Regel innerhalb von 24 Stunden auf alle Anfragen. Für dringende Anfragen können
                    Sie mich auch telefonisch oder über WhatsApp erreichen.
                  </p>
                  <p className="text-sm text-white/60 font-light">* Pflichtfelder müssen ausgefüllt werden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-32 bg-dark-secondary relative overflow-hidden">
        <div className="container-cinematic text-center">
          <div className={`${isVisible ? "animate-cinematic-slide-up" : ""}`} style={{ animationDelay: "1.4s" }}>
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">SERVICE GEBIET</div>
            <h2 className="font-light tracking-wide mb-8 text-white text-cinematic accent-line-gold inline-block">
              Mein Einzugsgebiet
            </h2>
            <div className="glass-dark rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-xl text-white/90 mb-4 font-light">
                Ich bin in <span className="text-gold font-medium text-xl">Freudenstadt</span> und der umliegenden Region tätig.
              </p>
              <p className="text-white/70 font-light leading-relaxed">
                * Der angegebene Preis gilt für Freudenstadt und die umliegende Region innerhalb von 50 km.
                <br />
                Bei Entfernungen von mehr als 50 km fällt ein Aufpreis von 20 € an.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
