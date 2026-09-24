"use client";

import { motion } from "framer-motion";

const casos = [
  {
    empresa: "One Evolution",
    resultado: "+340% en consultas en solo 90 días.",
    descripcion: "Redefinimos su posicionamiento, mensaje y presencia."
  },
  {
    empresa: "Ingesoftware",
    resultado: "Clientes en 30 días",
    descripcion: "Empezaron a recibir clientes que llegaban directamente pidiendo sus servicios."
  }
];

export function PruebaSocial() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Casos de Éxito</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resultado predecible de una metodología que funciona una y otra vez.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {casos.map((caso, index) => (
            <motion.div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold font-display text-primary mb-2">{caso.empresa}</h3>
              <p className="text-accent font-semibold text-lg mb-4">{caso.resultado}</p>
              <p className="text-card-foreground/80">{caso.descripcion}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-card border-l-4 border-secondary text-sm text-muted-foreground rounded-r-lg">
          <strong>Aviso de Transparencia:</strong> Nuestros resultados no son típicos. Tenemos más de 20 años de experiencia. Solo compartimos estos casos para ayudar a comprender el marco de trabajo, nunca como promesas garantizadas.
        </div>
      </div>
    </section>
  );
}
