'use client';

import { ArrowRight, ChevronDown, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/92 via-[#0A1F3C]/75 to-[#0284C7]/40" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#0EA5E9]/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#38BDF8]/8 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 mb-8">
            <Star className="w-3.5 h-3.5 text-[#38BDF8] fill-current" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7DD3FC]">
              Líderes en Química desde 2003
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Soluciones
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
              Químicas
            </span>
            <br />
            de Excelencia
          </h1>

          <p className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
            Distribuidores de productos químicos industriales y reactivos analíticos en Guaymas,
            Sonora desde 2003. Especialistas en diseño, construcción y mantenimiento de albercas.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#productos"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-[#0EA5E9]/30 hover:shadow-[#0EA5E9]/50 hover:-translate-y-0.5"
            >
              Ver Productos
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold tracking-wide rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              Quiénes Somos
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-14">
            {[
              { value: '20+', label: 'Años de experiencia' },
              { value: '500+', label: 'Productos disponibles' },
              { value: '1000+', label: 'Clientes satisfechos' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#productos" className="flex flex-col items-center gap-1 group">
          <span className="text-xs text-white/40 tracking-widest uppercase">Explorar</span>
          <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-[#38BDF8] transition-colors animate-bounce" />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F8FF] to-transparent" />
    </section>
  );
}
