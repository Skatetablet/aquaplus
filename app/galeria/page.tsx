import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import GallerySection from '@/components/gallery-section';

export const metadata: Metadata = {
  title: 'Galería | Química Aquaplus',
  description:
    'Conoce de cerca el trabajo de Química Aquaplus. Videos y fotos de nuestros proyectos de construcción, mantenimiento y servicios en Guaymas y San Carlos, Sonora.',
};

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
