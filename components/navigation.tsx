"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronDown, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const portfolioItems = [
    { name: "Porträt", href: "/portfolio/portraet" },
    { name: "Content Shooting", href: "/portfolio/content-shooting" },
    { name: "Kreative Shooting", href: "/portfolio/kreative-shooting" },
    { name: "Kinder und Familie", href: "/portfolio/kinder-und-familie" },
    { name: "Reportage", href: "/portfolio/reportage" },
    { name: "Food Foto", href: "/portfolio/food-foto" },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-700 glass-dark cinematic-shadow"
    >
      <div className="container-cinematic">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="group relative">
            <div className="flex items-center">
               <img
                     src="android-chrome-512x512.png"
                     alt="partnerin_daria"
                     className="h-20 w-20 ml-3 object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                     loading="lazy"
                   />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {[
              { name: "Home", href: "/" },
              { name: "Über mich", href: "/about-mich" },
              { name: "Leistungen", href: "/leistungen" },
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-gold transition-all duration-300 group font-light text-lg tracking-wide"
              >
                {item.name}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
                <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-5 rounded-lg blur-xl transition-opacity duration-300" />
              </Link>
            ))}

            {/* Portfolio Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-gold transition-all duration-300 font-light text-lg tracking-wide">
                Portfolio
                <ChevronDown className="ml-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
              </button>
              <div className="absolute top-full left-0 mt-10 w-80 cinematic-shadow rounded-xl bg-[#1a1a1a] invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform group-hover:translateY-0 translateY-4">
                <div className="p-6 space-y-2">
                  {portfolioItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-4 text-white hover:text-gold hover:bg-gold/10 rounded-lg transition-all duration-300 font-light tracking-wide"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {[
              { name: "Veröffentlichungen", href: "/veroeffentlichungen" },
              { name: "Kontakt", href: "/kontakt" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-gold transition-all duration-300 group font-light text-lg tracking-wide"
              >
                {item.name}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
                <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-5 rounded-lg blur-xl transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
          variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6 flex items-center">
              <span
                className={`absolute block w-6 h-0.5 bg-gold transform transition-all duration-500 ${
                  isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-gold transform transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-gold transform transition-all duration-500 ${
                  isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-700 overflow-hidden px-4 ${
            isOpen ? "min-h-screen opacity-100 pb-8" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl m-4 p-8 space-y-4 cinematic-shadow">
            {[
              { name: "Home", href: "/" },
              { name: "Über mich", href: "/about-mich" },
              { name: "Leistungen", href: "/leistungen" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-6 py-4 text-white hover:text-gold rounded-xl hover:glass-gold transition-all duration-300 font-light text-lg tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="space-y-2">
              <button
                onClick={() => setPortfolioOpen(!portfolioOpen)}
                className="flex items-center justify-between w-full px-6 py-4 text-white hover:text-gold rounded-xl hover:glass-gold transition-all duration-300 font-light text-lg tracking-wide"
              >
                Portfolio
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-500 ${portfolioOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  portfolioOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-6 space-y-2">
                  {portfolioItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-3 text-white/80 hover:text-gold rounded-lg hover:glass-gold transition-all duration-300 font-light tracking-wide"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {[
              { name: "Veröffentlichungen", href: "/veroeffentlichungen" },
              { name: "Kontakt", href: "/kontakt" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-6 py-4 text-white hover:text-gold rounded-xl hover:glass-gold transition-all duration-300 font-light text-lg tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
