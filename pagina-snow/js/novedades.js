const muestraProductos = (productos) => {
    const container = document.getElementById('product');
    const cards = productos.map(p => {
        `
        <div class="card-productos">
            <a href="producto.html">
                <div class="contenedor-img">
                    <img src="${p.imagen}" alt="">
                </div>
                <p class="nombre-producto">${p.nombre}</p>
                <p class="precio-producto">${p.precio}€</p>
            </a>     
            <div class="centrar-btn">
                <a href="carritoCompra.html" class="btn-product">Añadir al carrito</a>
            </div>
        </div>`;
    }).join('');
    
    // Puedes verificar que se están cargando correctamente en la consola
    container.innerHTML = cards;
};

// Novedades
fetch('./js/productos.json')
    .then(respuesta => respuesta.json())
    .then(productos => {
        const filtroNovedades = productos.filter(p=> p.novedad === true);
        muestraProductos(filtroNovedades);
    })
    .catch(error => console.log(error));