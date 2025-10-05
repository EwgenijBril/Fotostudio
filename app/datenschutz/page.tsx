"use client"

import { useEffect, useState } from "react"
import { Shield, Lock, Eye, FileText, Globe, Users } from "lucide-react"

export default function DatenschutzPage() {
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
              Datenschutz
              <span className="block text-gold text-glow">erklärung</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              Transparenz und Vertrauen sind die Grundlage unserer Zusammenarbeit. Hier erfahren Sie alles über den
              Umgang mit Ihren Daten.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="container-cinematic">
          <div
            className={`text-center mb-16 ${isVisible ? "animate-cinematic-slide-up" : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">ÜBERBLICK</div>
            <h2 className="font-light tracking-wide text-white text-cinematic accent-line-gold inline-block">
              Datenschutz auf einen Blick
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: "Schutz Ihrer Daten",
                description: "Ihre personenbezogenen Daten werden sicher und vertraulich behandelt.",
              },
              {
                icon: Eye,
                title: "Transparente Verarbeitung",
                description: "Sie erfahren genau, welche Daten wir sammeln und wofür wir sie verwenden.",
              },
              {
                icon: Lock,
                title: "Ihre Rechte",
                description: "Sie haben jederzeit das Recht auf Auskunft, Berichtigung und Löschung.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`glass-dark rounded-2xl p-8 text-center hover-gold-lift ${
                  isVisible ? "animate-cinematic-slide-up" : ""
                }`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-light mb-4 text-white text-cinematic">{item.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-dark-secondary relative overflow-hidden">
        <div className="container-cinematic">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {/* Section 1 */}
              <div
                className={`glass-dark rounded-2xl p-8 cinematic-shadow ${
                  isVisible ? "animate-cinematic-slide-in" : ""
                }`}
                style={{ animationDelay: "1.2s" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-black" />
                  </div>
                  <h2 className="text-3xl font-light text-white text-cinematic">I. Datenschutz auf einen Blick</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-light mb-4 text-gold">Allgemeine Hinweise</h3>
                    <p className="text-white/80 font-light leading-relaxed mb-4">
                      Die folgenden Hinweise geben dir einen Überblick darüber, was mit deinen personenbezogenen Daten
                      passiert, wenn du meine Website besuchst oder mit mir in Kontakt trittst. Personenbezogene Daten
                      sind alle Daten, mit denen du persönlich identifiziert werden kannst.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-light mb-4 text-gold">Verantwortliche Stelle</h3>
                    <p className="text-white/80 font-light mb-4">
                      Als Websitebetreiber erfolgt die Datenverarbeitung auf dieser Website durch mich:
                    </p>
                    <div className="glass-gold rounded-xl p-6">
                      <p className="text-white font-light">
                        <strong className="text-gold">Daria Golovchenko</strong>
                        <br />
                        Kaufhausstraße 24
                        <br />
                        72250 Freudenstadt
                        <br />
                        Baden-Württemberg, Deutschland
                        <br />
                        <br />
                        Telefon: +49152 09029117
                        <br />
                        E-Mail: d.golovchenko@gmx.de
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div
                className={`glass-dark rounded-2xl p-8 cinematic-shadow ${
                  isVisible ? "animate-cinematic-slide-in-right" : ""
                }`}
                style={{ animationDelay: "1.4s" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-black" />
                  </div>
                  <h2 className="text-3xl font-light text-white text-cinematic">II. Hosting WIX</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-white/80 font-light leading-relaxed">
                    Meine Website wird durch Wix.com Ltd. gehostet, die ihren Sitz in 40 Namal Tel Aviv St., Tel Aviv
                    6350671, Israel haben. Wix ist ein Software-Tool, mit dem man Internetseiten erstellen und hosten
                    kann.
                  </p>
                  <p className="text-white/80 font-light leading-relaxed">
                    Wix zeichnet von meinen Website-Besuchern z.B. das Nutzerverhalten, die Besucherquellen, die Region
                    der Websitebesucher und die Besucherzahlen auf, und speichert Cookies auf deinem Browser.
                  </p>
                  <div className="glass-gold rounded-xl p-4">
                    <p className="text-white/90 font-light">
                      Details zu diesen Datenübertragungen findest du in der Datenschutzerklärung von WIX:{" "}
                      <a
                        href="https://de.wix.com/about/privacy"
                        className="text-gold hover:text-gold-light transition-colors duration-300 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://de.wix.com/about/privacy
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div
                className={`glass-dark rounded-2xl p-8 cinematic-shadow ${
                  isVisible ? "animate-cinematic-slide-in" : ""
                }`}
                style={{ animationDelay: "1.6s" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <h2 className="text-3xl font-light text-white text-cinematic">III. Ihre Rechte</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Auskunftsrecht",
                      description:
                        "Sie haben das Recht, jederzeit Auskunft über die Herkunft, Empfänger und den Zweck Ihrer gespeicherten Daten zu erhalten.",
                    },
                    {
                      title: "Berichtigungsrecht",
                      description:
                        "Sie haben das Recht, dass wir unrichtige personenbezogene Daten unverzüglich berichtigen.",
                    },
                    {
                      title: "Löschungsrecht",
                      description:
                        "Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern keine rechtlichen Gründe entgegenstehen.",
                    },
                    {
                      title: "Widerrufsrecht",
                      description:
                        "Sie können jederzeit die erteilte Einwilligung zur Datenverarbeitung für die Zukunft widerrufen.",
                    },
                  ].map((right, index) => (
                    <div key={right.title} className="glass-gold rounded-xl p-6">
                      <h4 className="text-lg font-light mb-3 text-white text-cinematic">{right.title}</h4>
                      <p className="text-white/80 font-light leading-relaxed">{right.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div
                className={`glass-dark rounded-2xl p-8 cinematic-shadow text-center ${
                  isVisible ? "animate-cinematic-fade-in" : ""
                }`}
                style={{ animationDelay: "1.8s" }}
              >
                <h3 className="text-2xl font-light mb-4 text-gold text-cinematic">Fragen zum Datenschutz?</h3>
                <p className="text-white/80 font-light leading-relaxed mb-6">
                  Bei Fragen zu dieser Datenschutzerklärung oder zum Umgang mit Ihren Daten können Sie mich jederzeit
                  kontaktieren.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:d.golovchenko@gmx.de"
                    className="px-8 py-3 gradient-gold text-black hover:gradient-gold-dark transition-all duration-300 rounded-xl font-medium"
                  >
                    E-Mail senden
                  </a>
                  <a
                    href="tel:+4915209029117"
                    className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-xl font-medium bg-transparent"
                  >
                    Anrufen
                  </a>
                </div>
              </div>

              {/* Footer Note */}
              <div
                className={`text-center glass-dark rounded-xl p-6 ${isVisible ? "animate-cinematic-fade-in" : ""}`}
                style={{ animationDelay: "2s" }}
              >
                <p className="text-white/60 font-light">
                  Quelle: https://www.e-recht24.de
                  <br />
                  Stand: {new Date().toLocaleDateString("de-DE")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
