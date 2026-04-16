import { MapPin, Phone, Mail } from 'lucide-react';

const links = {
  Productos: [
    'Químicos para Alberca',
    'Grado Industrial',
    'Grado Analítico',
    'Equipo de Laboratorio',
    'Tratamiento de Agua',
    'Material Refractario',
  ],
  Servicios: [
    'Construcción de Albercas',
    'Maquiladora',
    'Asesoría Técnica',
    'Entrega a Domicilio',
    'Mantenimiento',
  ],
  Empresa: ['Quiénes Somos', 'Galería', 'Ubicaciones', 'Industria', 'Contacto'],
};

export default function Footer() {
  return (
    <footer className="bg-[#071428] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img src="/logo.PNG" alt="Química Aquaplus" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Desde 2003, proveyendo soluciones químicas de calidad para industria, laboratorios y
              albercas en toda la región.
            </p>

            {/* Guaymas */}
            <div className="mb-5">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#38BDF8] mb-2">Guaymas</p>
              <div className="space-y-2">
                <div className="flex items-start gap-3 text-sm text-white/50">
                  <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Calle 9 y 10 #3 entre Blvd. Benito Juárez y Av. 4<br />Col. San Vicente, Guaymas, Son. C.P. 85465</span>
                </div>
                <a href="tel:016222241457" className="flex items-center gap-3 text-sm text-white/50 hover:text-white/80 transition-colors">
                  <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  01 (622) 224 14 57
                </a>
                <a href="mailto:ventas@quimicaaquaplus.com" className="flex items-center gap-3 text-sm text-white/50 hover:text-white/80 transition-colors">
                  <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  ventas@quimicaaquaplus.com
                </a>
              </div>
            </div>

            {/* San Carlos */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#38BDF8] mb-2">San Carlos</p>
              <div className="space-y-2">
                <div className="flex items-start gap-3 text-sm text-white/50">
                  <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Blvd. Tetakawi #73-1, Sector Creston<br />San Carlos, Sonora</span>
                </div>
                <a href="tel:6221377210" className="flex items-center gap-3 text-sm text-white/50 hover:text-white/80 transition-colors">
                  <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  622 137 7210
                </a>
              </div>
            </div>
          </div>


          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#38BDF8] mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/45 hover:text-white/80 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Quimica Aquaplus. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/20">
            Soluciones químicas de calidad desde 2003
          </p>
        </div>
      </div>
    </footer>
  );
}
