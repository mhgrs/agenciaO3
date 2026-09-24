"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function CTA() {
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
    if (!datosFormulario.nombre.trim()) nuevosErrores.nombre = "Requerido";
    if (!datosFormulario.correo.trim() || !/^\S+@\S+\.\S+$/.test(datosFormulario.correo)) {
      nuevosErrores.correo = "Correo inválido";
    }
    if (!datosFormulario.telefono.trim()) nuevosErrores.telefono = "Requerido";
    if (!datosFormulario.facturacion) nuevosErrores.facturacion = "Requerido";
    
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (validarFormulario()) {
      console.log("Datos enviados:", datosFormulario);
      setEnviado(true);
    }
  };

  return (
    <section id="agendar" className="bg-secondary text-on-secondary py-[clamp(90px,15vw,210px)] px-5 md:px-16">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[clamp(40px,6vw,90px)] items-start">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(38px,7vw,96px)] font-extralight leading-[0.98] tracking-[-0.035em] flex flex-col"
        >
          <span>PROGRAMA</span>
          <span>DE TRANSFORMACIÓN.</span>
          <span className="text-accent mt-2 md:mt-0">O3 ELIT3.</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background p-8 border border-border"
        >
          {enviado ? (
            <div className="text-center py-12 text-primary">
              <h3 className="text-2xl font-serif mb-2">¡Solicitud Recibida!</h3>
              <p className="text-muted-foreground text-sm font-sans">Nos pondremos en contacto contigo a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={manejarEnvio} className="space-y-6 text-primary" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-[10px] tracking-[0.2em] mb-2 text-muted-foreground">NOMBRE</label>
                  <input
                    type="text"
                    id="nombre"
                    className={`w-full px-0 py-3 border-b bg-transparent rounded-none ${errores.nombre ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-accent text-sm font-sans`}
                    value={datosFormulario.nombre}
                    onChange={(e) => setDatosFormulario({...datosFormulario, nombre: e.target.value})}
                  />
                  {errores.nombre && <p className="text-red-500 text-[10px] mt-1 tracking-widest">{errores.nombre}</p>}
                </div>
                
                <div>
                  <label htmlFor="correo" className="block text-[10px] tracking-[0.2em] mb-2 text-muted-foreground">EMAIL</label>
                  <input
                    type="email"
                    id="correo"
                    className={`w-full px-0 py-3 border-b bg-transparent rounded-none ${errores.correo ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-accent text-sm font-sans`}
                    value={datosFormulario.correo}
                    onChange={(e) => setDatosFormulario({...datosFormulario, correo: e.target.value})}
                  />
                  {errores.correo && <p className="text-red-500 text-[10px] mt-1 tracking-widest">{errores.correo}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-[10px] tracking-[0.2em] mb-2 text-muted-foreground">TELÉFONO</label>
                  <input
                    type="tel"
                    id="telefono"
                    className={`w-full px-0 py-3 border-b bg-transparent rounded-none ${errores.telefono ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-accent text-sm font-sans`}
                    value={datosFormulario.telefono}
                    onChange={(e) => setDatosFormulario({...datosFormulario, telefono: e.target.value})}
                  />
                  {errores.telefono && <p className="text-red-500 text-[10px] mt-1 tracking-widest">{errores.telefono}</p>}
                </div>

                <div>
                  <label htmlFor="facturacion" className="block text-[10px] tracking-[0.2em] mb-2 text-muted-foreground">FACTURACIÓN MENSUAL</label>
                  <select
                    id="facturacion"
                    className={`w-full px-0 py-3 border-b bg-transparent rounded-none ${errores.facturacion ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-accent text-sm font-sans appearance-none`}
                    value={datosFormulario.facturacion}
                    onChange={(e) => setDatosFormulario({...datosFormulario, facturacion: e.target.value})}
                  >
                    <option value="" className="text-background">Seleccionar...</option>
                    <option value="menos_15k" className="text-background">Menos de $15.000 USD</option>
                    <option value="15k_50k" className="text-background">$15.000 - $50.000 USD</option>
                    <option value="50k_100k" className="text-background">$50.000 - $100.000 USD</option>
                    <option value="mas_100k" className="text-background">Más de $100.000 USD</option>
                  </select>
                  {errores.facturacion && <p className="text-red-500 text-[10px] mt-1 tracking-widest">{errores.facturacion}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 text-[11px] tracking-[0.3em] text-primary border-b border-primary pb-3 hover:text-accent hover:border-accent transition-colors flex justify-between"
              >
                <span>SOLICITAR AGENDA AHORA</span>
                <span>→</span>
              </button>
            </form>
          )}
        </motion.div>
        
      </div>
    </section>
  );
}
