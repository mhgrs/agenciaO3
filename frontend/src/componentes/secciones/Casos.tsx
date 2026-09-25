"use client";

import { motion } from "framer-motion";

export function Casos() {
  return (
    <section id="casos" className="bg-background text-primary py-[clamp(300px,15vw,350px)] px-5 md:px-16 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-[clamp(30px,5vw,50px)] font-extralight leading-[1.1] tracking-[-0.035em]">
            CASOS DE <span className="text-accent font-inter">ÉXITO.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-sm md:text-base font-sans mx-auto md:mx-0">
            Resultados reales. Empresas que ya transformaron su trayectoria comercial con nuestro sistema.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <a href="https://oneevolution.cl/" target="_blank" rel="noopener noreferrer">
          {/* CASO 1: ONE EVOLUTION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative border border-border p-8 md:p-12 hover:border-accent transition-colors duration-500 bg-white/5 flex flex-col"
          >
            <div className="absolute top-0 right-0 p-6 text-accent opacity-0 group-hover:opacity-100 hover:text-xl transition-opacity duration-500">
              ↗
            </div>
            <h3 className="text-2xl md:text-3xl font-inter mb-4 text-white">One Evolution</h3>
            <p className="text-muted-foreground text-sm font-sans mb-12 leading-relaxed">
              Redefinimos su posicionamiento, mensaje y presencia. Resultado: +340% en consultas en solo 90 días.
            </p>
            
          </motion.div>
          </a>
          <a href="https://ingesoftware.cl/" target="_blank" rel="noopener noreferrer">
          {/* CASO 2: INGESOFTWARE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative border border-border p-8 md:p-12 hover:border-accent transition-colors duration-500 bg-white/5 flex flex-col"
          >
            <div className="absolute top-0 right-0 p-6 text-accent opacity-0 group-hover:opacity-100 hover:text-xl transition-opacity duration-500">
              ↗
            </div>
            <h3 className="text-2xl md:text-3xl font-inter mb-4 text-white">Ingesoftware</h3>
            <p className="text-muted-foreground text-sm font-sans mb-12 leading-relaxed">
              En solo 30 días, empezaron a recibir clientes que llegaban directamente pidiendo sus servicios.
            </p>
          
          </motion.div>
          </a>
          
        </div>

        {/* DISCLAIMER Y CIERRE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 md:mt-32 text-center flex flex-col items-center"
        >
          <h2 className="text-[clamp(30px,5vw,50px)] font-inter font-extralight leading-[1.1] tracking-[-0.035em] text-white">
            CASUALIDAD: <span className="text-accent">IMPOSIBLE.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-sm md:text-base font-sans mx-auto">
            Resultado predecible de una metodología que funciona una y otra vez.
          </p>
          <p className="mt-16 text-[10px] leading-relaxed tracking-widest text-white/30 uppercase max-w-xl mx-auto">
            Los resultados de nuestros clientes son únicos y dependen de muchos factores. Solo los compartimos como referencia, no como garantía.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
