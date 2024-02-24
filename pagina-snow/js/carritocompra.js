function obtenerIdDelProductoDesdeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    // Modificar esto y obtener el id con un split

    return urlParams.get('id');
    guardarProductos( urlParams.get('id'));
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
            const productoCarrito = productos.find(p => p.id === idDelProducto);
            console.log('Producto encontrado:', productoCarrito);
            console.log("color " + productoCarrito.color);
            
            if (productoCarrito) {
                // Aquí puedes mostrar los detalles del producto encontrado en tu HTML
                document.getElementById('product-cesta').innerHTML = `


                <article class="articulos">
                <div class="card-cesta">
                    <div class="img">
                        <img src="${productoCarrito.imagen}" alt="">
                    </div>
                    <div class="descripcion-articulo">
                        <p class="descrip-articulo" id="descripcion-articulo">${productoCarrito.nombre}</p>
                        <div class="${productoCarrito.color}"></div>
                        <div>
                            <p class="precio-articulo">${productoCarrito.precio}</p>
                        </div>
                    </div>
                    <div clasS="iconos-cesta">
                        <div class="crementar">
                            <button id="decrementar">-</button>
                            <input class="input-cant" size="2" type="text" id="cantidad" value="1" min="1">
                            <button id="crementar">+</button>
                        </div>
                        <i class="bi bi-suit-heart-fill"></i>
                        <i class="bi bi-trash3"></i>
                    </div>
                </div>                    
            </article>          

                `;
                
            } else {
                console.error('Producto no encontrado.');
            }
        })
        .catch(error => console.log(error));
}
//Guardamos los id en un array para luego acceder a ellos en localstorage
const arrayId = [];
function guardarProductos() {
    idProducto = parseInt(obtenerIdDelProductoDesdeURL(), 10);
    arrayId.push(idProducto); //Añadimos los productos al array
    
    //Añadimos nuestro array al localStorage
    localStorage.setItem('carritoCompra', arrayId);
    console.log("localstorage: " + arrayId + ", ");
}

function leerLocalStorage() {
    guardarProductos;
    localStorage.getItem('carritoCompra');

}




window.onload = cargarDetallesDelProducto;