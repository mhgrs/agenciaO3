export function Footer() {
  return (
    <footer className="bg-background py-[clamp(50px,7vw,84px)] px-5 md:px-16">
      <div className="max-w-[1240px] mx-auto flex flex-wrap gap-8 justify-between items-end">
        
        <div className="flex items-start gap-1 text-primary">
          <div className="w-[26px] h-[26px] border-[5.5px] border-primary rounded-full box-border" />
          <div className="text-[12px] font-medium leading-none">3</div>
        </div>
        
        <div className="text-[10px] tracking-[0.22em] text-muted-text leading-[2.2]">
          O3 SPA · AGENCIA DE COMUNICACIONES, MARKETING Y PUBLICIDAD<br />
          CUATRO Y MEDIA NORTE B N° 3525, TALCA, CHILE
        </div>
        
        <div className="text-[10px] tracking-[0.26em] text-muted-foreground leading-[2.2]">
          <a href="mailto:agencia@o3.cl" className="hover:text-primary transition-colors block">AGENCIA@O3.CL</a>
          <a href="https://www.o3.cl" className="hover:text-primary transition-colors block">O3.CL</a>
        </div>
        
        <div className="basis-full flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-4 mt-2 text-[10px] tracking-[0.26em] text-muted-foreground">
          <a href="https://instagram.com/o3agencia.cl" target="_blank" rel="noopener" className="py-3 hover:text-primary transition-colors">INSTAGRAM</a>
          <a href="https://www.facebook.com/O3Comunicaciones/" target="_blank" rel="noopener" className="py-3 hover:text-primary transition-colors">FACEBOOK</a>
          <a href="https://www.linkedin.com/company/o3-agencia" target="_blank" rel="noopener" className="py-3 hover:text-primary transition-colors">LINKEDIN</a>
          <a href="https://tiktok.com/@o3agencia.cl" target="_blank" rel="noopener" className="py-3 hover:text-primary transition-colors">TIKTOK</a>
          <a href="https://wa.me/56952285196" target="_blank" rel="noopener" className="py-3 hover:text-primary transition-colors">WHATSAPP</a>
        </div>
        
      </div>
    </footer>
  );
}
