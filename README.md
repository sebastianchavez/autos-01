# AutoTotal — Ecommerce de artículos y servicios de autos

Sitio web ecommerce estático (HTML + Tailwind CSS + JS nativo) para un local de repuestos, accesorios y servicios automotrices.

## Vista rápida

- **Tipo:** Sitio estático listo para producción (sin bundlers ni frameworks).
- **Stack:** HTML + Tailwind CSS (CDN) + Material Symbols + JS nativo.
- **Moneda:** CLP (pesos chilenos, sin decimales).
- **Idioma:** Español (es-CL).
- **Navegación:** Links relativos entre páginas HTML; se abre directamente en el navegador sin servidor.

---

## Estructura del proyecto

```
autos-01/
├── index.html              Landing / Inicio
├── productos.html          Catálogo (filtros: categoría, precio, marca, rating)
├── producto.html           Detalle de producto (acepta ?id=N)
├── carrito.html            Carrito con cantidades editables
├── pago.html               Confirmación de pago (dirección + envío + pago)
├── confirmacion.html       Comprobante (botones: Imprimir / Ver historial)
├── perfil.html             Mi perfil (pedidos / datos / direcciones / seguridad)
├── pedido.html             Detalle del pedido (acepta ?id=ORD-X)
├── resena.html             Form de reseña con selector de estrellas (acepta ?id=N)
├── nosotros.html           Sobre nosotros + equipo
├── contacto.html           Contacto (form + horario + ubicación)
├── privacidad.html         Políticas de privacidad
├── terminos.html           Términos y condiciones
├── registro.html           Crear cuenta (con medidor de fortaleza de pass)
├── login.html              Iniciar sesión
├── recuperar.html          Recuperar contraseña (flujo 3 pasos)
└── assets/
    ├── css/
    │   └── styles.css      Estilos globales (iconos, stepper, opciones…)
    ├── js/
    │   ├── data.js         Catálogo, reseñas, pedidos, usuario mock
    │   └── main.js         Helpers: carrito, badge, header/footer, toasts
    └── images/             (placeholder para imágenes locales)
```

## Cómo abrir

Opción 1 — Doble clic en `index.html`. Se abre en el navegador predeterminado. Funciona porque todas las rutas son relativas a la raíz del sitio.

Opción 2 — Servidor local (recomendado para evitar restricciones de `localStorage` en algunos navegadores):

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

Luego visita http://localhost:8000

## Páginas y funcionalidades

### Flujo de compra
1. **index.html** → Explorar productos y categorías.
2. **productos.html** → Filtrar catálogo (categoría, precio, marca, valoración).
3. **producto.html** → Ver detalle, elegir cantidad, agregar al carrito.
4. **carrito.html** → Ajustar cantidades y proceder al pago.
5. **pago.html** → Completar dirección, tipo de envío (retiro/estándar/express) y medio de pago (tarjeta/Webpay/transferencia/efectivo).
6. **confirmacion.html** → Comprobante imprimible + enlaces a "Ver historial de pedidos" y "Seguir comprando".

### Cuenta de usuario
- **registro.html** — Crear cuenta con validación y medidor visual de fortaleza de contraseña.
- **login.html** — Iniciar sesión (demo: `juan.perez@email.cl` / `demo1234`).
- **recuperar.html** — 3 pasos: email → código OTP → nueva contraseña.
- **perfil.html** — Tabs: Pedidos, Mis datos, Direcciones, Favoritos, Seguridad.
- **pedido.html** — Detalle con timeline de estados (Recibido → Preparando → En camino → Entregado).

### Contenido institucional
- **nosotros.html** — Historia, misión/visión/valores y grid del equipo.
- **contacto.html** — Formulario, teléfonos, emails, horario con indicador "Abierto ahora", mapa.

### Legal
- **privacidad.html** — Cumplimiento Ley 19.628 Chile.
- **terminos.html** — Aceptación, compras, envíos, devoluciones, garantías.

## Recursos compartidos

### `assets/js/data.js`

Contiene los datos mock compartidos por todas las páginas. Editar aquí propagará cambios:

- `PRODUCTS` — Catálogo de 14 productos en 4 categorías (repuestos, accesorios, herramientas, servicios).
- `REVIEWS` — 12 reseñas de usuarios con estrellas.
- `ORDERS` — 5 pedidos en distintos estados (delivered / shipped / pending).
- `CURRENT_USER` — Usuario demo "Juan Pérez".
- `CATEGORIES` — Listado de categorías con íconos.
- `ORDER_STATUS` — Mapa de estados de pedido a etiquetas/clases/iconos.

### `assets/js/main.js`

API expuesta como funciones globales:

```js
clp(n)                  // "$1.250"
addToCart(id, qty?)     // agregar producto al carrito + toast
removeFromCart(id)
updateQty(id, delta)
getCart() / saveCart(c)
clearCart()
cartCount() / cartSubtotal()
refreshCartBadge()      // actualizar burbuja del header
toast(msg, icon?)       // notificación flotante
renderHeader(activeKey) // inyectar header en #appHeader
renderFooter()          // inyectar footer en #appFooter
productCardHTML(p)      // card reusable de producto
productMiniCardHTML(p)  // mini card con link
starsHTML(rating, size?)// barras de estrellas
setupCardSelection(...) // selección visual de tarjetas envío/pago
```

### `assets/css/styles.css`

Clases auxiliares:
- `.fill-1` — Material Symbols rellenos.
- `.line-clamp-1/2/3` — Truncado de texto multilínea.
- `.option-card.selected` — Tarjeta seleccionada (envío/pago).
- `.strength-fill` — Barra de fortaleza de password.
- `.step.active | .done | .pending` — Stepper de recuperación.
- `.star-btn | .star-active | .star-inactive` — Selector de estrellas.
- `.card-hover`, `.group-zoom` — Animaciones de hover.
- `.policy-content` — Tipografía de documentos legales.
- Soporte `@media print` para comprobantes.

## Características técnicas

- **Carrito persistente:** Usa `localStorage` con clave `autototal_cart`. El badge se actualiza en todas las páginas al cargar.
- **Toasts reutilizables:** Auto-dismiss en 2.5s.
- **Responsive:** Diseño mobile-first con breakpoint `lg` (1024px).
- **Modo oscuro preparado:** Tailwind configurado con `darkMode: "class"` (activable cambiando `class="light"` por `"dark"` en `<html>`).
- **Búsqueda por URL:** `producto.html?id=1`, `pedido.html?id=AT-2026-0142`, `productos.html?cat=repuestos`.
- **Formularios:** Validación HTML5 con feedback nativo.

## Datos mockeados

- **Productos:** Precios en CLP (sin decimales), stock, marca, descripción, rating, reviews.
- **Pedidos:** 5 órdenes en distintos estados para probar el timeline.
- **Reseñas:** 12 reseñas distribuidas entre los productos.
- **Usuario:** "Juan Pérez" con pedidos y datos prellenados.

Para agregar más productos, edita el array `PRODUCTS` en `assets/js/data.js`. El catálogo (catálogo/filtros/carrito/perfil) se actualiza automáticamente.

## Notas

- Las imágenes se cargan desde Unsplash vía URL directa (hot-link). Para producción, reemplázalas por imágenes locales en `assets/images/`.
- El sitio usa Tailwind CSS vía CDN (`cdn.tailwindcss.com`). Para producción se recomienda compilar Tailwind localmente para mejor rendimiento.
- Las fuentes (Inter, Material Symbols) se cargan desde Google Fonts.
- El formulario de contacto y los pedidos se simulan en el cliente. Para producción, integra con un backend real.

## Licencia

Template de demostración. Personaliza libremente para tu proyecto.
