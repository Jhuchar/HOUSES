// Función para animar el título cambiando su color
function animateTitle() {
    const title = document.getElementById("title");
    let hue = 0;

    // Cambia el color del título gradualmente
    setInterval(() => {
        title.style.color = `hsl(${hue}, 100%, 50%)`; // Cambia el color con base en el valor hue
        hue += 1; // Incrementa el hue para cambiar el color
        if (hue > 360) hue = 0; // Reinicia el hue cuando llega a 360
    }, 20); // Cambia el color cada 20 milisegundos
}

// Inicia la animación cuando se carga la página
window.onload = animateTitle;
