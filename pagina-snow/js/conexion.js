const muestraProductos = (productos) => {
        const container = document.getElementById('product');
        const cards = productos.map(p => {`
                    <div class="card-productos">
                        <a href="producto.html">
                        <div class="contenedor-img">
                            <img src="${p.imagen}" alt="">
                        </div>
                            <p class="nombre-producto">${p.nombre}</p>
                            <p class="precio-producto">${p.precio}</p>
                        </a> 
                        <div class="centrar-btn">
                            <a href="producto.html" class="btn-product">Añadir al carrito</a>
                        </div>
                    </div>`;
        }).join('');
        
        // Puedes verificar que se están cargando correctamente en la consola
        container.innerHTML = cards;
    };

    const muestraTablas = (productos) => {
        const container = document.getElementById('tabla');
        const cards = productos.map(p => {
            if (p.categoria === 'tabla') {
                //Centrar imgagenes tablas snow
                return `
                    <div class="card-productos">
                        <a href="producto.html">
                        <div class="contenedor-img">
                          <img src="${p.imagen}" alt="">
                        </div>
                            <p class="nombre-producto">${p.nombre}</p>
                            <p class="precio-producto">${p.precio}</p>
                        </a> 
                        <div class="centrar-btn">
                            <a href="producto.html" class="btn-product">Añadir al carrito</a>
                        </div>
                    </div>`;
            }}).join('');
            
        
        // Puedes verificar que se están cargando correctamente en la consola
        container.innerHTML = cards;
    };

    const muestraFijadores = (productos) => {
        const container = document.getElementById('fijadores');
        const cards = productos.map(p => {
            if (p.categoria === 'fijadores') {
                //Centrar imgagenes tablas snow
                return `
                    <div class="card-productos">
                        <a href="producto.html">
                          <div class="contenedor-img">
                            <img src="${p.imagen}" alt="">
                          </div>
                            <p class="nombre-producto">${p.nombre}</p>
                            <p class="precio-producto">${p.precio}</p>
                        </a> 
                        <div class="centrar-btn">
                            <a href="producto.html" class="btn-product">Añadir al carrito</a>
                        </div>
                    </div>`;
            }}).join('');
            
        
        // Puedes verificar que se están cargando correctamente en la consola
        container.innerHTML = cards;
    };

    const muestraGafas = (productos) => {
        const container = document.getElementById('gafas');
        const cards = productos.map(p => {
            if (p.categoria === 'gafas') {
                //Centrar imgagenes tablas snow
                return `
                    <div class="card-productos">
                        <a href="producto.html">
                        <div class="contenedor-img">
                            <img src="${p.imagen}" alt="">
                        </div>
                            <p class="nombre-producto">${p.nombre}</p>
                            <p class="precio-producto">${p.precio}</p>
                        </a> 
                        <div class="centrar-btn">
                            <a href="producto.html" class="btn-product">Añadir al carrito</a>
                        </div>
                    </div>`;
            }}).join('');
            
        
        // Puedes verificar que se están cargando correctamente en la consola
        container.innerHTML = cards;
    };

    const muestraCasco = (productos) => {
        const container = document.getElementById('casco');
        const cards = productos.map(p => {
            if (p.categoria === 'casco') {
                //Centrar imgagenes tablas snow
                return `
                    <div class="card-productos">
                        <a href="producto.html">
                        <div class="contenedor-img">
                            <img src="${p.imagen}" alt="">
                        </div>
                            <p class="nombre-producto">${p.nombre}</p>
                            <p class="precio-producto">${p.precio}</p>
                        </a> 
                        <div class="centrar-btn">
                            <a href="producto.html" class="btn-product">Añadir al carrito</a>
                        </div>
                    </div>`;
            }}).join('');
            
        
        // Puedes verificar que se están cargando correctamente en la consola
        container.innerHTML = cards;
    };

    fetch('./js/productos.json')
    .then(respuesta => respuesta.json())
    .then(muestraProductos)
    .catch(error => console.log(error));

    fetch('./js/productos.json')
        .then(respuesta => respuesta.json())
        .then(muestraGafas)
        .catch(error => console.log(error));
    
    fetch('./js/productos.json')
        .then(respuesta => respuesta.json())
        .then(muestraFijadores)
        .catch(error => console.log(error));

    fetch('./js/productos.json')
        .then(respuesta => respuesta.json())
        .then(muestraTablas)
        .catch(error => console.log(error));
        
    fetch('./js/productos.json')
        .then(respuesta => respuesta.json())
        .then(muestraCasco)
        .catch(error => console.log(error));
    
