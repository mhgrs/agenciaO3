"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const handlePart1Ended = () => {
    if (video2Ref.current) {
      video2Ref.current.currentTime = 0;
      video2Ref.current.play();
    }
  };

  const handlePart2Ended = () => {
    if (video1Ref.current) {
      video1Ref.current.currentTime = 0;
      video1Ref.current.play();
    }
  };

  return (
    <section className="relative min-h-[85vh] pt-[150px] pb-12 px-5 md:px-16 flex flex-col justify-center overflow-hidden">
      
      {/* Fondo de video Wistia dividido en 2 partes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
        
        {/* PARTE 2 */}
        <video
          ref={video2Ref}
          muted
          playsInline
          onEnded={handlePart2Ended}
          onPlaying={() => setActiveVideo(2)}
          className={`absolute inset-0 w-full h-full object-cover object-[75%_center] ${activeVideo === 2 ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
        >
          <source src="/hero-bg-2.mp4" type="video/mp4" />
        </video>

        {/* PARTE 1: Intro */}
        <video
          ref={video1Ref}
          autoPlay
          muted
          playsInline
          onEnded={handlePart1Ended}
          onPlaying={() => setActiveVideo(1)}
          className={`absolute inset-0 w-full h-full object-cover object-center ${activeVideo === 1 ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
        >
          <source src="/hero-bg-1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradientes oscuros para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/600 to-background/70 z-10" />
      
      <div className="relative w-full max-w-[1240px] mt-50 md:ms-10 lg:ms-20 z-20">
        <motion.div 
          initial={{ opacity: 0 }}
         
          animate={{ opacity: [0, 1], y: [10, 0] }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-label text-accent mb-6 md:mb-8"
        >
          MÉTODO O3 ELIT3
        </motion.div>
        
        <motion.h1  
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[clamp(40px,7vw,120px)] font-sans font-extralight leading-[1.05] tracking-[-0.02em] text-primary mb-8 md:mb-12 max-w-[18ch]"
        >
          ¿ESTÁS REGALANDO CLIENTES A TU COMPETENCIA?
        </motion.h1>
        
        <div className="flex flex-col items-start gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1], y: [10, 0] }}
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
