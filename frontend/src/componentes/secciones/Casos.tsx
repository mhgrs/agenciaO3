"use client";

import { motion } from "framer-motion";

export function Casos() {
  return (
    <section className="bg-primary text-on-primary py-[clamp(90px,18vw,280px)] px-5 md:px-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h2 className="text-[clamp(60px,12vw,220px)] font-extralight leading-[0.85] tracking-[-0.04em] text-on-primary mb-6">
            ¿LISTO PARA<br/>COMENZAR?
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <a 
              href="#agendar" 
              className="golden-shine inline-flex items-center gap-4 text-[12px] md:text-[14px] tracking-[0.3em] text-on-primary border border-on-primary px-8 py-5 hover:bg-on-primary hover:text-primary transition-colors min-h-[44px]"
            >
              <span>VAMOS AL SIGUIENTE NIVEL</span>
              <span className="text-black">↓</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
