"use client";

import { motion } from "framer-motion";

export function Casos() {
  const casos = [
    {
      num: "01",
      nombre: "ONE EVOLUTION",
      desc: "+340% en consultas en solo 90 días.",
      tag: "POSICIONAMIENTO ↑",
    },
    {
      num: "02",
      nombre: "INGESOFTWARE",
      desc: "Empezaron a recibir clientes que llegaban directamente pidiendo sus servicios en 30 días.",
      tag: "ESTRATEGIA ↑",
    }
  ];

  return (
    <section id="casos" className="bg-primary text-on-primary py-[clamp(90px,14vw,200px)] px-5 md:px-16">
      <div className="max-w-[1240px] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-label text-muted-text mb-[clamp(28px,4vw,44px)]"
        >
          [ CASOS DE ÉXITO ]
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(32px,5vw,68px)] leading-[1.02] tracking-[-0.03em] mb-[clamp(50px,8vw,110px)] flex flex-col md:flex-row md:gap-4"
        >
          <span className="flex flex-col">
            <span>RESULTADOS</span>
            <span>PREDECIBLES DE.</span>
          </span>
          <span className="text-accent flex flex-col">
            <span>UNA METODOLOGÍA</span>
            <span>QUE FUNCIONA.</span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[clamp(18px,2.4vw,30px)]">
          {casos.map((caso, i) => (
            <motion.div 
              key={caso.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="block group cursor-default"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-5">
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90 z-10" />
                <div className="absolute top-4 left-4 text-[9px] tracking-[0.28em] text-secondary z-20">{caso.num}</div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-baseline text-[9px] tracking-[0.22em] text-secondary z-20">
                  <span>RESULTADO</span>
                  <span>{caso.tag}</span>
                </div>
              </div>
              <div className="text-[9px] tracking-[0.26em] text-muted-text mb-2.5">{caso.nombre}</div>
              <div className="text-[14px] leading-[1.55] text-on-primary">{caso.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-[10px] tracking-[0.24em] text-muted-text">
          <strong className="text-accent">Aviso de Transparencia:</strong> Los resultados de nuestros clientes son únicos y dependen de muchos factores.
        </div>
      </div>
    </section>
  );
}
