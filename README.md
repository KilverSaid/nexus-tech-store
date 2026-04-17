# NEXUS Tech Store
### Proyecto Final — Comercio Electrónico | Tecnología Web

<div align="center">

![NEXUS Tech Store](https://img.shields.io/badge/⬡_NEXUS-Tech_Store-00f5ff?style=for-the-badge&labelColor=050810)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![LocalStorage](https://img.shields.io/badge/LocalStorage-Persistencia-00ff88?style=for-the-badge&labelColor=050810)

</div>

---

## Sitio Desplegado

> **URL Pública:** [https://proyecto-economia-equipo3.netlify.app/](https://proyecto-economia-equipo3.netlify.app/)
>


---

##  Descripción del Proyecto

**NEXUS Tech Store** es una tienda de comercio electrónico completa orientada a productos de tecnología premium. Desarrollada como proyecto final del curso, integra todos los pilares del comercio electrónico moderno: catálogo interactivo, carrito de compras persistente, proceso de checkout con validaciones, políticas comerciales y métricas básicas.

El diseño sigue una estética **cyberpunk / dark-tech** con tipografías futuristas, animaciones CSS y una paleta basada en negro profundo con acentos en cyan eléctrico y magenta.

---


## Stack Tecnológico

| Tecnología | Versión | Uso en el proyecto |
|---|---|---|
| **HTML5** | — | Estructura semántica, SEO meta tags, Schema.org JSON-LD |
| **Bootstrap** | 5.3.3 | Layout responsive, Grid, Offcanvas, Modales, Collapse |
| **Bootstrap Icons** | 1.11.3 | Iconografía del sistema |
| **JavaScript** | ES6+ | Lógica de negocio, DOM, eventos, validaciones |

> Sin frameworks de JS ni dependencias de backend. Todo corre en el navegador del cliente.

---

## Alcance del Proyecto — Checklist

### 1. Catálogo y Oferta
- [x] Página de inicio con hero animado y propuesta de valor clara
- [x] 6 categorías de productos: Laptops, Monitores, Periféricos, GPU/Componentes, Storage, Audio
- [x] 15 productos con nombre, marca, precio, especificaciones técnicas y disponibilidad
- [x] Página de detalle de producto en modal con tabla de especificaciones
- [x] Badges de disponibilidad: En Stock / Stock Bajo / Sin Stock
- [x] Filtro por categoría, búsqueda en tiempo real y ordenamiento
- [x] Ratings y cantidad de reseñas por producto
- [x] Lista de deseos (wishlist) persistente

### 2. Carrito de Compras
- [x] Panel lateral (Offcanvas) accesible desde cualquier página
- [x] Agregar productos al carrito desde catálogo o desde detalle
- [x] Eliminar productos individuales
- [x] Actualizar cantidades con botones + / −
- [x] Validación de stock máximo por producto
- [x] Cálculo automático de subtotal, ISV (15%) y total
- [x] Selector de método de envío con cálculo dinámico
- [x] Envío gratuito automático en pedidos mayores a $299
- [x] **Persistencia con LocalStorage** — el carrito sobrevive recargas y cierres del navegador
- [x] Notificaciones toast de confirmación y error
- [x] Botón para vaciar el carrito

### 3. Proceso de Checkout (3 pasos)
- [x] **Paso 1 — Datos del cliente:** nombre, apellido, email, teléfono, dirección completa, departamento, ciudad, código postal, país y notas del pedido
- [x] **Validaciones en tiempo real** con feedback visual (campos verde/rojo)
- [x] **Paso 2 — Método de pago:** tarjeta crédito/débito, PayPal, transferencia bancaria, criptomoneda
- [x] Formulario de tarjeta con formato automático (número, fecha, CVV)
- [x] Modo prueba con datos de tarjeta de test
- [x] **Paso 3 — Revisión:** resumen completo de datos y pedido antes de confirmar
- [x] Pantalla de confirmación con número de orden único generado
- [x] Guardado del pedido completo en LocalStorage
- [x] Recibo de compra imprimible con todos los datos del pedido

### 4. Logística y Políticas
- [x] 3 métodos de envío: Estándar ($9.99), Express ($24.99), Nocturno ($49.99)
- [x] Política de envíos completa con plazos y cobertura
- [x] Política de devoluciones (30 días, condiciones y proceso)
- [x] Términos y Condiciones (expandibles)
- [x] Aviso de Privacidad (tratamiento de datos personales)

### 5. Seguridad y Experiencia de Usuario
- [x] Sitio desplegado con **HTTPS** (Netlify)
- [x] **Diseño 100% responsive** — funciona en móvil, tablet y escritorio
- [x] Todos los formularios con validaciones del lado del cliente
- [x] Navegación clara con navbar sticky y links activos
- [x] Feedback visual en todas las interacciones (hover, focus, animaciones)
- [x] Barra de estado de proceso (steps) en checkout

### 6. Marketing y Analítica
- [x] **SEO básico:** `<title>`, `<meta description>`, `<meta keywords>`, Open Graph tags
- [x] **Schema.org JSON-LD** para rich snippets en buscadores
- [x] Formulario de captura de leads (newsletter) con validación
- [x] Formulario de contacto con asunto seleccionable
- [x] **Sistema de analytics en LocalStorage** — registra los siguientes eventos:
  - `page_view` — visita a la tienda
  - `view_item` — producto visto en detalle
  - `add_to_cart` — producto añadido al carrito
  - `remove_from_cart` — producto eliminado del carrito
  - `add_to_wishlist` — producto marcado como favorito
  - `filter_category` — categoría seleccionada
  - `search` — búsqueda realizada
  - `begin_checkout` — inicio del proceso de pago
  - `purchase` — compra completada
  - `newsletter_signup` — suscripción al newsletter
  - `contact_form_submit` — envío de formulario de contacto

---

## Estructura del Proyecto

```
nexus-tech-store/
│
├── index.html          # Aplicación completa (SPA)
│                       # Contiene: hero, catálogo, checkout, confirmación,
│                       # políticas, contacto, footer, modales, offcanvas
│
├── style.css           # Estilos personalizados (~960 líneas)
│                       # Variables CSS, diseño cyberpunk, animaciones,
│                       # responsive, estilos de impresión (@media print)
│
├── app.js              # Lógica de la aplicación (~1000 líneas)
│                       # Datos de productos, carrito, checkout,
│                       # validaciones, analytics, LocalStorage
│
└── README.md           # Este archivo
```

---

## Datos Guardados en LocalStorage

| Clave | Tipo | Contenido |
|---|---|---|
| `nexus_cart` | Array | Productos en el carrito (`{id, qty}`) |
| `nexus_wishlist` | Array | IDs de productos en favoritos |
| `nexus_orders` | Array | Historial completo de pedidos realizados |
| `nexus_leads` | Array | Emails suscritos al newsletter |
| `nexus_events` | Array | Log de eventos de analytics (máx. 200) |

---

## Evidencia del Flujo Completo

### Flujo: Catálogo → Carrito → Checkout → Confirmación

**1. Catálogo**
- Navega a la sección de productos
- Filtra por categoría (ej. Laptops)
- Usa la búsqueda para encontrar un producto
- Haz clic en "Vista rápida" para ver detalles completos

**2. Carrito**
- Añade 2 o más productos con "Añadir al Carrito"
- Abre el carrito con el botón "CARRITO" en la navbar
- Modifica cantidades con + y −
- Verifica que el total se calcula correctamente (subtotal + ISV 15% + envío)
- Recarga la página y verifica que el carrito **persiste** gracias a LocalStorage

**3. Checkout**
- Clic en "PROCEDER AL CHECKOUT"
- **Paso 1:** Completa todos los campos. Intenta continuar con un campo vacío para ver la validación
- **Paso 2:** Selecciona "Tarjeta de Crédito" y usa los datos de prueba:
  ```
  Número:      4242 4242 4242 4242
  Nombre:      JUAN PEREZ
  Vencimiento: 12/26
  CVV:         123
  ```
- **Paso 3:** Revisa el resumen completo del pedido
- Clic en "CONFIRMAR Y PAGAR"

**4. Confirmación**
- Verifica que se genera un número de orden único (formato `NX-XXXXXXX`)
- Haz clic en "IMPRIMIR RECIBO" para ver el recibo detallado con todos los datos

---


## Decisiones de Diseño

### Estética y Tema
Se eligió una estética **cyberpunk / dark-tech** por su coherencia con el tipo de productos (tecnología gaming y premium). Los colores principales son:

| Variable | Color | Uso |
|---|---|---|
| `--cyan` | `#00f5ff` | Acentos principales, precios, bordes activos |
| `--magenta` | `#ff006e` | Badges de oferta, elementos secundarios |
| `--yellow` | `#ffbe0b` | Badges HOT, advertencias de stock |
| `--dark` | `#050810` | Fondo principal |
| `--success` | `#00ff88` | Stock disponible, confirmaciones |

### Tipografías
- **Orbitron** — Títulos y encabezados (futurista, geométrica)
- **Rajdhani** — Texto del cuerpo (legible, semi-condensada)
- **Share Tech Mono** — Precios, códigos, datos técnicos (monoespaciada)

### Arquitectura
El sitio es una **SPA (Single Page Application)** sin framework de JS. Todas las secciones existen en el DOM y se muestran/ocultan con JavaScript. La navegación entre catálogo, checkout y confirmación se maneja con `display: block/none`.

---

## Cómo Ejecutar Localmente

No requiere servidor ni instalación de dependencias.

```bash
# Opción 1: Simplemente abre el archivo
Doble clic en index.html

# Opción 2: Con Live Server en VS Code
1. Instala la extensión "Live Server" en VS Code
2. Clic derecho en index.html → "Open with Live Server"
3. Se abre en http://localhost:5500

# Opción 3: Con Python (si está instalado)
python -m http.server 8000
# Luego abre: http://localhost:8000
```

---

## Recursos y Referencias

| Recurso | URL |
|---|---|
| Bootstrap 5 Docs | https://getbootstrap.com/docs/5.3/ |
| Bootstrap Icons | https://icons.getbootstrap.com/ |
| Google Fonts | https://fonts.google.com/ |
| MDN Web Docs — LocalStorage | https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage |
| Schema.org — Store | https://schema.org/Store |
| Netlify Docs | https://docs.netlify.com/ |

---

##  Equipo

> HEYLIE NAHOMY VELASQUEZ CHAVER

> KILVER SAID NOLASCO PARADA

---

<div align="center">

**⬡ NEXUS Tech Store** — Proyecto Final de Comercio Electrónico

*Desarrollado con HTML, Bootstrap 5, JavaScript Vanilla y LocalStorage*

Honduras, 2025

</div>
