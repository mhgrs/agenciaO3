"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 flex items-center justify-between px-5 py-7 md:px-16">
      <div className="flex items-start gap-1 text-primary">
        <div className="w-[26px] h-[26px] border-[5.5px] border-primary rounded-full box-border" />
        <div className="text-[12px] font-medium leading-none">3</div>
      </div>
      
      {/* Enlaces de Escritorio */}
      <div className="hidden md:flex items-center gap-6 text-nav text-muted-foreground">
        <a href="#entrenamiento" className="p-3 hover:text-primary text-white transition-colors">METODOLOGÍA</a>
        <a href="#casos" className="p-3 hover:text-primary text-white transition-colors">CASOS</a>
        <a href="#ceo" className="p-3 hover:text-primary text-white transition-colors">EQUIPO</a>
      </div>
      
      <a href="#agendar" className="hidden md:flex p-3 text-nav text-primary border-b border-muted-text pb-1 hover:border-primary transition-colors min-h-[44px] items-center">
        AGENDAR LLAMADA →
      </a>

      {/* Botón Hamburguesa Móvil */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-3 text-primary text-nav flex items-center min-h-[44px]"
      >
        {isOpen ? "CERRAR ✕" : "MENÚ ☰"}
      </button>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border flex flex-col items-center py-8 gap-8 md:hidden shadow-2xl"
          >
            <a onClick={() => setIsOpen(false)} href="#entrenamiento" className="text-nav text-white hover:text-primary transition-colors">METODOLOGÍA</a>
            <a onClick={() => setIsOpen(false)} href="#casos" className="text-nav text-white hover:text-primary transition-colors">CASOS</a>
            <a onClick={() => setIsOpen(false)} href="#ceo" className="text-nav text-white hover:text-primary transition-colors">EQUIPO</a>
            <a onClick={() => setIsOpen(false)} href="#agendar" className="text-nav text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-background transition-colors mt-4">
              AGENDAR LLAMADA
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
