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

let carrito = [];
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;

    // Actualizar la interfaz del carrito
    mostrarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    const producto = carrito[index];
    total -= producto.precio;
    carrito.splice(index, 1);

    // Actualizar la interfaz del carrito
    mostrarCarrito();
}

// Función para vaciar el carrito por completo
function vaciarCarrito() {
    carrito = [];
    total = 0;

    // Actualizar la interfaz del carrito
    mostrarCarrito();
}

// Función para mostrar el carrito en la interfaz
function mostrarCarrito() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');

    cartItems.innerHTML = '';
    carrito.forEach((producto, index) => {
        const item = document.createElement('div');
        item.innerHTML = `
            <p>${producto.nombre} - $${producto.precio.toFixed(2)} <button onclick="eliminarDelCarrito(${index})">Eliminar</button></p>
        `;
        cartItems.appendChild(item);
    });

    totalAmount.textContent = total.toFixed(2);
}

// Esperar a que se cargue el DOM antes de agregar event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Agregar event listeners a los botones de agregar al carrito
    const botonesAgregar = document.querySelectorAll(".agregar-carrito");
    botonesAgregar.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            const nombre = boton.getAttribute("data-nombre");
            const precio = parseFloat(boton.getAttribute("data-precio"));
            agregarAlCarrito(nombre, precio);
        });
    });

    // Agregar event listener al botón de vaciar carrito
    const vaciarBoton = document.getElementById('vaciar-carrito');
    if (vaciarBoton) {
        vaciarBoton.addEventListener('click', vaciarCarrito);
    }

    // Mostrar el carrito al cargar la página
    mostrarCarrito();
});
