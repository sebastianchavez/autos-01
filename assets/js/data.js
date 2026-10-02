/* ====================================================================
   AutoTotal · Datos mock compartidos por todas las páginas
   Cargado ANTES que assets/js/main.js
   ==================================================================== */

// Catálogo de productos (id, nombre, categoría, precio, oldPrice, rating, reviews, image, stock, marca, descripción, destacado)
const PRODUCTS = [
  { id: 1,  name: "Aceite Motor Sintético 5W-30 (4L)", category: "repuestos",   price: 28990, oldPrice: 34990, rating: 4.8, reviews: 142, image: "https://images.unsplash.com/photo-1632823469850-1f7e28e0a6f4?w=600&q=80", stock: 32, brand: "Castrol",     featured: true,  description: "Aceite sintético premium para motores modernos. Protección superior contra el desgaste y excelente desempeño a bajas temperaturas. Aprobado por las normas API SP y ACEA C3. Presentación de 4 litros." },
  { id: 2,  name: "Filtro de Aire Deportivo",            category: "repuestos",   price: 14990, oldPrice: 18990, rating: 4.6, reviews:  87, image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80", stock: 18, brand: "K&N",         featured: true,  description: "Filtro de aire de alto flujo lavable y reutilizable. Aumenta la potencia del motor y mejora la respuesta del acelerador. Compatible con la mayoría de los autos del mercado." },
  { id: 3,  name: "Pastillas de Freno Cerámicas",        category: "repuestos",   price: 34990, oldPrice: null,  rating: 4.9, reviews: 211, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", stock: 25, brand: "Brembo",      featured: true,  description: "Juego de 4 pastillas de freno cerámicas de bajo ruido y polvo. Larga duración y frenado consistente en todas las condiciones. Incluye accesorios de instalación." },
  { id: 4,  name: "Batería 12V 60Ah",                    category: "repuestos",   price: 79990, oldPrice: 89990, rating: 4.7, reviews:  56, image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&q=80", stock: 12, brand: "ACDelco",     featured: false, description: "Batería libre de mantenimiento con tecnología de calcio/plata. Mayor vida útil y mejor arranque en frío. Garantía de 24 meses." },
  { id: 5,  name: "Set de Alfombras Universales",        category: "accesorios",  price: 19990, oldPrice: null,  rating: 4.4, reviews:  98, image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&q=80", stock: 40, brand: "AutoCustom",  featured: true,  description: "Set de 4 alfombras en goma resistente, ajuste universal para sedanes y SUVs. Antideslizantes y fáciles de limpiar." },
  { id: 6,  name: "Funda Asiento Premium",               category: "accesorios",  price: 24990, oldPrice: 29990, rating: 4.5, reviews:  67, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", stock: 22, brand: "ComfortRide", featured: false, description: "Funda de asiento de cuero sintético con relleno extra. Compatible con airbags laterales. Incluye cubre volante y cubre palanca." },
  { id: 7,  name: "Cámara de Retroceso HD",              category: "accesorios",  price: 39990, oldPrice: 49990, rating: 4.6, reviews: 134, image: "https://images.unsplash.com/photo-1597007030739-6d2e7172ee1e?w=600&q=80", stock: 15, brand: "Pioneer",     featured: false, description: "Cámara de retroceso con resolución HD y visión nocturna. Incluye monitor LCD de 5 pulgadas, cables y manual de instalación. IP67." },
  { id: 8,  name: "Tuercas Antirrobo (Set 4)",            category: "accesorios",  price: 12990, oldPrice: null,  rating: 4.7, reviews:  89, image: "https://images.unsplash.com/photo-1571987502227-9231b837d92a?w=600&q=80", stock: 30, brand: "McGard",      featured: false, description: "Set de 4 tuercas de seguridad con llave codificada. Acero endurecido con tratamiento anticorrosivo." },
  { id: 9,  name: "Llave de Impacto Inalámbrica 1/2\"",   category: "herramientas",price: 89990, oldPrice:109990, rating: 4.8, reviews:  76, image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80", stock:  9, brand: "Milwaukee",   featured: false, description: "Llave de impacto brushless con torque máximo de 1200 Nm. Batería de 5 Ah y cargador rápido incluidos. Maletín profesional." },
  { id: 10, name: "Gato Hidráulico 2 toneladas",          category: "herramientas",price: 49990, oldPrice: null,  rating: 4.5, reviews:  54, image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&q=80", stock: 14, brand: "Truper",      featured: false, description: "Gato hidráulico de botella con capacidad de 2 toneladas. Altura mínima 180 mm, máxima 350 mm. Válvula de seguridad." },
  { id: 11, name: "Set de Dados 108 Piezas",              category: "herramientas",price: 64990, oldPrice: 79990, rating: 4.9, reviews: 165, image: "https://images.unsplash.com/photo-1581147656312-c4b6c9d6a8c4?w=600&q=80", stock: 11, brand: "Stanley",     featured: false, description: "Set completo de dados y accesorios en estuche metálico. 108 piezas en medidas métricas y SAE. Cromo vanadio." },
  { id: 12, name: "Cambio de Aceite Full Service",        category: "servicios",   price: 35990, oldPrice: null,  rating: 4.9, reviews: 312, image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80", stock: 50, brand: "AutoTotal",   featured: true,  description: "Servicio completo de cambio de aceite sintético. Incluye filtro de aceite, revisión de niveles y diagnóstico básico. Duración 45 min." },
  { id: 13, name: "Alineación y Balanceo",                 category: "servicios",   price: 29990, oldPrice: null,  rating: 4.7, reviews: 198, image: "https://images.unsplash.com/photo-1632823469850-1f7e28e0a6f4?w=600&q=80", stock: 50, brand: "AutoTotal",   featured: false, description: "Alineación computarizada 3D y balanceo de las 4 ruedas. Mejora el rendimiento del combustible. Recomendado cada 10.000 km." },
  { id: 14, name: "Diagnóstico Computarizado",            category: "servicios",   price: 19990, oldPrice: null,  rating: 4.8, reviews: 145, image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&q=80", stock: 50, brand: "AutoTotal",   featured: false, description: "Escaneo completo del sistema electrónico del vehículo con scanner multimarca. Lectura y borrado de códigos de error." },
];

// Reseñas (id, productId, user, rating, date, comment, avatar)
const REVIEWS = [
  { id: 1, productId: 1, user: "Roberto Silva",     rating: 5, date: "2026-08-15", comment: "Excelente aceite, mi motor anda mucho más suave. Lo recomiendo totalmente.", avatar: "RS" },
  { id: 2, productId: 1, user: "Felipe González",   rating: 4, date: "2026-07-22", comment: "Buen producto, llegó bien embalado y antes de lo esperado.", avatar: "FG" },
  { id: 3, productId: 1, user: "Carolina Reyes",    rating: 5, date: "2026-06-10", comment: "Es el aceite que uso hace años y nunca me falla. Muy buena calidad.", avatar: "CR" },
  { id: 4, productId: 3, user: "Andrea Pérez",      rating: 5, date: "2026-09-01", comment: "Las pastillas Brembo son otra cosa, frenado impecable.", avatar: "AP" },
  { id: 5, productId: 3, user: "Manuel Sáez",       rating: 5, date: "2026-08-18", comment: "Calidad Brembo se nota desde la primera frenada.", avatar: "MS" },
  { id: 6, productId: 5, user: "Luis Mendoza",      rating: 4, date: "2026-08-28", comment: "Buen ajuste universal, calidad decente por el precio.", avatar: "LM" },
  { id: 7, productId: 5, user: "Patricia Vega",     rating: 4, date: "2026-07-30", comment: "Cumplen bien su función, el olor al principio era fuerte pero desapareció.", avatar: "PV" },
  { id: 8, productId: 7, user: "Camila Soto",       rating: 5, date: "2026-09-05", comment: "La cámara se ve perfecta, incluso de noche.", avatar: "CS" },
  { id: 9, productId: 9, user: "Diego Castillo",    rating: 5, date: "2026-08-12", comment: "Una bestia la llave Milwaukee. La uso a diario en el taller.", avatar: "DC" },
  { id: 10, productId: 12, user: "Carolina Reyes",   rating: 5, date: "2026-09-10", comment: "Servicio impecable, todo rápido.", avatar: "CR" },
  { id: 11, productId: 12, user: "Sebastián Jara",   rating: 5, date: "2026-08-25", comment: "Los mecánicos son muy profesionales, me mostraron todo lo que iban haciendo.", avatar: "SJ" },
  { id: 12, productId: 13, user: "Andrés Torres",    rating: 5, date: "2026-08-05", comment: "Quedó como nuevo el auto, no vibra nada.", avatar: "AT" }
];

// Pedidos del usuario (id, date, status, total, shipping, payment, address, products[])
const ORDERS = [
  { id: "AT-2026-0142", date: "2026-09-15", status: "delivered", total: 58970, shipping: 3990, payment: "Tarjeta de crédito",       address: "Av. Las Condes 4520, Of. 12, Las Condes", products: [1, 5, 8] },
  { id: "AT-2026-0189", date: "2026-09-22", status: "shipped",   total:124980, shipping: 3990, payment: "Transferencia bancaria",   address: "Av. Las Condes 4520, Of. 12, Las Condes", products: [7, 9] },
  { id: "AT-2026-0201", date: "2026-09-23", status: "pending",   total: 24990, shipping: 3990, payment: "Webpay",                  address: "Av. Las Condes 4520, Of. 12, Las Condes", products: [6] },
  { id: "AT-2026-0098", date: "2026-07-12", status: "delivered", total: 89990, shipping:    0, payment: "Tarjeta de débito",       address: "Av. Las Condes 4520, Of. 12, Las Condes", products: [9] },
  { id: "AT-2026-0045", date: "2026-05-08", status: "delivered", total: 64980, shipping:    0, payment: "Efectivo",                address: "Av. Las Condes 4520, Of. 12, Las Condes", products: [12, 5] }
];

// Usuario logueado (mock)
const CURRENT_USER = {
  name:  "Juan",
  lastName: "Pérez",
  fullName: "Juan Pérez",
  email: "juan.perez@email.cl",
  phone: "+56 9 6234 5678",
  initials: "JP",
  rut: "12.345.678-9",
  memberSince: "2023"
};

// Catálogo de categorías con íconos
const CATEGORIES = [
  { key: "repuestos",    label: "Repuestos",     icon: "settings" },
  { key: "accesorios",   label: "Accesorios",    icon: "chair" },
  { key: "herramientas", label: "Herramientas",  icon: "build" },
  { key: "servicios",    label: "Servicios",     icon: "construction" }
];

// Estados de pedido
const ORDER_STATUS = {
  delivered: { label: "Entregado",   class: "bg-green-100 text-green-700",  icon: "check_circle" },
  shipped:   { label: "En camino",   class: "bg-blue-100 text-blue-700",    icon: "local_shipping" },
  pending:   { label: "Pendiente",   class: "bg-yellow-100 text-yellow-700", icon: "schedule" }
};
