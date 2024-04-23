// Función para abrir una carta
function abrirCarta(idCarta) {
    var carta = document.getElementById(idCarta);
    carta.style.display = "block";
}

// Función para cerrar una carta
function cerrarCarta(idCarta) {
    var carta = document.getElementById(idCarta);
    carta.style.display = "none";
}

// Event listener para los botones de abrir carta
document.querySelectorAll('.abrir-carta').forEach(button => {
    button.addEventListener('click', function() {
        var idCarta = this.getAttribute('data-carta');
        abrirCarta(idCarta);
    });
});

// Función para activar o desactivar un cupón
function toggleCupon(cupon) {
    // Verificar si el cupón está desactivado
    if (cupon.classList.contains("desactivado")) {
        // Si está desactivado, no hacer nada
        return;
    }

    // Verificar si el cupón está activado
    if (cupon.classList.contains("activo")) {
        // Si está activado, desactivarlo
        desactivarCupon(cupon);
    } else {
        // Si no está activado, activarlo
        activarCupon(cupon);
    }
}

// Función para activar un cupón
function activarCupon(cupon) {
    cupon.classList.add("activo");
    // Agregar aquí el contenido del cupón activado
    cupon.innerHTML = `
        <p class="titulo">ALERTA</p>
        <div class="contenido">
            <p>¡Estas segura que quieres utilizar este cupón?.</p>
        </div>`;
}

// Función para desactivar un cupón
function desactivarCupon(cupon) {
    cupon.classList.remove("activo");
    cupon.innerHTML = `
        <p class="titulo">Cupón</p>
        <div class="contenido">
            <p>Este cupón ya ha sido utilizado.</p>
        </div>`;
    // Agregar clase "desactivado" para evitar futuros clics
    cupon.classList.add("desactivado");
}
