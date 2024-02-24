const decrementar = document.getElementById("decrementar");
decrementar.addEventListener('click', () =>{
    const inputCantidad = document.getElementById('cantidad');
    const valorActual = parseInt(inputCantidad.value, 10);
    
    if (valorActual > 1) {
        inputCantidad.value = valorActual - 1;
    }
})

 const crementar = document.getElementById("crementar");
crementar.addEventListener("click", ()=>{
    const inputCantidad = document.getElementById('cantidad');
    inputCantidad.value = parseInt(inputCantidad.value, 10) + 1;
})