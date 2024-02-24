function obtenerIdDelProductoDesdeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    // Modificar esto y obtener el id con un split
    return urlParams.get('id');
}


function cargarDetallesDelProducto() {
    // Realiza la lógica para cargar los detalles del producto con la ID proporcionada
    // Puedes utilizar un fetch o cargar desde un JSON local, similar a como lo hiciste antes.
    // const idDelProducto = obtenerIdDelProductoDesdeURL();
    const idDelProducto = parseInt(obtenerIdDelProductoDesdeURL(), 10);
    console.log(idDelProducto);

    fetch('./js/productos.json')
        .then(respuesta => respuesta.json())
        .then(productos => {
            console.log('Productos cargados:', productos);
            const productoEncontrado = productos.find(p => p.id === idDelProducto);
            console.log('Producto encontrado:', productoEncontrado);
            
            if (productoEncontrado) {
                // Aquí puedes mostrar los detalles del producto encontrado en tu HTML
                document.getElementById('datosProducto').innerHTML = `
                <section class="imagen-producto">
                    <div id="imagen-seccion" class="imagen-seccion">
                        <img src="${productoEncontrado.imagen2}" alt="">
                        <img src="${productoEncontrado.imagen3}" alt="">
                    </div>
                    <div id="imagen-principal" class="imagen-principal">
                        <img src="${productoEncontrado.imagen}" alt="">
                    </div>
                </section>
                <section class="descripcion-compra" >
                    <h1>${productoEncontrado.nombre}</h1>
                    <p class="descripcion-producto">${productoEncontrado.descripcion}</p>
                    <p class="precioProducto">${productoEncontrado.precio}€</p>
                    <div class="${productoEncontrado.color}"></div>
                    <div class="centrar-btn">
                        <a href="carritoCompra.html?id=${productoEncontrado.id}" class="btn-product">Añadir al carrito</a>
                    </div>
                    <p><i class="bi bi-truck"></i> Envío: 1 a 4 días laborables</p>
                </section>`;
                
            } else {
                console.error('Producto no encontrado.');
            }
        })
        .catch(error => console.log(error));
}



window.onload = cargarDetallesDelProducto;
