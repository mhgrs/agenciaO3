"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  const [showVideo, setShowVideo] = useState(false);

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
      setShowVideo(true);
    }
  };

  return (
    <section id="agendar" className="bg-secondary text-on-secondary py-[clamp(90px,15vw,120px)] px-5 md:px-16">

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-[clamp(40px,6vw,90px)] items-start">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(30px,7vw,70px)] min-w-0 font-extralight leading-[0.98] tracking-[-0.035em] flex flex-col break-words hyphens-auto"
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
            <div className="text-center py-16 flex flex-col items-center justify-center text-primary h-full">
              <h3 className="text-2xl font-inter mb-2">¡Solicitud Recibida!</h3>
              <p className="text-muted-foreground text-sm font-sans mb-10">Nos pondremos en contacto contigo a la brevedad.</p>
              
              <button
                onClick={() => setShowVideo(true)}
                className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-6 py-4 hover:bg-white/10 transition-colors rounded-sm"
              >
                <span className="text-[12px] tracking-widest text-white">VOLVER A VER EL VIDEO</span>
                <span className="text-accent group-hover:text-primary transition-colors"></span>
              </button>
            </div>
          ) : (
            <form onSubmit={manejarEnvio} className="space-y-8 text-primary mt-4" noValidate>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <label htmlFor="nombre" className="block text-[11px] tracking-widest mb-3 text-muted-foreground text-white uppercase">Nombre Completo</label>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Ej. Juan Pérez"
                    className={`w-full px-4 py-4 bg-white/5 border rounded-sm ${errores.nombre ? 'border-red-500' : 'border-zinc-800'} focus:outline-none focus:border-accent text-base font-sans placeholder:text-muted-foreground/50 transition-colors`}
                    value={datosFormulario.nombre}
                    onChange={(e) => setDatosFormulario({...datosFormulario, nombre: e.target.value})}
                    aria-invalid={!!errores.nombre}
                    aria-describedby={errores.nombre ? "error-nombre" : undefined}
                  />
                  {errores.nombre && <p id="error-nombre" role="alert" className="text-red-500 text-[11px] mt-2 tracking-wide absolute -bottom-5 left-0">{errores.nombre}</p>}
                </div>
                
                <div className="relative">
                  <label htmlFor="correo" className="block text-[11px] tracking-widest mb-3 text-muted-foreground text-white uppercase">Correo Profesional</label>
                  <input
                    type="email"
                    id="correo"
                    placeholder="ejemplo@empresa.com"
                    className={`w-full px-4 py-4 bg-white/5 border rounded-sm ${errores.correo ? 'border-red-500' : 'border-zinc-800'} focus:outline-none focus:border-accent text-base font-sans placeholder:text-muted-foreground/50 transition-colors`}
                    value={datosFormulario.correo}
                    onChange={(e) => setDatosFormulario({...datosFormulario, correo: e.target.value})}
                    aria-invalid={!!errores.correo}
                    aria-describedby={errores.correo ? "error-correo" : undefined}
                  />
                  {errores.correo && <p id="error-correo" role="alert" className="text-red-500 text-[11px] mt-2 tracking-wide absolute -bottom-5 left-0">{errores.correo}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <label htmlFor="telefono" className="block text-[11px] tracking-widest mb-3 text-muted-foreground text-white uppercase">Teléfono Móvil</label>
                  <input
                    type="tel"
                    id="telefono"
                    placeholder="+56 9 1234 5678"
                    className={`w-full px-4 py-4 bg-white/5 border rounded-sm ${errores.telefono ? 'border-red-500' : 'border-zinc-800'} focus:outline-none focus:border-accent text-base font-sans placeholder:text-muted-foreground/50 transition-colors`}
                    value={datosFormulario.telefono}
                    onChange={(e) => setDatosFormulario({...datosFormulario, telefono: e.target.value})}
                    aria-invalid={!!errores.telefono}
                    aria-describedby={errores.telefono ? "error-telefono" : undefined}
                  />
                  {errores.telefono && <p id="error-telefono" role="alert" className="text-red-500 text-[11px] mt-2 tracking-wide absolute -bottom-5 left-0">{errores.telefono}</p>}
                </div>

                <div className="relative">
                  <label htmlFor="facturacion" className="block text-[11px] tracking-widest mb-3 text-muted-foreground text-white uppercase">Facturación Mensual</label>
                  <select
                    id="facturacion"
                    className={`w-full px-4 py-4 bg-white/5 border rounded-sm ${errores.facturacion ? 'border-red-500' : 'border-zinc-800'} focus:outline-none focus:border-accent text-base font-sans transition-colors cursor-pointer appearance-none`}
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                    value={datosFormulario.facturacion}
                    onChange={(e) => setDatosFormulario({...datosFormulario, facturacion: e.target.value})}
                    aria-invalid={!!errores.facturacion}
                    aria-describedby={errores.facturacion ? "error-facturacion" : undefined}
                  >
                    <option value="" className="text-background" disabled>Selecciona un rango...</option>
                    <option value="menos_15k" className="text-background">Menos de $15.000 USD</option>
                    <option value="15k_50k" className="text-background">$15.000 - $50.000 USD</option>
                    <option value="50k_100k" className="text-background">$50.000 - $100.000 USD</option>
                    <option value="mas_100k" className="text-background">Más de $100.000 USD</option>
                  </select>
                  {errores.facturacion && <p id="error-facturacion" role="alert" className="text-red-500 text-[11px] mt-2 tracking-wide absolute -bottom-5 left-0">{errores.facturacion}</p>}
                </div>
              </div>

              <div className="pt-6 flex justify-center w-full">
                <button
                  type="submit"
                  className="group w-full max-w-[400px] min-w-[50px] text-[13px] md:text-[14px] tracking-[0.2em] font-medium bg-primary text-background border border-primary px-8 py-5 hover: border-zinc-700 hover:bg-transparent hover:text-primary transition-all duration-300 flex justify-center items-center gap-4 min-h-[56px] rounded-sm"
                >
                  <span>SOLICITA AGENDA AHORA</span>
                  <span className="text-black group-hover:text-primary transition-colors">→</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
        
      </div>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl bg-background border border-border rounded-lg overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors border border-white/10"
              >
                ✕
              </button>
              
              <div className="relative w-full aspect-video bg-black">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/ugj5myy2h0?autoplay=1" 
                  allow="autoplay; fullscreen" 
                  className="absolute inset-0 w-full h-full border-none"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
