"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] -mt-[94px] pt-[150px] pb-12 px-5 md:px-16 flex flex-col justify-center overflow-hidden">
      
      {/* Fondo de video Wistia (Loop Segundos 30 al 34) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradientes oscuros para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/600 to-background/70 z-10" />
      
      <div className="relative w-full max-w-[1240px] mt-50 ms-10  z-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-label text-accent mb-6 md:mb-8"
        >
          MÉTODO O3 ELIT3
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[clamp(40px,7vw,120px)] font-sans font-extralight leading-[1.05] tracking-[-0.02em] text-primary mb-8 md:mb-12 max-w-[18ch]"
        >
          ¿ESTÁS REGALANDO CLIENTES A TU COMPETENCIA?
        </motion.h1>
        
        <div className="flex flex-col items-start gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-serif text-[clamp(19px,2.4vw,30px)] leading-[1.4] text-secondary m-0 flex flex-col max-w-[30ch]"
          >
            <span>Te voy a revelar algo que no sabes.</span>
            <span className="text-muted-foreground mt-4 text-[clamp(16px,1.5vw,20px)] font-sans font-light">
              Descubre cómo ayudamos a dueños de e-commerce y retailers a duplicar sus ventas sin depender de descuentos.
            </span>
          </motion.div>
          
          <motion.a 
            href="#agendar" 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-[10px] tracking-[0.3em] text-primary border-b border-accent pb-2 whitespace-nowrap mt-4"
          >
            AGENDAR UNA LLAMADA ↓
          </motion.a>
        </div>
      </div>
    </section>
  );
}
