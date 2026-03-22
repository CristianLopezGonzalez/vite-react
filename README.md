# Hub Interactivo de Valorant & Marathon

Este es un proyecto frontend avanzado desarrollado con **React 18**, **Vite** y **TypeScript**. Se trata de una plataforma interactiva que funciona como una Wiki y Hub visual para dos universos distintos: **Valorant** (Riot Games) y **Marathon** (Bungie). El proyecto destaca por ofrecer interfaces (HUDs) temáticas inmersivas y dinámicas diseñadas específicamente para cada juego.

## 🌟 Listado de Funcionalidades Esenciales

- **Dual-Game Hub**: Selector principal (Home) que divide la experiencia en dos mundos visualmente opuestos con estéticas premium.
- **HUDs Temáticos Dinámicos**: Experiencia de usuario (UX) personalizada. La navegación, colores y efectos cambian según el juego seleccionado (Valorant vs Marathon).
- **Enciclopedia de Valorant**:
    - **Agentes**: Visualización de habilidades y roles con tarjetas interactivas.
    - **Armería**: Galería de armas con estadísticas técnicas.
    - **Mapas**: Visor de escenarios con planos y detalles clave.
- **Base de Datos de Marathon**:
    - **Corredores (Runners)**: Perfiles detallados de los protagonistas.
    - **Armamento Futurista**: Catálogo de armas basadas en el universo de Marathon.
    - **Facciones**: Información expandida sobre el lore y las fuerzas en conflicto.
- **Navegación Fluida (SPA)**: Cambio entre secciones instantáneo sin recarga de página, con gestión inteligente del scroll.
- **Diseño Glassmorphism & Micro-interacciones**: Interfaz moderna con efectos de transparencia, gradientes vibrantes y animaciones sutiles que elevan la sensación de producto premium.

## 🛠️ Justificación de las Tecnologías

- **React 18 & TypeScript**: Se eligió React por su arquitectura basada en componentes, ideal para reutilizar elementos del HUD. TypeScript garantiza un código robusto, facilita el mantenimiento y previene errores en tiempo de ejecución mediante tipado estático.
- **Vite**: Utilizado como motor de construcción por su velocidad extrema en desarrollo (HMR instantáneo) y su eficiencia en el empaquetado final de producción.
- **React Router DOM (v7)**: Para gestionar una estructura de rutas compleja que permite separar las dos experiencias de juego manteniendo una navegación limpia y lógica para el usuario.
- **TanStack React Query**: Implementado para la gestión del estado del servidor. Permite un almacenamiento en caché eficiente de la información de los personajes y armas, reduciendo las peticiones innecesarias y mejorando la velocidad de respuesta.
- **Axios**: Seleccionado sobre el `fetch` nativo por su facilidad para manejar interceptores, transformaciones de datos automáticas y una sintaxis más limpia para peticiones complejas.
- **Vanilla CSS (Modern Custom Styles)**: En lugar de usar frameworks como Tailwind, se optó por CSS nativo para tener un control absoluto sobre el diseño artístico de los HUDs, permitiendo crear efectos visuales únicos que no se sientan genéricos.

## 💻 Ejecución Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Producción:**
   ```bash
   npm run build
   ```

---
*Desarrollado como un tributo interactivo a Valorant y Marathon.*
