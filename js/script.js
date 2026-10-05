function conmutarImagen(idImagen, botonActual) {
            // Buscamos la imagen específica usando el ID que le pasamos al botón
            const imagen = document.getElementById(idImagen);

            // Si está oculta, la mostramos y cambiamos el texto del botón
            if (imagen.style.display === 'none' || imagen.style.display === '') {
                imagen.style.display = 'block';
                botonActual.textContent = 'Ocultar Certificación';
            } else {
                // Si ya se estaba viendo, la ocultamos de nuevo
                imagen.style.display = 'none';
                botonActual.textContent = 'Ver Certificación';
            }
        }
