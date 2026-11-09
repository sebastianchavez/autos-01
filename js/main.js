const PRODUCTS = [
    { id: 1, name: 'Tesla Model S', price: 89900000, category: 'Lujo', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=600', description: 'Sedán eléctrico de alto rendimiento con autonomía líder en su clase.' },
    { id: 2, name: 'Porsche 911 Carrera', price: 114000000, category: 'Deportivos', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600', description: 'El ícono del rendimiento deportivo con ingeniería alemana.' },
    { id: 3, name: 'BMW X5 M', price: 105000000, category: 'SUV', image: 'https://images.unsplash.com/photo-1555215695-3004980aa520?auto=format&fit=crop&q=80&w=600', description: 'Potencia y versatilidad en un SUV de lujo para toda la familia.' },
    { id: 4, name: 'Audi RS e-tron GT', price: 140000000, category: 'Lujo', image: 'https://images.unsplash.com/photo-1614200179316-6677697c4285?auto=format&fit=crop&q=80&w=600', description: 'La fusión perfecta entre sostenibilidad y diseño vanguardista.' },
    { id: 5, name: 'Mercedes AMG G63', price: 179000000, category: 'SUV', image: 'https://images.unsplash.com/photo-1520031441872-265f473f6775?auto=format&fit=crop&q=80&w=600', description: 'El todoterreno más lujoso y potente del mundo.' },
    { id: 6, name: 'Lamborghini Huracán', price: 210000000, category: 'Deportivos', image: 'https://images.unsplash.com/photo-1544636331-0f967764287a?auto=format&fit=crop&q=80&w=600', description: 'Velocidad pura y diseño agresivo para los más exigentes.' },
    { id: 7, name: 'Range Rover Vogue', price: 125000000, category: 'SUV', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600', description: 'Lujo absoluto sin importar el terreno que recorras.' },
    { id: 8, name: 'Ferrari SF90', price: 500000000, category: 'Deportivos', image: 'https://images.unsplash.com/photo-1592198084033-a99d7a6372e7?auto=format&fit=crop&q=80&w=600', description: 'Híbrido enchufable que redefine la superdeportividad.' },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        countElement.textContent = total;
    }
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Simple toast notification
    showToast(`¡${product.name} añadido al carrito!`);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-5 right-5 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-bounce';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function renderTrendingProducts() {
    const container = document.getElementById('trending-products');
    if (!container) return;

    const trending = PRODUCTS.slice(0, 4);
    container.innerHTML = trending.map(p => `
        <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 group">
            <div class="relative overflow-hidden rounded-xl mb-4">
                <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                <span class="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">${p.category}</span>
            </div>
            <h3 class="font-bold text-lg mb-2">${p.name}</h3>
            <div class="flex justify-between items-center">
                <span class="text-blue-600 font-bold text-xl">$${p.price.toLocaleString('es-CL')}</span>
                <button onclick="addToCart(${p.id})" class="bg-gray-100 hover:bg-blue-600 hover:text-white p-2 rounded-lg transition-colors">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderTrendingProducts();
});
