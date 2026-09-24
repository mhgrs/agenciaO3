import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite abrir el dev server desde otros dispositivos de la red local
  // (sin esto Next bloquea HMR y la página no se hidrata fuera de localhost).
  allowedDevOrigins: ["192.168.4.105"],
};

export default nextConfig;
