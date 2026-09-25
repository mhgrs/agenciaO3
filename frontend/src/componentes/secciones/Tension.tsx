"use client";

import { motion } from "framer-motion";

export function Tension() {
  return (
    <section id="entrenamiento" className="bg-secondary text-on-secondary py-[clamp(90px,16vw,220px)] px-5 md:px-16">
      <div className="max-w-[1240px] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px" }}
          className="text-label text-muted-text mb-[clamp(40px,7vw,90px)]"
        >
          [ ENTRENAMIENTO EXCLUSIVO ]
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-[clamp(40px,8vw,120px)] items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(30px,5vw,60px)] font-extralight leading-[1.02] tracking-[-0.03em] max-w-[14ch] mb-8"
            >
              ES PARA TI SI...
            </motion.h2>
            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-[clamp(18px,2vw,24px)] leading-[1.6] space-y-4"
            >
              <li className="flex gap-4 border-t border-muted-text/30 pt-4"><span className="text-accent mt-1">↑</span> Empresarios serios que buscan resultados reales y medibles.</li>
              <li className="flex gap-4 border-t border-muted-text/30 pt-4"><span className="text-accent mt-1">↑</span> Empresas B2C que ya facturan +US$15.000 mensuales.</li>
              <li className="flex gap-4 border-t border-muted-text/30 pt-4"><span className="text-accent mt-1">↑</span> E-commerce o tiendas con intención real de escalar.</li>
              <li className="flex gap-4 border-t border-muted-text/30 pt-4 border-b pb-4"><span className="text-accent mt-1">↑</span> Empresarios con mentalidad de inversión.</li>
            </motion.ul>
          </div>
          
          <div className="md:mt-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[clamp(30px,5vw,60px)] font-extralight leading-[1.02] tracking-[-0.03em] max-w-[14ch] text-muted-text mb-8 md:text-right md:ml-auto"
            >
              NO ES PARA TI SI...
            </motion.h2>
            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-serif text-[clamp(18px,2vw,24px)] leading-[1.6] space-y-4 text-muted-text md:text-right"
            >
              <li className="flex gap-4 md:flex-row-reverse border-t border-muted-text/30 pt-4"><span className="text-on-secondary/50 mt-1">×</span> Estás recién comenzando.</li>
              <li className="flex gap-4 md:flex-row-reverse border-t border-muted-text/30 pt-4"><span className="text-on-secondary/50 mt-1">×</span> No tienes validado tu producto.</li>
              <li className="flex gap-4 md:flex-row-reverse border-t border-muted-text/30 pt-4"><span className="text-on-secondary/50 mt-1">×</span> Esperas una solución mágica sin implementar.</li>
              <li className="flex gap-4 md:flex-row-reverse border-t border-muted-text/30 pt-4 border-b pb-4"><span className="text-on-secondary/50 mt-1">×</span> No estás dispuesto a salir de lo genérico.</li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
