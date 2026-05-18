import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productos Industriales | Química Aquaplus',
  description: 'Dentro de la línea Industrial, contamos con productos de la reconocida marca de SPIN.',
};

export default function IndustriaProductosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-[#F0F8FF] min-h-screen pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black text-[#0A1F3C] leading-tight mb-4">
              Industria
            </h1>
            <p className="text-lg text-[#5A7282] max-w-2xl mx-auto">
              Dentro de la línea Industrial, contamos con productos de la reconocida marca de SPIN, para atender las necesidades de los mercados Alimentarios, Agropecuarios y de Lavandería tales como:
            </p>
          </div>

          <div className="space-y-16">
            {/* Detergentes ácidos */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E2EDF7]">
              <h2 className="text-3xl font-black text-[#0A1F3C] mb-8 border-b pb-4">Detergentes ácidos</h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-2">AMIDET LC-70</h3>
                  <p className="text-[#5A7282] leading-relaxed">Detergente líquido ácido concentrado biodegradable, no corrosivo, limpia y desincrusta tuberías y equipo de acero inoxidable por sistemas CIP.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-2">AMIDET LC-34</h3>
                  <p className="text-[#5A7282] leading-relaxed mb-4">Detergente líquido ácido Preventivo biodegradable no corrosivo, limpia tuberías y equipo de acero inoxidable por sistemas CIP.</p>
                  <p className="font-semibold text-[#0A1F3C]">Para la industria láctea y derivados, panificadoras, embotelladoras, etc.</p>
                </div>
              </div>
            </section>

            {/* Detergentes alcalinos */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E2EDF7]">
              <h2 className="text-3xl font-black text-[#0A1F3C] mb-8 border-b pb-4">Detergentes alcalinos</h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-2">DEMILAK LC-48</h3>
                  <p className="text-[#5A7282] leading-relaxed">Detergente líquido concentrado alcalino, remueve grasa y suciedad.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-2">DEMILAK LC-38</h3>
                  <p className="text-[#5A7282] leading-relaxed">Detergente alcalino preventivo, remueve grasa y suciedad.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-2">DEMILAK SM</h3>
                  <p className="text-[#5A7282] leading-relaxed">Detergente alcalino en polvo para lavar manualmente.</p>
                </div>
              </div>
            </section>

            {/* Otros servicios */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E2EDF7]">
              <h3 className="text-2xl font-black text-[#0A1F3C] mb-4">Regeneración de botellas de resina mixta</h3>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
