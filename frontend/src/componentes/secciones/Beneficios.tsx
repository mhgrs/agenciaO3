"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export function Beneficios() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">¿Es el Entrenamiento O3 Elit3 para ti?</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Hemos reunido un equipo élite de expertos en comunicación, estrategia y performance para llevar tu negocio al siguiente nivel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-card border border-border p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-accent" size={28} />
              <h3 className="text-2xl font-bold font-display text-primary">Es para ti si...</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Empresarios serios que buscan resultados reales y medibles.",
                "Empresas B2C que ya facturan +US$15.000 mensuales.",
                "E-commerce o tiendas físicas con intención real de escalar.",
                "Marcas listas para convertirse en líderes de su industria.",
                "Empresarios con mentalidad de inversión y enfoque estratégico."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="min-w-1.5 h-1.5 mt-2 rounded-full bg-accent" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-muted p-8 rounded-xl border border-transparent"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-destructive" size={28} />
              <h3 className="text-2xl font-bold font-display text-primary">NO es para ti si...</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Estás recién comenzando y no tienes producto validado.",
                "Esperas una solución mágica sin implementar nada.",
                "No tienes claridad sobre tu oferta ni validación comercial.",
                "No estás dispuesto a salir de lo genérico en tu mercado."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="min-w-1.5 h-1.5 mt-2 rounded-full bg-destructive" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
