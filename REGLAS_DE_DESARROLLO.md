# Reglas de Desarrollo - Proyecto Agencia O3

## 1. Arquitectura y Estructura
- **Modularidad:** Cada función, componente o módulo debe tener una única responsabilidad (Single Responsibility Principle).
- **Estructura de Carpetas (Frontend):**
  - `/src/app`: Páginas y rutas de Next.js (App Router).
  - `/src/componentes`: Componentes reutilizables de UI (ej. botones, tarjetas, modales).
  - `/src/componentes/layout`: Componentes de estructura (Header, Footer, Navbar).
  - `/src/componentes/secciones`: Componentes de secciones específicas (Hero, Testimonios, Formularios).
  - `/src/hooks`: Custom hooks de React.
  - `/src/utilidades`: Funciones puras de ayuda y formato.
  - `/src/tipos`: Definiciones de tipos e interfaces de TypeScript.
  - `/src/servicios`: Llamadas a APIs o integraciones externas.
  - `/src/esquemas`: Esquemas de validación (Zod o Yup) para formularios.

## 2. Tecnologías Core
- **Framework:** Next.js (App Router).
- **Estilos:** Tailwind CSS.
- **Animaciones:** Motion (Framer Motion).
- **Validación:** Validaciones estrictas en todos los inputs (Zod/React Hook Form recomendados).
- **Lenguaje:** TypeScript estricto.

## 3. Convenciones de Código
- **Idioma:** 
  - Textos orientados al usuario (UI): Español neutro.
  - Nombres de variables, funciones, componentes, carpetas y archivos: Español (ej. `BotonPrincipal`, `obtenerDatosDeUsuario`, `/componentes`).
- **Contexto de Nombres:** Las variables deben ser explícitas. Evitar abreviaturas (usar `correoElectronicoUsuario` en lugar de `correo` o `email`).
- **Comentarios:** Sólo para explicar el "por qué" de una lógica compleja. El código debe ser autodescriptivo.
- **Tipado:** Tipado estricto en TypeScript. Evitar a toda costa el uso de `any`.

## 4. UI/UX
- **Principios de Diseño:** Se aplicarán principios de alta calidad, garantizando accesibilidad, contraste adecuado, diseño responsivo (Mobile First) y animaciones fluidas que mejoren la experiencia del usuario sin sobrecargar el rendimiento.
- **Responsividad:** Todos los componentes deben verse bien en móviles, tablets y escritorios utilizando las clases utilitarias de Tailwind.

## 5. Control de Calidad
- **Análisis Previo:** Antes de implementar un cambio, se debe analizar, detallar y verificar la problemática.
- **Sin Errores en Consola:** El código de producción no debe arrojar warnings ni errores de TypeScript/ESLint.
