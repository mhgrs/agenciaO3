import { Nav } from "@/componentes/layout/Nav";
import { Footer } from "@/componentes/layout/Footer";
import { Hero } from "@/componentes/secciones/Hero";
import { Tension } from "@/componentes/secciones/Tension";
import { Sistema } from "@/componentes/secciones/Sistema";
import { Casos } from "@/componentes/secciones/Casos";
import { Ready } from "@/componentes/secciones/Ready";
import { CTA } from "@/componentes/secciones/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Tension />
        <Sistema />
        <Casos />
        <Ready />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
