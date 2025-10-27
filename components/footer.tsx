"use client"

import Link from "next/link"
import {Phone, Facebook, Instagram } from "lucide-react"
import { useEffect, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer className="bg-dark-secondary border-t border-t-gray-600 border-gold/20 relative overflow-hidden">
      <div className="container-cinematic py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-10">
          <div className={`col-span-1 md:col-span-2 ${isVisible ? "animate-cinematic-slide-in" : ""}`}>
            <div className="flex items-center space-x-4 mb-6">
              <img
                     src="android-chrome-512x512.png"
                     alt="partnerin_daria"
                     className="h-20 w-20 object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                     loading="lazy"
                   />
            </div>
            <p className="text-white/80 max-w-md font-light leading-relaxed mb-8">
              Leidenschaftliche Fotografin mit dem Ziel, einzigartige Momente festzuhalten und Ihre Geschichte visuell
              zum Leben zu erwecken.
            </p>
            <div className="flex space-x-6">
              <a
                href="mailto:d.golovchenko@gmx.de"
                className="w-12 h-12 glass-dark rounded-xl flex items-center justify-center hover:glass-gold transition-all duration-300 group"
              >
                <Facebook className="h-5 w-5 text-gold group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="tel:+4915209029117"
                className="w-12 h-12 glass-dark rounded-xl flex items-center justify-center hover:glass-gold transition-all duration-300 group"
              >
                <Phone className="h-5 w-5 text-gold group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://wa.me/4915209029117"
                className="w-12 h-12 glass-dark rounded-xl flex items-center justify-center hover:glass-gold transition-all duration-300 group"
              >
                <Instagram className="h-5 w-5 text-gold group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className={`${isVisible ? "animate-cinematic-slide-in" : ""}`} style={{ animationDelay: "0.2s" }}>
            <h4 className="font-light mb-6 text-white text-cinematic text-lg">Navigation</h4>
            <ul className="space-y-4 text-white/70 font-light">
              {[
                { name: "Über mich", href: "/about-mich" },
                { name: "Leistungen", href: "/leistungen" },
                { name: "Portfolio", href: "/portfolio/portraet" },
                { name: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-gold transition-colors duration-300 relative group">
                    {item.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${isVisible ? "animate-cinematic-slide-in" : ""}`} style={{ animationDelay: "0.4s" }}>
            <h4 className="font-light mb-6 text-white text-cinematic text-lg">Rechtliches</h4>
            <ul className="space-y-4 text-white/70 font-light">
              {[
                { name: "Datenschutz", href: "/datenschutz" },
                { name: "Impressum", href: "/impressum" },
                { name: "Cookies", href: "/cookies" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-gold transition-colors duration-300 relative group">
                    {item.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`border-t border-t-gray-600 border-gold/20 mt-10 py-8 text-center ${isVisible ? "animate-cinematic-fade-in" : ""}`}
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-white/60 font-light">
            &copy; {new Date().getFullYear()} Daria - Fotografin. Alle Rechte vorbehalten. Erstellt mit Rebootly
          </p>
        </div>
      </div>
    </footer>
  )
}
