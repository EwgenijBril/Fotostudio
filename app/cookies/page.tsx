"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Cookie, Shield, Settings, Eye, Download, ExternalLink } from "lucide-react"

export default function CookiesPage() {
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
              Cookie
              <span className="block text-gold text-glow">Richtlinie</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              Transparente Informationen über die Verwendung von Cookies auf unserer Website
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Overview */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="container-cinematic">
          <div
            className={`text-center mb-16 ${isVisible ? "animate-cinematic-slide-up" : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">ÜBERBLICK</div>
            <h2 className="font-light tracking-wide text-white text-cinematic accent-line-gold inline-block">
              Was sind Cookies?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Cookie,
                title: "Definition",
                description: "Kleine Textdateien, die auf Ihrem Gerät gespeichert werden",
              },
              {
                icon: Shield,
                title: "Sicherheit",
                description: "Schutz vor Betrug und Cyber-Angriffen",
              },
              {
                icon: Settings,
                title: "Funktionalität",
                description: "Ermöglichen bestimmte Website-Funktionen",
              },
              {
                icon: Eye,
                title: "Analyse",
                description: "Verbesserung der Website-Performance",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`glass-dark rounded-2xl p-6 text-center hover-gold-lift ${
                  isVisible ? "animate-cinematic-slide-up" : ""
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-light mb-3 text-white text-cinematic">{item.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-dark-secondary relative overflow-hidden">
        <div className="container-cinematic">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* What is a Cookie */}
            <div
              className={`glass-dark rounded-2xl p-8 cinematic-shadow ${isVisible ? "animate-cinematic-slide-in" : ""}`}
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <Cookie className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-3xl font-light text-white text-cinematic">1. Was ist ein Cookie?</h2>
              </div>

              <div className="space-y-6">
                <p className="text-white/80 font-light leading-relaxed">
                  Ein Cookie ist eine kleine Datei aus Buchstaben und Zahlen, die auf den Computer heruntergeladen wird,
                  wenn Nutzer auf bestimmte Websites zugreifen. In der Regel ermöglichen es Cookies einer Website, den
                  Computer eines Nutzers zu erkennen.
                </p>
                <div className="glass-gold rounded-xl p-6">
                  <p className="text-white/90 font-light leading-relaxed">
                    Das Wichtigste, was man über die von Wix platzierten Cookies wissen muss, ist, dass sie unsere
                    Website etwas nutzerfreundlicher machen, z. B. durch die Speicherung von Website-Präferenzen und
                    Spracheinstellungen.
                  </p>
                </div>
              </div>
            </div>

            {/* Why we use cookies */}
            <div
              className={`glass-dark rounded-2xl p-8 cinematic-shadow ${
                isVisible ? "animate-cinematic-slide-in-right" : ""
              }`}
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <Settings className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-3xl font-light text-white text-cinematic">2. Warum verwenden wir Cookies?</h2>
              </div>

              <div className="space-y-6">
                <p className="text-white/80 font-light leading-relaxed">
                  Wir können Cookies und ähnliche Technologien für unterschiedliche Zwecke verwenden:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Sicherheitsgründe und Schutz vor Betrug",
                    "Bereitstellung ausgewählter Dienste",
                    "Performance-Überwachung und Analyse",
                    "Verbesserung des Nutzererlebnisses",
                  ].map((purpose, index) => (
                    <div key={index} className="glass-gold rounded-xl p-4 flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                      <span className="text-white/90 font-light">{purpose}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cookie Types Table */}
            <div
              className={`glass-dark rounded-2xl p-8 cinematic-shadow ${isVisible ? "animate-cinematic-slide-in" : ""}`}
              style={{ animationDelay: "1.4s" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-3xl font-light text-white text-cinematic">3. Cookie-Übersicht</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="glass-gold">
                      <th className="border border-gold/30 px-6 py-4 text-left font-light text-white">Cookie-Typ</th>
                      <th className="border border-gold/30 px-6 py-4 text-left font-light text-white">Zweck</th>
                      <th className="border border-gold/30 px-6 py-4 text-left font-light text-white">Dauer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Notwendige Cookies",
                        purpose: "Ermöglichen grundlegende Website-Funktionen und Sicherheit",
                        duration: "Session/Persistent",
                      },
                      {
                        type: "Funktionale Cookies",
                        purpose: "Speichern Präferenzen und Einstellungen",
                        duration: "Persistent",
                      },
                      {
                        type: "Analytische Cookies",
                        purpose: "Sammeln Informationen über die Website-Nutzung",
                        duration: "Persistent",
                      },
                      {
                        type: "Marketing Cookies",
                        purpose: "Ermöglichen personalisierte Werbung",
                        duration: "Persistent",
                      },
                    ].map((cookie, index) => (
                      <tr key={cookie.type} className={index % 2 === 0 ? "bg-dark-tertiary/30" : ""}>
                        <td className="border border-gold/20 px-6 py-4 text-white/90 font-light">{cookie.type}</td>
                        <td className="border border-gold/20 px-6 py-4 text-white/80 font-light">{cookie.purpose}</td>
                        <td className="border border-gold/20 px-6 py-4 text-white/80 font-light">{cookie.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="glass-gold rounded-xl p-6 mt-8">
                <h3 className="text-lg font-light mb-4 text-white text-cinematic">
                  Spezifische Cookies auf unserer Website:
                </h3>
                <ul className="space-y-3 text-white/90 font-light">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gold">Wix-Cookies:</strong> Für Website-Funktionalität und Sicherheit
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gold">Google Analytics:</strong> Für Website-Analyse und Verbesserung
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gold">Social Media Cookies:</strong> Für Facebook und Instagram
                      Integration
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Options and Settings */}
            <div
              className={`glass-dark rounded-2xl p-8 cinematic-shadow ${
                isVisible ? "animate-cinematic-slide-in-right" : ""
              }`}
              style={{ animationDelay: "1.6s" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <Settings className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-3xl font-light text-white text-cinematic">4. Ihre Optionen</h2>
              </div>

              <div className="space-y-8">
                <div className="glass-gold rounded-xl p-6">
                  <h3 className="text-lg font-light mb-4 text-white text-cinematic">Cookie-Einstellungen verwalten</h3>
                  <p className="text-white/90 font-light leading-relaxed mb-4">
                    Sie können Cookies in Ihrem Browser verwalten und blockieren. Besuchen Sie für mehr Informationen:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.aboutcookies.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-dark-tertiary rounded-lg text-gold hover:text-gold-light transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      aboutcookies.org
                    </a>
                    <a
                      href="https://www.allaboutcookies.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-dark-tertiary rounded-lg text-gold hover:text-gold-light transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      allaboutcookies.org
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "Firefox", url: "https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen" },
                    { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
                    { name: "Safari (macOS)", url: "https://support.apple.com/de-de/guide/safari/sfri11471/mac" },
                    { name: "Safari (iOS)", url: "https://support.apple.com/de-de/HT201265" },
                  ].map((browser) => (
                    <a
                      key={browser.name}
                      href={browser.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-gold rounded-xl p-4 flex items-center justify-between hover:bg-gold/20 transition-colors duration-300"
                    >
                      <span className="text-white font-light">{browser.name}</span>
                      <ExternalLink className="h-4 w-4 text-gold" />
                    </a>
                  ))}
                </div>

                <div className="glass-dark rounded-xl p-6 border border-gold/30">
                  <h3 className="text-lg font-light mb-4 text-gold text-cinematic">Google Analytics deaktivieren</h3>
                  <p className="text-white/80 font-light leading-relaxed mb-4">
                    Um Google Analytics auf allen Websites zu deaktivieren, können Sie das Browser-Plugin installieren:
                  </p>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 gradient-gold text-black hover:gradient-gold-dark transition-all duration-300 rounded-xl font-medium"
                  >
                    <Download className="h-5 w-5" />
                    Google Analytics Opt-out Plugin
                  </a>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div
              className={`glass-dark rounded-2xl p-8 cinematic-shadow text-center ${
                isVisible ? "animate-cinematic-fade-in" : ""
              }`}
              style={{ animationDelay: "1.8s" }}
            >
              <h3 className="text-2xl font-light mb-4 text-gold text-cinematic">Fragen zu Cookies?</h3>
              <p className="text-white/80 font-light leading-relaxed mb-6">
                Bei Fragen zu unserer Cookie-Richtlinie können Sie uns gerne kontaktieren.
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

            {/* Footer */}
            <div
              className={`text-center glass-dark rounded-xl p-6 ${isVisible ? "animate-cinematic-fade-in" : ""}`}
              style={{ animationDelay: "2s" }}
            >
              <p className="text-white/60 font-light">
                Stand: {new Date().toLocaleDateString("de-DE")}
                <br />
                Weitere Informationen finden Sie in unserer{" "}
                <Link href="/datenschutz" className="text-gold hover:text-gold-light transition-colors duration-300">
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
