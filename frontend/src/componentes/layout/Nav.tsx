"use client";

import { motion } from "framer-motion";

export function Nav() {
  return (
    <nav className="relative z-50 flex items-center justify-between gap-6 px-5 py-7 md:px-16 flex-wrap">
      <div className="flex items-start gap-1 text-primary">
        <div className="w-[26px] h-[26px] border-[5.5px] border-primary rounded-full box-border" />
        <div className="text-[12px] font-medium leading-none">3</div>
      </div>
      
      <div className="flex items-center gap-5 md:gap-10 text-nav text-muted-foreground">
        <a href="#entrenamiento" className="hover:text-primary text-white transition-colors">METODOLOGÍA</a>
        <a href="#casos" className="hover:text-primary text-white transition-colors">CASOS</a>
        <a href="#ceo" className="hover:text-primary text-white transition-colors">EQUIPO</a>
      </div>
      
      <a href="#agendar" className="text-nav text-primary border-b border-muted-text pb-1 hover:border-primary transition-colors">
        AGENDAR LLAMADA →
      </a>
    </nav>
  );
}
