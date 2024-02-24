const filtros = {
    precio: 200,
    categoria: 'Todos',
    color: 'Todos'
};

const mostrarProductos = (productos) => {
    const container = document.getElementById('product');
    const cards = productos.map(p => {
        return `
            <div class="card-productos">
                <a href="producto.html?id=${p.id}">
                <div class="contenedor-img">
                  <img src="${p.imagen}" alt="">
                </div>
                    <p class="nombre-producto">${p.nombre}</p>
                    <p class="precio-producto">${p.precio}</p>
                </a> 
                <div class="centrar-btn">
                <a href="carritoCompra.html?id=${p.id}" class="btn-product">Añadir al carrito</a>
                </div>
            </div>`;
    }).join('');
    container.innerHTML = cards;
};

const filtrarProductos = () => {
    fetch('./js/productos.json')
        .then(respuesta => respuesta.json())
        .then(productos => {
            const productosFiltrados = productos.filter(p => {
                const cumplePrecio = !filtros.precio || p.precio <= filtros.precio;
                const cumpleCategoria = filtros.categoria === 'Todos' || p.categoria === filtros.categoria;
                console.log("filtro: " + filtros.categoria+ 'boolean ' + cumpleCategoria);
                const cumpleColor = filtros.color === 'Todos' || p.color === filtros.color;
                return cumplePrecio && cumpleCategoria && cumpleColor;
            });
            mostrarProductos(productosFiltrados);
        })
        .catch(error => console.log(error));
};

// Evento para el cambio en el filtro de precio
const filtroPrecio = document.querySelector('#preciofiltro');
filtroPrecio.addEventListener("input", () => {
    filtros.precio = parseInt(filtroPrecio.value);
    filtrarProductos();
});

// Evento para el cambio en el filtro de categoría
const arrayCategorias = document.getElementById('categorias');
arrayCategorias.addEventListener('change', () => {
    filtros.categoria = arrayCategorias.value;
    console.log("categoria: " + filtros.categoria);
    filtrarProductos();
});

// Evento para el clic en el filtro de color
const obtenerColores = document.getElementById('filtradoColor');
obtenerColores.addEventListener('click', (e) => {
    filtros.color = e.target.dataset.color;
    filtrarProductos();
});

//Buscador

const buscarProducto = () => {
    const inputBuscador = document.getElementById('buscador');
    const textoBusqueda = inputBuscador.value.toLowerCase();

    // Realizar la búsqueda en el archivo JSON (productos.json)
    fetch('./js/productos.json')
        .then(respuesta => respuesta.json())
        .then(productos => {
            const productosFiltrados = productos.filter(p => 
                {
                    const categoria = p.categoria.toLowerCase().includes(textoBusqueda);
                    const textoBuscar = p.nombre.toLowerCase().includes(textoBusqueda);
                    return textoBuscar || categoria;
                });
            mostrarProductos(productosFiltrados);
        })
        .catch(error => console.log(error));
};

const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', buscarProducto);

// Cargar todos los productos al inicio
filtrarProductos();