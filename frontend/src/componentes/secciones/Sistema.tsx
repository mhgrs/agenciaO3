"use client";

import { motion } from "framer-motion";

export function Sistema() {
  const disciplinas = [
    { num: "01", nombre: "ESTRATEGIA DE MARCA", desc: "Posicionamiento y diferenciación en mercados competitivos." },
    { num: "02", nombre: "PERFORMANCE MARKETING", desc: "Optimización de campañas y métricas de crecimiento." },
    { num: "03", nombre: "BUSINESS INTELLIGENCE", desc: "Análisis de datos y toma de decisiones estratégicas." }
  ];

  return (
    <section id="equipo" className="bg-background py-[clamp(90px,14vw,210px)] px-5 md:px-16">
      <div className="max-w-[1240px] mx-auto">
        <motion.div 
          whileInView={{ opacity: [0, 1] }}
          viewport={{ once: true }}
          className="text-label text-accent mb-[clamp(28px,4vw,44px)]"
        >
          [ NUESTRO EQUIPO ELIT3 ]
        </motion.div>
        
        <motion.h2 
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(32px,5.6vw,76px)] font-extralight leading-[1.02] tracking-[-0.03em] mb-[clamp(56px,9vw,120px)] max-w-[20ch] text-primary flex flex-col"
        >
          <span>REUNIMOS</span>
          <span>A EXPERTOS EN</span>
          <span>COMUNICACIÓN</span>
          <span>Y CRECIMIENTO.</span>
        </motion.h2>

        <div className="flex flex-col">
          {disciplinas.map((d, i) => (
            <motion.div 
              key={d.num}
              whileInView={{ opacity: [0, 1], x: [-20, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.2fr)_minmax(0,1fr)] gap-[clamp(20px,3vw,48px)] items-baseline border-t border-border py-[clamp(26px,3.4vw,40px)] ${i === disciplinas.length - 1 ? 'border-b' : ''}`}
            >
              <div className="text-[clamp(34px,5vw,68px)] font-extralight text-muted-text tracking-[-0.03em] leading-none">{d.num}</div>
              <div className="text-[clamp(18px,2.2vw,27px)] font-normal tracking-[0.02em] text-primary">{d.nombre}</div>
              <div className="text-[clamp(14px,1.5vw,17px)] leading-[1.7] text-muted-foreground">{d.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-[clamp(56px,9vw,120px)] grid grid-cols-1 md:grid-cols-2 gap-[clamp(40px,6vw,90px)] items-end">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            viewport={{ once: true }}
          >
            <div className="text-[clamp(26px,3.4vw,44px)] font-extralight tracking-[-0.02em] leading-[1.1] text-primary">
              PUBLICISTAS VISIONARIOS.<br />PERIODISTAS ESTRATÉGICOS.
            </div>
            <div className="text-label text-accent mt-6">DIFERENTES TALENTOS, UN MISMO OBJETIVO.</div>
          </motion.div>
          
          <motion.div
             whileInView={{ opacity: [0, 1] }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
          >
            <p className="font-serif text-[clamp(19px,2.2vw,28px)] leading-[1.45] text-secondary m-0 mb-8 flex flex-col">
              <span>Liderados por Dante Torres, CEO.</span>
              <span>Llevamos tu negocio al siguiente nivel.</span>
            </p>
            <div className="border-t border-border pt-[22px]">
              <div className="text-[clamp(26px,3.2vw,40px)] font-extralight tracking-[-0.02em] text-primary leading-none">
                20 años
              </div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground mt-3">DE EXPERIENCIA AYUDANDO A EMPRESAS B2C</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
