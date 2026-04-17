/**
 * NEXUS TECH STORE — app.js
 * Complete e-commerce logic with LocalStorage persistence
 */
/* ============================================================
   DATA — Products Catalog
   ============================================================ */
const PRODUCTS = [
  // LAPTOPS
  {
    id: 1, category: 'laptops', brand: 'ASUS', name: 'ROG Zephyrus G14 2024',
    price: 1499.99, oldPrice: 1799.99,
    specs: 'Ryzen 9 8945HS | RTX 4060 | 16GB RAM | 1TB SSD',
    description: 'La bestia definitiva para gaming portátil. Pantalla OLED 144Hz, batería de 73Wh y chasis de magnesio ultra-delgado. Con AMD Advantage Edition y tecnología MUX Switch para máximo rendimiento.',
    stock: 8, badge: 'sale', rating: 4.8, reviews: 234,
    img: 'https://sm.pcmag.com/pcmag_me/review/a/asus-rog-z/asus-rog-zephyrus-g14-2024_qw12.jpg',
    specs_table: { 'CPU': 'AMD Ryzen 9 8945HS', 'GPU': 'NVIDIA RTX 4060 8GB', 'RAM': '16GB DDR5 5600MHz', 'Almacenamiento': '1TB NVMe PCIe 4.0', 'Pantalla': '14" OLED 2K 144Hz', 'Batería': '73Wh / ~10h', 'SO': 'Windows 11 Home', 'Peso': '1.65 kg' }
  },
  {
    id: 2, category: 'laptops', brand: 'Apple', name: 'MacBook Pro M3 Pro 14"',
    price: 1999.99, oldPrice: null,
    specs: 'Apple M3 Pro | 18GB RAM Unificada | 512GB SSD',
    description: 'El MacBook Pro más potente con chip M3 Pro. Pantalla Liquid Retina XDR con ProMotion 120Hz, hasta 18 horas de batería y sistema de refrigeración completamente renovado.',
    stock: 12, badge: 'new', rating: 4.9, reviews: 189,
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290',
    specs_table: { 'CPU/GPU': 'Apple M3 Pro (11+5)', 'RAM': '18GB Unificada', 'Almacenamiento': '512GB SSD', 'Pantalla': '14.2" Liquid Retina XDR', 'Batería': 'Hasta 18 horas', 'SO': 'macOS Sonoma', 'Peso': '1.61 kg', 'Puertos': '3x USB-C Thunderbolt 4, HDMI, SD' }
  },
  {
    id: 3, category: 'laptops', brand: 'Lenovo', name: 'ThinkPad X1 Carbon Gen 12',
    price: 1349.99, oldPrice: 1549.99,
    specs: 'Intel Core Ultra 7 165U | Intel Arc | 16GB RAM | 512GB SSD',
    description: 'La laptop empresarial más icónica. Ultra-ligera con 1.12 kg, certificación MIL-SPEC, teclado legendario ThinkPad y seguridad ThinkShield integrada.',
    stock: 5, badge: 'sale', rating: 4.7, reviews: 312,
    img: 'https://sm.pcmag.com/pcmag_me/review/l/lenovo-thi/lenovo-thinkpad-x1-carbon-gen-12_zjhe.jpg',
    specs_table: { 'CPU': 'Intel Core Ultra 7 165U', 'GPU': 'Intel Arc + Xe Graphics', 'RAM': '16GB LPDDR5x', 'Almacenamiento': '512GB PCIe 4.0', 'Pantalla': '14" IPS 2.8K OLED', 'Peso': '1.12 kg', 'SO': 'Windows 11 Pro', 'Batería': '57Wh, hasta 15h' }
  },

  // MONITORS
  {
    id: 4, category: 'monitors', brand: 'Samsung', name: 'Odyssey OLED G8 34"',
    price: 899.99, oldPrice: 1099.99,
    specs: '34" OLED | 175Hz | 0.03ms | Ultrawide QD-OLED',
    description: 'Monitor gaming de próxima generación con panel QD-OLED curvo. Colores absolutamente perfectos con contraste infinito, ideal para gaming competitivo y producción de contenido.',
    stock: 3, badge: 'sale', rating: 4.9, reviews: 98,
    img: 'https://img.global.news.samsung.com/cl/wp-content/uploads/2022/10/Odyssey-OLED-G8-1.jpg',
    specs_table: { 'Panel': 'QD-OLED', 'Tamaño': '34" Curvo 1800R', 'Resolución': '3440 x 1440 UWQHD', 'Frecuencia': '175Hz', 'Tiempo Resp.': '0.03ms GtG', 'HDR': 'DisplayHDR True Black 400', 'Conectividad': 'DisplayPort 1.4, 2x HDMI 2.1', 'Brillo': '250 nits típico' }
  },
  {
    id: 5, category: 'monitors', brand: 'LG', name: 'UltraGear 27GP950-B',
    price: 499.99, oldPrice: 649.99,
    specs: '27" IPS | 4K 160Hz | 1ms GtG | NVIDIA G-Sync',
    description: 'El equilibrio perfecto entre resolución y velocidad. Panel Nano IPS con cobertura DCI-P3 98%, compatible con NVIDIA G-Sync y AMD FreeSync Premium Pro.',
    stock: 15, badge: null, rating: 4.6, reviews: 445,
    img: 'https://www.bhphotovideo.com/images/fb/lg_27gp950_b_27_uhd_4k_ips_1702619.jpg',
    specs_table: { 'Panel': 'Nano IPS', 'Tamaño': '27"', 'Resolución': '4K UHD (3840x2160)', 'Frecuencia': '160Hz', 'Tiempo Resp.': '1ms GtG', 'HDR': 'VESA DisplayHDR 600', 'Color': 'DCI-P3 98%', 'Adaptativo': 'G-Sync + FreeSync Premium Pro' }
  },

  // PERIFERICOS
  {
    id: 6, category: 'peripherals', brand: 'Logitech', name: 'MX Master 3S',
    price: 99.99, oldPrice: null,
    specs: '8000 DPI | MagSpeed Scroll | 7 botones | Bluetooth',
    description: 'El mouse de productividad definitivo. Scroll electromagnético MagSpeed 90% más silencioso, sensor óptico de 8000 DPI y hasta 70 días de batería.',
    stock: 30, badge: null, rating: 4.8, reviews: 1203,
    img: 'https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png',
    specs_table: { 'DPI': '200-8000', 'Botones': '7 programables', 'Scroll': 'MagSpeed electromagnético', 'Conexión': 'Bluetooth + USB Logi Bolt', 'Batería': 'Hasta 70 días', 'Carga': 'USB-C 1 min = 3h', 'Compatibilidad': 'Win/Mac/Linux', 'Peso': '141g' }
  },
  {
    id: 7, category: 'peripherals', brand: 'Razer', name: 'BlackWidow V4 Pro',
    price: 189.99, oldPrice: 229.99,
    specs: 'Switches Green | RGB Chroma | Macro Keys | Wireless',
    description: 'Teclado mecánico premium con switches Razer Green táctiles, iluminación Chroma RGB por tecla, teclas macro dedicadas y conectividad HyperSpeed Wireless.',
    stock: 18, badge: 'sale', rating: 4.7, reviews: 567,
    img: 'https://microless.com/cdn/products/af0cd7fab240c901bc983a668a44ef58-hi.jpg',
    specs_table: { 'Switches': 'Razer Green Clicky', 'Retroiluminación': 'RGB Chroma per-key', 'Teclas Macro': '5 dedicadas + Multimarca', 'Conectividad': 'HyperSpeed 2.4GHz + BT + USB', 'Batería': 'Hasta 200h (sin RGB)', 'Anti-ghosting': 'Full N-Key Rollover', 'Reposamuñecas': 'Magnético incluido', 'Peso': '1148g' }
  },
  {
    id: 8, category: 'peripherals', brand: 'HyperX', name: 'Cloud Alpha Wireless',
    price: 179.99, oldPrice: 199.99,
    specs: '7.1 Surround | 300h batería | DTS | 50mm drivers',
    description: 'Auriculares gaming con la batería más larga del mercado: hasta 300 horas de uso continuo. Sonido Hi-Fi con drivers duales de cámara y certificación Discord.',
    stock: 22, badge: 'hot', rating: 4.8, reviews: 892,
    img: 'https://www.muycomputer.com/wp-content/uploads/2022/04/HyperX-Cloud-Alpha-Wireless-autonom%C3%ADa-300-horas-e1649676751639.jpg',
    specs_table: { 'Drivers': '50mm Dual Chamber', 'Batería': 'Hasta 300 horas', 'Frecuencia': '15Hz - 21kHz', 'Mic': 'Noise-cancelling removible', 'Conexión': '2.4GHz Wireless + 3.5mm', 'Sonido': 'DTS Headphone:X Spatial Audio', 'Peso': '335g', 'Certificación': 'Discord Certified, TeamSpeak' }
  },
  {
    id: 9, category: 'peripherals', brand: 'Corsair', name: 'Scimitar RGB Elite',
    price: 69.99, oldPrice: 89.99,
    specs: '18000 DPI | 17 botones | KeySlider | Optical Sensor',
    description: 'Mouse gaming MMO con 17 botones programables y sistema Key Slider exclusivo. Sensor óptico PixArt 3392 de primera clase y retroiluminación RGB por zonas.',
    stock: 25, badge: 'sale', rating: 4.5, reviews: 334,
    img: 'https://media.ldlc.com/bo/images/fiches/souris/corsair/Scimitar_Elite/1.jpg',
    specs_table: { 'Sensor': 'PixArt PAW3392 Optical', 'DPI': '100-18,000', 'Botones': '17 programables', 'Thumb Grid': '12 teclas ajustables (Key Slider)', 'Polling Rate': '2000Hz USB', 'RGB': '3 zonas independientes', 'Cable': 'Braided USB', 'Peso': '133g' }
  },

  // ALMACENAMIENTO
  {
    id: 10, category: 'storage', brand: 'Samsung', name: '990 PRO NVMe 2TB',
    price: 149.99, oldPrice: 189.99,
    specs: 'PCIe 4.0 | 7450 MB/s | 2TB | PS5 Compatible',
    description: 'La SSD NVMe más rápida de Samsung para PC gaming y PS5. Con velocidades de lectura de hasta 7450 MB/s y eficiencia térmica mejorada para rendimiento sostenido.',
    stock: 40, badge: 'sale', rating: 4.9, reviews: 2134,
    img: 'https://asite.io/i/p/samsung-mz-v9p2t0bw-l6225766.jpg',
    specs_table: { 'Interfaz': 'PCIe Gen 4x4 NVMe 2.0', 'Lectura Seq.': '7,450 MB/s', 'Escritura Seq.': '6,900 MB/s', 'Capacidad': '2TB', 'Factor Forma': 'M.2 2280', 'Endurance': '1,200 TBW', 'DRAM': 'Si, integrado', 'Garantía': '5 años' }
  },
  {
    id: 11, category: 'storage', brand: 'WD', name: 'Black SN850X 1TB',
    price: 99.99, oldPrice: 129.99,
    specs: 'PCIe 4.0 | 7300 MB/s | 1TB | Gaming Mode',
    description: 'Diseñada para gaming. Con Game Mode 2.0, la SN850X reduce tiempos de carga en juegos compatibles. Disipador de calor opcional para overclock extremo.',
    stock: 35, badge: null, rating: 4.7, reviews: 1567,
    img: 'https://fullh4rd.com.ar/img/productos/12/hd-ssd-1tb-wd-black-sn850x-m2-nvme-gen4-7300mbs-1.jpg',
    specs_table: { 'Interfaz': 'PCIe Gen 4x4 NVMe', 'Lectura Seq.': '7,300 MB/s', 'Escritura Seq.': '6,350 MB/s', 'Capacidad': '1TB', 'Factor Forma': 'M.2 2280', 'Gaming Mode': 'Sí (WD_BLACK Dashboard)', 'Garantía': '5 años', 'TBW': '600 TBW' }
  },

  // GPU
  {
    id: 12, category: 'components', brand: 'NVIDIA', name: 'GeForce RTX 4070 Ti SUPER',
    price: 799.99, oldPrice: 899.99,
    specs: '16GB GDDR6X | DLSS 3 | Ray Tracing | 285W TDP',
    description: 'La GPU ideal para 4K gaming. Con Frame Generation DLSS 3, trazado de rayos de última generación y 16GB de memoria GDDR6X ultra-rápida para texturas en máxima calidad.',
    stock: 7, badge: 'hot', rating: 4.8, reviews: 678,
    img: 'https://i.blogs.es/8c71eb/nvidiasuper-ap/1366_521.jpeg',
    specs_table: { 'CUDA Cores': '8448', 'VRAM': '16GB GDDR6X 256-bit', 'Boost Clock': '2610 MHz', 'TDP': '285W', 'NVLink': 'No', 'Outputs': '3x DP 1.4a, 1x HDMI 2.1', 'DLSS': '3.5 (Frame Gen)', 'Longitud': '~336mm' }
  },
  {
    id: 13, category: 'components', brand: 'AMD', name: 'Radeon RX 7900 XTX',
    price: 899.99, oldPrice: null,
    specs: '24GB GDDR6 | FSR 3 | Ray Tracing | 355W TDP',
    description: 'La flagship de AMD. Con 24GB de memoria GDDR6 y FSR 3 Frame Generation, esta GPU domina en 4K y hasta 8K. Ideal para creadores y gamers exigentes.',
    stock: 4, badge: 'new', rating: 4.7, reviews: 423,
    img: 'https://m.media-amazon.com/images/I/717ap63hzdL._AC_UF894,1000_QL80_.jpg',
    specs_table: { 'Stream Processors': '6144', 'VRAM': '24GB GDDR6 384-bit', 'Game Clock': '2300 MHz', 'TDP': '355W', 'Outputs': '2x DP 2.1, 2x HDMI 2.1', 'FSR': '3.1 (Frame Gen)', 'Infinity Cache': '96MB', 'Longitud': '~287mm' }
  },

  // AUDIO
  {
    id: 14, category: 'audio', brand: 'Sony', name: 'WH-1000XM5',
    price: 349.99, oldPrice: 399.99,
    specs: 'ANC Premium | 30h batería | LDAC | Hi-Res Audio',
    description: 'La mejor cancelación de ruido del mercado según múltiples análisis independientes. Con 8 micrófonos, procesador V1 dedicado y sonido Hi-Res Audio inalámbrico LDAC.',
    stock: 20, badge: 'sale', rating: 4.9, reviews: 3421,
    img: 'https://m.media-amazon.com/images/I/41H4752lpTL.jpg',
    specs_table: { 'ANC': 'Dual Noise Sensor Technology', 'Batería': '30h (con ANC)', 'Carga': '3 min = 3h (Quick Charge)', 'Códec': 'LDAC, AAC, SBC', 'Hi-Res': 'LDAC hasta 990kbps', 'Peso': '250g', 'Multi-device': 'Hasta 2 dispositivos', 'Micrófono': '8 micrófonos integrados' }
  },
  {
    id: 15, category: 'audio', brand: 'Apple', name: 'AirPods Pro 2 (USB-C)',
    price: 249.99, oldPrice: null,
    specs: 'ANC Adaptativa | Transparencia | H2 Chip | MagSafe',
    description: 'Los AirPods Pro de segunda generación con carga USB-C y chip H2. ANC adaptativa hasta 2x más poderosa que la generación anterior, con Audio Espacial Personalizado.',
    stock: 45, badge: 'new', rating: 4.8, reviews: 5678,
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=532&hei=582&fmt=jpeg&qlt=95&.v=1660803972361',
    specs_table: { 'Chip': 'H2 + U1', 'ANC': 'Activo Adaptativo + Transparencia', 'Batería': '6h (30h con estuche)', 'Carga': 'USB-C, MagSafe, Qi2', 'Audio': 'Espacial Personalizado + Dolby Atmos', 'Resistencia': 'IP54 auriculares + IP54 estuche', 'Compatibilidad': 'iOS/macOS/watchOS', 'Codecs': 'AAC, Custom Apple' }
  },
];

const TAX_RATE = 0.15; // 15% ISV Honduras
const SHIPPING_RATES = {
  standard: { label: 'Envío Estándar (5-7 días)', price: 9.99 },
  express: { label: 'Envío Express (1-2 días)', price: 24.99 },
  overnight: { label: 'Entrega Nocturna', price: 49.99 },
  free: { label: 'Envío Gratuito', price: 0 }
};
const FREE_SHIPPING_THRESHOLD = 299;

/* ============================================================
   CART STATE
   ============================================================ */
let cart = JSON.parse(localStorage.getItem('nexus_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('nexus_wishlist') || '[]');
let currentFilter = 'all';
let currentSort = 'featured';
let searchQuery = '';
let checkoutStep = 1;
let selectedShipping = 'standard';
let selectedPayment = 'card';
let lastOrderId = null;
let analyticsEvents = JSON.parse(localStorage.getItem('nexus_events') || '[]');

/* ============================================================
   ANALYTICS — basic event tracking
   ============================================================ */
function trackEvent(event, data = {}) {
  const entry = {
    event,
    data,
    timestamp: new Date().toISOString(),
    page: window.location.href
  };
  analyticsEvents.push(entry);
  if (analyticsEvents.length > 200) analyticsEvents = analyticsEvents.slice(-200);
  localStorage.setItem('nexus_events', JSON.stringify(analyticsEvents));
  console.log('[NEXUS Analytics]', event, data);
}

/* ============================================================
   CART FUNCTIONS
   ============================================================ */
function saveCart() {
  localStorage.setItem('nexus_cart', JSON.stringify(cart));
  updateCartUI();
}

function getCartItem(productId) {
  return cart.find(i => i.id === productId);
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || product.stock === 0) return;

  const existing = getCartItem(productId);
  if (existing) {
    const newQty = existing.qty + qty;
    if (newQty > product.stock) {
      showToast(`Solo hay ${product.stock} unidades disponibles`, 'warning');
      return;
    }
    existing.qty = newQty;
  } else {
    cart.push({ id: productId, qty });
  }

  saveCart();
  trackEvent('add_to_cart', { product_id: productId, product_name: product.name, price: product.price, qty });
  showToast(`<strong>${product.name}</strong> añadido al carrito`, 'success');
  animateCartIcon();
}

function removeFromCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  if (product) trackEvent('remove_from_cart', { product_id: productId });
}

function updateCartQty(productId, newQty) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }
  if (newQty > product.stock) {
    showToast(`Stock máximo: ${product.stock}`, 'warning');
    return;
  }
  const item = getCartItem(productId);
  if (item) { item.qty = newQty; saveCart(); }
}

function clearCart() {
  cart = [];
  saveCart();
}

function getCartTotals() {
  const subtotal = cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_RATES[selectedShipping].price;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shippingCost + tax;
  return { subtotal, shipping: shippingCost, tax, total, itemCount: cart.reduce((s, i) => s + i.qty, 0) };
}

/* ============================================================
   WISHLIST
   ============================================================ */
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Eliminado de favoritos', 'info');
  } else {
    wishlist.push(productId);
    showToast('Añadido a favoritos ♥', 'info');
    trackEvent('add_to_wishlist', { product_id: productId });
  }
  localStorage.setItem('nexus_wishlist', JSON.stringify(wishlist));
  document.querySelectorAll(`.btn-wish[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', wishlist.includes(productId));
  });
}

/* ============================================================
   UI — Cart Offcanvas
   ============================================================ */
function updateCartUI() {
  const totals = getCartTotals();

  // Update badge
  const badge = document.getElementById('cartCount');
  if (badge) {
    badge.textContent = totals.itemCount;
    badge.style.display = totals.itemCount > 0 ? 'inline-flex' : 'none';
  }

  // Update offcanvas content
  const cartItemsEl = document.getElementById('cartItems');
  const cartEmptyEl = document.getElementById('cartEmpty');
  const cartFooterEl = document.getElementById('cartFooter');

  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartEmptyEl.style.display = 'block';
    cartItemsEl.innerHTML = '';
    cartFooterEl.style.display = 'none';
    return;
  }

  cartEmptyEl.style.display = 'none';
  cartFooterEl.style.display = 'block';

  cartItemsEl.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    const lineTotal = (p.price * item.qty).toFixed(2);
    return `
      <div class="cart-item" data-id="${p.id}">
        <div class="cart-item-img">
          <img src="${p.img}" alt="${p.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23111827%22 width=%22100%22 height=%22100%22/><text fill=%22%2300f5ff%22 font-size=%2240%22 x=%2250%22 y=%2260%22 text-anchor=%22middle%22>📦</text></svg>'">
        </div>
        <div style="flex:1; min-width:0;">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">$${p.price.toFixed(2)}</div>
          <div class="cart-item-qty">
            <button class="cart-qty-btn" onclick="updateCartQty(${p.id}, ${item.qty - 1})">−</button>
            <span class="cart-qty-val">${item.qty}</span>
            <button class="cart-qty-btn" onclick="updateCartQty(${p.id}, ${item.qty + 1})">+</button>
            <span style="margin-left:6px; font-family:'Share Tech Mono',monospace; font-size:0.78rem; color:var(--text-muted);">= $${lineTotal}</span>
          </div>
        </div>
        <button class="btn-remove-item" onclick="removeFromCart(${p.id})" title="Eliminar">✕</button>
      </div>
    `;
  }).join('');

  // Update summary
  const freeShip = totals.subtotal >= FREE_SHIPPING_THRESHOLD;
  document.getElementById('cartSubtotal').textContent = `$${totals.subtotal.toFixed(2)}`;
  document.getElementById('cartShipping').textContent = freeShip ? 'GRATIS' : `$${totals.shipping.toFixed(2)}`;
  document.getElementById('cartTax').textContent = `$${totals.tax.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `$${totals.total.toFixed(2)}`;

  if (freeShip) {
    document.getElementById('cartShipping').style.color = 'var(--success)';
  }
}

function animateCartIcon() {
  const btn = document.getElementById('cartBtn');
  if (btn) {
    btn.style.transform = 'scale(1.3)';
    btn.style.color = 'var(--cyan)';
    setTimeout(() => { btn.style.transform = ''; btn.style.color = ''; }, 300);
  }
}

/* ============================================================
   UI — Products Rendering
   ============================================================ */
function getFilteredProducts() {
  let products = [...PRODUCTS];

  if (currentFilter !== 'all') {
    products = products.filter(p => p.category === currentFilter);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.specs.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  switch (currentSort) {
    case 'price-asc': products.sort((a, b) => a.price - b.price); break;
    case 'price-desc': products.sort((a, b) => b.price - a.price); break;
    case 'rating': products.sort((a, b) => b.rating - a.rating); break;
    case 'name': products.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'sale': products = products.filter(p => p.oldPrice).concat(products.filter(p => !p.oldPrice)); break;
  }

  return products;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('productsCount');
  if (!grid) return;

  const products = getFilteredProducts();
  if (countEl) countEl.textContent = `${products.length} producto${products.length !== 1 ? 's' : ''}`;

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <div style="font-size:3rem; opacity:0.3;">🔍</div>
        <p style="font-family:'Orbitron',sans-serif; font-size:0.85rem; color:var(--text-muted); margin-top:1rem;">
          No se encontraron productos
        </p>
        <button class="btn-neon mt-3" onclick="resetFilters()">Limpiar filtros</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map(p => renderProductCard(p)).join('');
}

function renderProductCard(p) {
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const stockClass = p.stock === 0 ? 'stock-out' : p.stock <= 5 ? 'stock-low' : 'stock-ok';
  const stockText = p.stock === 0 ? '✕ Sin stock' : p.stock <= 5 ? `⚠ Solo ${p.stock} disponibles` : `✓ En stock (${p.stock})`;
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
  const inWish = wishlist.includes(p.id);
  const badgeHTML = p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge === 'sale' ? `-${discount}%` : p.badge.toUpperCase()}</span>` : '';

  return `
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4">
      <div class="product-card h-100">
        <div class="product-img-wrap">
          ${badgeHTML}
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect fill=%22%23111827%22 width=%22200%22 height=%22200%22/><text fill=%22%2300f5ff%22 font-size=%2260%22 x=%22100%22 y=%22115%22 text-anchor=%22middle%22>💻</text></svg>'">
          <button class="btn-wish ${inWish ? 'active' : ''}" data-id="${p.id}" onclick="toggleWishlist(${p.id})" title="${inWish ? 'Quitar de favoritos' : 'Añadir a favoritos'}">♥</button>
          <button class="btn-quickview" onclick="openProductDetail(${p.id})">Vista rápida</button>
        </div>
        <div class="product-body">
          <div class="product-brand">${p.brand}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-specs">${p.specs}</div>
          <div style="margin-bottom:0.5rem;">
            <span class="stars-rating">${stars}</span>
            <span class="rating-count">(${p.reviews.toLocaleString()})</span>
          </div>
          <div class="product-price-wrap">
            <span class="product-price">$${p.price.toFixed(2)}</span>
            ${p.oldPrice ? `<span class="product-price-old">$${p.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <div class="product-stock ${stockClass} mb-3" style="font-family:'Share Tech Mono',monospace; font-size:0.75rem;">${stockText}</div>
          <button class="btn-add-cart" onclick="addToCart(${p.id})" ${p.stock === 0 ? 'disabled' : ''}>
            <span>${p.stock === 0 ? 'Sin Stock' : '+ Añadir al Carrito'}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function resetFilters() {
  currentFilter = 'all';
  currentSort = 'featured';
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('sortSelect').value = 'featured';
  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
  document.querySelector('.category-card[data-cat="all"]').classList.add('active');
  renderProducts();
}

/* ============================================================
   UI — Product Detail Modal
   ============================================================ */
function openProductDetail(productId) {
  const p = PRODUCTS.find(pr => pr.id === productId);
  if (!p) return;

  trackEvent('view_item', { product_id: productId, product_name: p.name });

  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');

  document.getElementById('modalProductTitle').textContent = p.name;
  document.getElementById('modalBody').innerHTML = `
    <div class="row g-4">
      <div class="col-md-5">
        <div class="detail-img-wrap">
          <img src="${p.img}" alt="${p.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 300%22><rect fill=%22%23111827%22 width=%22300%22 height=%22300%22/><text fill=%22%2300f5ff%22 font-size=%2280%22 x=%22150%22 y=%22170%22 text-anchor=%22middle%22>📦</text></svg>'">
        </div>
        ${p.badge === 'sale' ? `<div class="text-center mt-2"><span class="product-badge badge-sale" style="position:static; display:inline-block;">AHORRA ${discount}%</span></div>` : ''}
      </div>
      <div class="col-md-7">
        <div class="product-brand mb-1">${p.brand}</div>
        <h4 style="font-family:'Orbitron',sans-serif; font-size:1rem; color:var(--white); margin-bottom:0.5rem;">${p.name}</h4>
        <div class="mb-2">
          <span class="stars-rating">${stars}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()} reseñas)</span>
        </div>
        <div class="product-price-wrap mb-3">
          <span class="product-price" style="font-size:1.8rem;">$${p.price.toFixed(2)}</span>
          ${p.oldPrice ? `<span class="product-price-old" style="font-size:1.1rem;">$${p.oldPrice.toFixed(2)}</span>` : ''}
        </div>
        <p style="font-size:0.9rem; color:var(--text); line-height:1.7; margin-bottom:1.25rem;">${p.description}</p>
        
        <table class="spec-table mb-3">
          ${Object.entries(p.specs_table).map(([k,v]) => `
            <tr><td>${k}</td><td>${v}</td></tr>
          `).join('')}
        </table>

        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="d-flex align-items-center gap-2">
            <button class="qty-btn" onclick="modalQtyChange(-1)">−</button>
            <input type="number" class="qty-input" id="modalQty" value="1" min="1" max="${p.stock}" ${p.stock === 0 ? 'disabled' : ''}>
            <button class="qty-btn" onclick="modalQtyChange(1, ${p.stock})">+</button>
          </div>
          <span class="product-stock ${p.stock === 0 ? 'stock-out' : p.stock <= 5 ? 'stock-low' : 'stock-ok'}" style="font-family:'Share Tech Mono',monospace; font-size:0.78rem;">
            ${p.stock === 0 ? '✕ Sin stock' : p.stock <= 5 ? `⚠ Solo ${p.stock} uds.` : `✓ ${p.stock} en stock`}
          </span>
        </div>
        
        <div class="d-flex gap-2 flex-wrap">
          <button class="btn-neon flex-grow-1" onclick="addToCartFromModal(${p.id})" ${p.stock === 0 ? 'disabled style="opacity:0.5;"' : ''}>
            + Añadir al Carrito
          </button>
          <button class="btn-neon-magenta btn-neon" onclick="toggleWishlist(${p.id})" style="width:44px; padding:10px;">♥</button>
        </div>
      </div>
    </div>
  `;

  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}

function modalQtyChange(delta, max = 99) {
  const input = document.getElementById('modalQty');
  if (!input) return;
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > max) val = max;
  input.value = val;
}

function addToCartFromModal(productId) {
  const qty = parseInt(document.getElementById('modalQty')?.value || 1);
  addToCart(productId, qty);
}

/* ============================================================
   CHECKOUT
   ============================================================ */
function goToCheckout() {
  if (cart.length === 0) {
    showToast('El carrito está vacío', 'warning');
    return;
  }
  // Close cart offcanvas
  const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas'));
  if (offcanvas) offcanvas.hide();

  document.getElementById('shopSection').style.display = 'none';
  document.getElementById('checkoutSection').style.display = 'block';
  document.getElementById('confirmationSection').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  checkoutStep = 1;
  renderCheckout();
  trackEvent('begin_checkout', { cart_value: getCartTotals().total, items: cart.length });
}

function renderCheckout() {
  updateSteps();
  renderOrderSummary();

  // Show/hide panels
  document.getElementById('panelCustomer').style.display = checkoutStep === 1 ? 'block' : 'none';
  document.getElementById('panelPayment').style.display = checkoutStep === 2 ? 'block' : 'none';
  document.getElementById('panelReview').style.display = checkoutStep === 3 ? 'block' : 'none';
}

function updateSteps() {
  for (let i = 1; i <= 3; i++) {
    const el = document.querySelector(`.step[data-step="${i}"]`);
    if (!el) continue;
    el.classList.remove('active', 'done');
    if (i < checkoutStep) el.classList.add('done');
    else if (i === checkoutStep) el.classList.add('active');
  }
}

function renderOrderSummary() {
  const totals = getCartTotals();
  const freeShip = totals.subtotal >= FREE_SHIPPING_THRESHOLD;

  const itemsEl = document.getElementById('summaryItems');
  if (itemsEl) {
    itemsEl.innerHTML = cart.map(item => {
      const p = PRODUCTS.find(pr => pr.id === item.id);
      if (!p) return '';
      return `
        <div class="summary-item">
          <div class="summary-item-img"><img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'"></div>
          <div class="summary-item-name">${p.name} <span style="color:var(--text-muted);">x${item.qty}</span></div>
          <div class="summary-item-price">$${(p.price * item.qty).toFixed(2)}</div>
        </div>
      `;
    }).join('');
  }

  const shippingLabel = freeShip ? 'GRATIS' : `$${totals.shipping.toFixed(2)}`;
  setEl('summarySubtotal', `$${totals.subtotal.toFixed(2)}`);
  setEl('summaryShipping', shippingLabel);
  setEl('summaryTax', `$${totals.tax.toFixed(2)}`);
  setEl('summaryTotal', `$${totals.total.toFixed(2)}`);
}

function setEl(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function nextStep() {
  if (checkoutStep === 1) {
    if (!validateCustomerForm()) return;
  } else if (checkoutStep === 2) {
    if (!validatePaymentForm()) return;
  }
  if (checkoutStep < 3) {
    checkoutStep++;
    renderCheckout();
    if (checkoutStep === 3) renderReview();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function prevStep() {
  if (checkoutStep > 1) {
    checkoutStep--;
    renderCheckout();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function validateCustomerForm() {
  let valid = true;
  const fields = [
    { id: 'firstName', min: 2, label: 'Nombre' },
    { id: 'lastName', min: 2, label: 'Apellido' },
    { id: 'email', type: 'email', label: 'Email' },
    { id: 'phone', min: 8, label: 'Teléfono' },
    { id: 'address', min: 10, label: 'Dirección' },
    { id: 'city', min: 2, label: 'Ciudad' },
    { id: 'postalCode', min: 4, label: 'Código Postal' },
  ];

  fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (!el) return;
    el.classList.remove('is-invalid', 'is-valid');
    let ok = false;
    if (f.type === 'email') {
      ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
    } else {
      ok = el.value.trim().length >= (f.min || 1);
    }
    if (!ok) { el.classList.add('is-invalid'); valid = false; }
    else el.classList.add('is-valid');
  });

  if (!valid) showToast('Por favor, completa todos los campos correctamente', 'error');
  return valid;
}

function validatePaymentForm() {
  if (selectedPayment === 'card') {
    const fields = [
      { id: 'cardNumber', pattern: /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/ },
      { id: 'cardName', pattern: /^[A-Za-z\s]{3,}$/ },
      { id: 'cardExpiry', pattern: /^\d{2}\/\d{2}$/ },
      { id: 'cardCVV', pattern: /^\d{3,4}$/ },
    ];
    let valid = true;
    fields.forEach(f => {
      const el = document.getElementById(f.id);
      if (!el) return;
      el.classList.remove('is-invalid', 'is-valid');
      if (!f.pattern.test(el.value.trim())) {
        el.classList.add('is-invalid'); valid = false;
      } else el.classList.add('is-valid');
    });
    if (!valid) { showToast('Verifica los datos de tu tarjeta', 'error'); return false; }
  }
  return true;
}

function renderReview() {
  const getData = (id) => document.getElementById(id)?.value || '';
  const reviewEl = document.getElementById('reviewContent');
  if (!reviewEl) return;

  const paymentLabels = {
    card: '💳 Tarjeta de Crédito/Débito',
    paypal: '🅿 PayPal',
    transfer: '🏦 Transferencia Bancaria',
    crypto: '₿ Criptomoneda'
  };

  const totals = getCartTotals();
  const freeShip = totals.subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipLabel = freeShip ? 'Gratis' : SHIPPING_RATES[selectedShipping].label;

  reviewEl.innerHTML = `
    <div class="row g-3">
      <div class="col-md-6">
        <h6 style="font-family:'Orbitron',sans-serif; font-size:0.8rem; color:var(--cyan); margin-bottom:1rem;">DATOS DEL CLIENTE</h6>
        <p style="font-size:0.9rem; line-height:2;">
          <strong>${getData('firstName')} ${getData('lastName')}</strong><br>
          ${getData('email')}<br>
          ${getData('phone')}<br>
          ${getData('address')}, ${getData('city')}<br>
          ${getData('state') ? getData('state') + ', ' : ''}${getData('postalCode')}<br>
          ${getData('country')}
        </p>
      </div>
      <div class="col-md-6">
        <h6 style="font-family:'Orbitron',sans-serif; font-size:0.8rem; color:var(--cyan); margin-bottom:1rem;">MÉTODO DE PAGO</h6>
        <p style="font-size:0.9rem; line-height:2;">
          ${paymentLabels[selectedPayment] || selectedPayment}<br>
          ${selectedPayment === 'card' ? `Tarjeta terminada en ****${getData('cardNumber').slice(-4)}` : 'Pago procesado al confirmar'}
        </p>
        <h6 style="font-family:'Orbitron',sans-serif; font-size:0.8rem; color:var(--cyan); margin:1rem 0 0.5rem;">ENVÍO</h6>
        <p style="font-size:0.9rem;">${shipLabel}</p>
      </div>
    </div>
  `;
}

function placeOrder() {
  const btn = document.getElementById('placeOrderBtn');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-cyber" style="width:20px;height:20px;border-width:2px;display:inline-block;margin-right:8px;vertical-align:middle;"></span>PROCESANDO...';
  }

  setTimeout(() => {
    lastOrderId = 'NX-' + Date.now().toString(36).toUpperCase();
    const totals = getCartTotals();

    trackEvent('purchase', {
      order_id: lastOrderId,
      value: totals.total,
      tax: totals.tax,
      shipping: totals.shipping,
      items: cart.map(i => ({ id: i.id, qty: i.qty }))
    });

    // Save order to LocalStorage
    const orders = JSON.parse(localStorage.getItem('nexus_orders') || '[]');
    orders.push({
      id: lastOrderId,
      date: new Date().toISOString(),
      items: [...cart],
      totals,
      customer: {
        name: document.getElementById('firstName')?.value + ' ' + document.getElementById('lastName')?.value,
        email: document.getElementById('email')?.value
      }
    });
    localStorage.setItem('nexus_orders', JSON.stringify(orders));

    clearCart();
    showConfirmation(lastOrderId, totals);
  }, 2000);
}

function showConfirmation(orderId, totals) {
  document.getElementById('shopSection').style.display = 'none';
  document.getElementById('checkoutSection').style.display = 'none';
  document.getElementById('confirmationSection').style.display = 'block';

  const el = document.getElementById('confirmOrderId');
  if (el) el.textContent = orderId;

  const totalEl = document.getElementById('confirmTotal');
  if (totalEl) totalEl.textContent = `$${totals.total.toFixed(2)}`;

  const emailEl = document.getElementById('confirmEmail');
  const emailInput = document.getElementById('email');
  if (emailEl && emailInput) emailEl.textContent = emailInput.value;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function continueShopping() {
  document.getElementById('shopSection').style.display = 'block';
  document.getElementById('checkoutSection').style.display = 'none';
  document.getElementById('confirmationSection').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   UI — TOAST NOTIFICATIONS
   ============================================================ */
let toastTimer;
function showToast(message, type = 'info') {
  const existing = document.querySelector('.nexus-toast');
  if (existing) existing.remove();
  clearTimeout(toastTimer);

  const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `nexus-toast toast-${type}`;
  toast.innerHTML = `<span style="font-size:1.1rem;">${icons[type]}</span> <span>${message}</span>`;
  document.body.appendChild(toast);

  toastTimer = setTimeout(() => {
    toast.style.animation = 'slideInToast 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ============================================================
   NEWSLETTER / LEAD CAPTURE
   ============================================================ */
function subscribeNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('Ingresa un email válido', 'error');
    return;
  }
  const leads = JSON.parse(localStorage.getItem('nexus_leads') || '[]');
  if (leads.includes(email)) {
    showToast('Ya estás suscrito 👾', 'info');
    return;
  }
  leads.push(email);
  localStorage.setItem('nexus_leads', JSON.stringify(leads));
  trackEvent('newsletter_signup', { email });
  showToast('¡Suscripción exitosa! Te enviaremos las mejores ofertas 🚀', 'success');
  document.getElementById('newsletterEmail').value = '';
}

function submitContact(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const msg = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !msg) {
    showToast('Por favor, completa todos los campos', 'error');
    return;
  }
  trackEvent('contact_form_submit', { name, email });
  showToast('¡Mensaje enviado! Te responderemos en menos de 24h ✓', 'success');
  e.target.reset();
}

/* ============================================================
   INIT & EVENT LISTENERS
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderProducts();
  updateCartUI();

  // Category filter
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      currentFilter = card.dataset.cat;
      document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      renderProducts();
      trackEvent('filter_category', { category: currentFilter });
      document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    let debounce;
    searchInput.addEventListener('input', e => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        searchQuery = e.target.value;
        renderProducts();
        if (searchQuery) trackEvent('search', { query: searchQuery });
      }, 300);
    });
  }

  // Sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', e => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Shipping change
  document.querySelectorAll('input[name="shipping"]').forEach(el => {
    el.addEventListener('change', e => {
      selectedShipping = e.target.value;
      renderOrderSummary();
    });
  });

  // Payment options
  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => {
      selectedPayment = opt.dataset.payment;
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('.payment-radio').checked = true;
      // Show/hide card form
      const cardForm = document.getElementById('cardForm');
      if (cardForm) cardForm.style.display = selectedPayment === 'card' ? 'block' : 'none';
    });
  });

  // Card number formatting
  const cardNumberInput = document.getElementById('cardNumber');
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', e => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 16);
      e.target.value = v.replace(/(\d{4})(?=\d)/g, '$1 ');
    });
  }

  // Card expiry formatting
  const expiryInput = document.getElementById('cardExpiry');
  if (expiryInput) {
    expiryInput.addEventListener('input', e => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 4);
      if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
      e.target.value = v;
    });
  }

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNavbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // Hero CTA
  document.getElementById('heroShopBtn')?.addEventListener('click', () => {
    document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
    trackEvent('cta_hero_shop');
  });

  // Track page view
  trackEvent('page_view', { page: 'home' });

  // Animate numbers in hero stats
  animateCounters();

  console.log('[NEXUS] Store initialized. Cart items:', cart.length);
});

function animateCounters() {
  document.querySelectorAll('.count-up').forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString() + (el.dataset.suffix || '');
    }, 16);
  });
}
