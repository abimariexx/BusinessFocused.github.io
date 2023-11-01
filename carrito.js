let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;

    // Actualizar la interfaz del carrito
    mostrarCarrito();
}

function eliminarDelCarrito(index) {
    const producto = carrito[index];
    total -= producto.precio;
    carrito.splice(index, 1);

    // Actualizar la interfaz del carrito
    mostrarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    total = 0;

    // Actualizar la interfaz del carrito
    mostrarCarrito();
}

function mostrarCarrito() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');

    cartItems.innerHTML = '';
    carrito.forEach((producto, index) => {
        const item = document.createElement('div');
        item.innerHTML = `
            <p>${producto.nombre} - $${producto.precio} <button onclick="eliminarDelCarrito(${index})">Eliminar</button></p>
        `;
        cartItems.appendChild(item);
    });

    totalAmount.textContent = total.toFixed(2);
}
