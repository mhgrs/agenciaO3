"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function FormularioAgendar() {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    correo: "",
    facturacion: "",
    telefono: ""
  });
  
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  const validarFormulario = () => {
    const nuevosErrores: Record<string, string> = {};
    if (!datosFormulario.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!datosFormulario.correo.trim() || !/^\S+@\S+\.\S+$/.test(datosFormulario.correo)) {
      nuevosErrores.correo = "Ingresa un correo electrónico válido.";
    }
    if (!datosFormulario.telefono.trim()) nuevosErrores.telefono = "El teléfono es obligatorio.";
    if (!datosFormulario.facturacion) nuevosErrores.facturacion = "Selecciona un rango de facturación.";
    
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (validarFormulario()) {
      // Simular envío
      console.log("Datos enviados:", datosFormulario);
      setEnviado(true);
    }
  };

  return (
    <section className="py-20 bg-primary text-on-primary">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Agenda tu Sesión Estratégica</h2>
          <p className="text-on-primary/80">
            Dante Torres y nuestro equipo élite analizarán tu negocio para descubrir dónde estás perdiendo clientes.
          </p>
        </div>

        <motion.div 
          className="bg-card text-card-foreground p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {enviado ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-accent mb-2">¡Solicitud Recibida!</h3>
              <p className="text-foreground/80">Nos pondremos en contacto contigo a la brevedad para agendar la llamada.</p>
            </div>
          ) : (
            <form onSubmit={manejarEnvio} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    id="nombre"
                    className={`w-full px-4 py-3 rounded-md border bg-background ${errores.nombre ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-accent`}
                    value={datosFormulario.nombre}
                    onChange={(e) => setDatosFormulario({...datosFormulario, nombre: e.target.value})}
                  />
                  {errores.nombre && <p className="text-destructive text-sm mt-1">{errores.nombre}</p>}
                </div>
                
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    id="correo"
                    className={`w-full px-4 py-3 rounded-md border bg-background ${errores.correo ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-accent`}
                    value={datosFormulario.correo}
                    onChange={(e) => setDatosFormulario({...datosFormulario, correo: e.target.value})}
                  />
                  {errores.correo && <p className="text-destructive text-sm mt-1">{errores.correo}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium mb-2">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    id="telefono"
                    className={`w-full px-4 py-3 rounded-md border bg-background ${errores.telefono ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-accent`}
                    value={datosFormulario.telefono}
                    onChange={(e) => setDatosFormulario({...datosFormulario, telefono: e.target.value})}
                  />
                  {errores.telefono && <p className="text-destructive text-sm mt-1">{errores.telefono}</p>}
                </div>

                <div>
                  <label htmlFor="facturacion" className="block text-sm font-medium mb-2">Facturación Mensual Actual</label>
                  <select
                    id="facturacion"
                    className={`w-full px-4 py-3 rounded-md border bg-background ${errores.facturacion ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-accent`}
                    value={datosFormulario.facturacion}
                    onChange={(e) => setDatosFormulario({...datosFormulario, facturacion: e.target.value})}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="menos_15k">Menos de $15.000 USD</option>
                    <option value="15k_50k">$15.000 - $50.000 USD</option>
                    <option value="50k_100k">$50.000 - $100.000 USD</option>
                    <option value="mas_100k">Más de $100.000 USD</option>
                  </select>
                  {errores.facturacion && <p className="text-destructive text-sm mt-1">{errores.facturacion}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-on-accent font-bold text-lg py-4 rounded-md hover:bg-accent/90 transition-colors focus:ring-4 focus:ring-accent/50 outline-none mt-4"
              >
                Solicitar Agenda Ahora
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
