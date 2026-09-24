# Estado y Contexto del Proyecto: Agencia O³

## 📌 Resumen General
**Proyecto:** Landing page de alta conversión para la Agencia O³ (Brand OS™).
**Stack Tecnológico:** Next.js (App Router), Tailwind CSS v4, Framer Motion.
**Estética Visual:** Diseño Brutalista/Elegante, contrastes marcados (Fondo negro `#050505` con textos blancos `#FAF9F6`), uso de acentos dorados (`#B8A88A`).

## 🎨 Tipografías y Diseño (Design System)
- **Fuentes:** 
  - **Manrope (Sans):** Usada para títulos (`font-extralight`), textos de alto impacto y UI general.
  - **Instrument Serif (Serif):** Usada para textos acentuados, párrafos elegantes y detalles editoriales.
- **Responsive:** Se utiliza agresivamente la función `clamp()` en CSS para tipografías y espaciados fluidos (sin breakpoints estáticos rígidos).
- **Accesibilidad y UX:** Se mantienen áreas táctiles mínimas de `44px` en enlaces/botones y soporte para atributos ARIA en formularios.

## 🛠️ Últimos Trabajos Realizados

### 1. Refactorización de la Sección "Casos" a "CTA"
- Se rediseñó por completo el archivo `Casos.tsx`. Pasó de ser una cuadrícula de clientes a un Call to Action masivo de pantalla completa con el texto **"¿LISTO PARA COMENZAR?"**.
- Se programó una animación en CSS puro (`.golden-shine`) en `globals.css` que atraviesa el botón de acción con un haz de luz dorado cada 3 segundos, imitando el estilo visual de la referencia (SFX).

### 2. Texto invisible al probar en red local (RESUELTO en dev)
**Síntoma:** al abrir el dev server desde otro dispositivo por IP de LAN (`http://192.168.4.105:3000`), los textos animados con `framer-motion` no se veían. En el PC (`localhost`) sí.

**Causa raíz (verificada con Chrome headless por CDP, localhost vs IP de LAN):**
- Next.js 16 bloquea en desarrollo los recursos dev (`/_next/hmr`, `/_next/webpack-hmr`) de cualquier origen distinto de `localhost`. El log lo indica: `Blocked cross-origin request to Next.js dev resource ... from "192.168.4.105"`.
- Sin esa conexión la página **no se hidrata** (`hydrated:false`, sin `[HMR] connected`).
- Los componentes usan `initial={{ opacity: 0 }}`, así que el HTML del servidor sale con `style="opacity:0"` y, sin hidratación, nunca arranca la animación. El Nav (sin framer-motion) sí se veía; Hero, Tension, Sistema, Casos y CTA no.

**Corrección aplicada:** en `frontend/next.config.ts` se añadió `allowedDevOrigins: ["192.168.4.105"]`. Requiere reiniciar `npm run dev`. Probado en una copia aislada: hidrata y el `h1` llega a `opacity: 1`. Si la IP del equipo cambia, hay que actualizar el valor (el log de Next muestra la IP exacta bloqueada).

**Hipótesis descartadas** (diagnósticos anteriores que no eran la causa): FOIT / bloqueo de Google Fonts (`display=swap` siempre muestra fallback), el auto-traductor de Chrome, y el margen del `IntersectionObserver`. Los cambios de fuentes locales con `@fontsource` ya fueron revertidos.

**Sin confirmar:** por qué Brave sí funcionaba en el móvil (no se pudo probar en el dispositivo; falta saber qué URL se abrió en cada navegador).

**Producción:** el bloqueo por `allowedDevOrigins` no existe en `next build` + `next start` (probado por IP de LAN: hidrata sin configuración).

**Fragilidad pendiente (no corregida):** el HTML servido sigue trayendo `opacity:0` en ~20 elementos. Hasta que el JS hidrata, esos textos están invisibles; con red/móvil lento se ve pantalla vacía, y si el JS falla queda invisible. Propuesta: animaciones de entrada con CSS (`@keyframes`, `animation-fill-mode: both`) o ocultar solo tras montar en cliente. Requiere autorización explícita (afecta a todas las secciones).

### 3. Reversiones a petición del Usuario (Rollbacks)
Para respetar las ediciones manuales del usuario y su flujo de pruebas, se revirtieron los siguientes cambios:
- Se devolvió la lógica de Framer Motion a `initial={{ opacity: 0 }}` en todas las secciones, recuperando las animaciones de entrada suaves (ver "Fragilidad pendiente" en el punto 2).
- Se deshizo la instalación de fuentes locales con `@fontsource` en `layout.tsx`, volviendo a utilizar las etiquetas `<link>` originales hacia Google Fonts.

## ⚠️ Regla Estricta Activa
El usuario realiza ajustes manuales de espaciado y lógica directamente en los archivos (ej: `Tension.tsx`, `Hero.tsx`). **Bajo ninguna circunstancia la IA debe reescribir, alterar o refactorizar código sin autorización explícita**, para evitar sobrescribir el trabajo manual del desarrollador.

---
*Documento generado y actualizado el 24 de Septiembre de 2026.*
