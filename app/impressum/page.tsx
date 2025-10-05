"use client"

import { useEffect, useState } from "react"
import { Building, Mail, Phone, MapPin, Scale, Globe } from "lucide-react"

export default function ImpressumPage() {
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

        <div className="container-cinematic text-center relative z-10">
          <div className={`${isVisible ? "animate-cinematic-slide-up" : ""}`}>
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">RECHTLICHES</div>
            <h1 className="font-light tracking-wide mb-8 text-white text-cinematic accent-line-gold inline-block">
              Impressum
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              Rechtliche Informationen und Kontaktdaten gemäß den gesetzlichen Bestimmungen
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="container-cinematic">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Business Information */}
            <div
              className={`glass-dark rounded-2xl p-8 cinematic-shadow ${isVisible ? "animate-cinematic-slide-in" : ""}`}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <Building className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-3xl font-light text-white text-cinematic">Angaben gemäß § 5 TMG</h2>
              </div>

              <div className="glass-gold rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-light text-white mb-6 text-cinematic">Daria Golovchenko</h3>
                  <div className="text-white/90 font-light space-y-2">
                    <p>Daria Golovchenko Fotografie</p>
                    <p>Kaufhausstraße 24</p>
                    <p>72250 Freudenstadt</p>
                    <p>Baden-Württemberg, Deutschland</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div
              className={`glass-dark rounded-2xl p-8 cinematic-shadow ${
                isVisible ? "animate-cinematic-slide-in-right" : ""
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-3xl font-light text-white text-cinematic">Kontakt</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-gold rounded-xl p-6 flex items-center gap-4">
                  <Phone className="h-6 w-6 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-white/80 font-light mb-1">Telefon:</p>
                    <a
                      href="tel:+4915209029117"
                      className="text-white hover:text-gold transition-colors duration-300 font-light"
                    >
                      +49 152 090 29 117
                    </a>
                  </div>
                </div>

                <div className="glass-gold rounded-xl p-6 flex items-center gap-4">
                  <Mail className="h-6 w-6 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-white/80 font-light mb-1">E-Mail:</p>
                    <a
                      href="mailto:d.golovchenko@gmx.de"
                      className="text-white hover:text-gold transition-colors duration-300 font-light"
                    >
                      d.golovchenko@gmx.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsibility */}
            <div
              className={`glass-dark rounded-2xl p-8 cinematic-shadow ${isVisible ? "animate-cinematic-slide-in" : ""}`}
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-3xl font-light text-white text-cinematic">Redaktionell verantwortlich</h2>
              </div>

              <div className="glass-gold rounded-xl p-6">
                <p className="text-white font-light">
                  Daria Golovchenko
                  <br />
                  Kaufhausstr. 24
                  <br />
                  72250 Freudenstadt
                </p>
              </div>
            </div>

            {/* EU Dispute Resolution */}
            <div
              className={`glass-dark rounded-2xl p-8 cinematic-shadow ${
                isVisible ? "animate-cinematic-slide-in-right" : ""
              }`}
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-3xl font-light text-white text-cinematic">EU-Streitschlichtung</h2>
              </div>

              <div className="space-y-4">
                <p className="text-white/80 font-light leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                </p>
                <div className="glass-gold rounded-xl p-4">
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light transition-colors duration-300 underline font-light"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </div>
                <p className="text-white/80 font-light">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>
            </div>

            {/* Legal Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className={`glass-dark rounded-2xl p-8 cinematic-shadow ${
                  isVisible ? "animate-cinematic-slide-up" : ""
                }`}
                style={{ animationDelay: "1.2s" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center">
                    <Scale className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="text-xl font-light text-white text-cinematic">Haftung für Inhalte</h3>
                </div>
                <p className="text-white/80 font-light leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                </p>
              </div>

              <div
                className={`glass-dark rounded-2xl p-8 cinematic-shadow ${
                  isVisible ? "animate-cinematic-slide-up" : ""
                }`}
                style={{ animationDelay: "1.4s" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="text-xl font-light text-white text-cinematic">Haftung für Links</h3>
                </div>
                <p className="text-white/80 font-light leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div
              className={`glass-dark rounded-2xl p-8 cinematic-shadow ${isVisible ? "animate-cinematic-fade-in" : ""}`}
              style={{ animationDelay: "1.6s" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <Scale className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-3xl font-light text-white text-cinematic">Urheberrecht</h2>
              </div>

              <p className="text-white/80 font-light leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>

            {/* Footer */}
            <div
              className={`text-center glass-dark rounded-xl p-6 ${isVisible ? "animate-cinematic-fade-in" : ""}`}
              style={{ animationDelay: "1.8s" }}
            >
              <p className="text-white/60 font-light">
                Quelle: eRecht24
                <br />
                Stand: {new Date().toLocaleDateString("de-DE")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
