'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes Somos', href: '/quienes-somos' },
  { label: 'Productos', href: '#productos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Construcción', href: '/construccion' },
  { label: 'Industria', href: '/industria' },
  { label: 'Maquiladora', href: '/maquiladora' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Ubicaciones', href: '/ubicaciones' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1F3C] shadow-2xl'
          : 'bg-gradient-to-b from-[#0A1F3C]/90 to-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24">
          <a href="#inicio" className="flex items-center group">
            <img
              src="/logo.PNG"
              alt="Química Aquaplus"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-2 py-2 text-[10px] font-bold tracking-wider uppercase text-white/80 hover:text-white transition-colors duration-200 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-2 right-2 h-px bg-[#38BDF8] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          <a
            href="/#contacto"
            className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-[10px] font-bold tracking-wider uppercase transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            Contactar
          </a>

          <button
            className="xl:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-[#0A1F3C] border-t border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-semibold tracking-wider uppercase text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0EA5E9] text-white text-sm font-bold tracking-wider uppercase"
            >
              <Phone className="w-4 h-4" />
              Contactar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
