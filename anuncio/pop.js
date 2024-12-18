document.addEventListener('DOMContentLoaded', function() {
    // Crear el HTML del popup directamente
    const popupHTML = `
        <div class="popup-overlay" id="popupOverlay"></div>
        <div class="instagram-popup" id="instagramPopup">
            <div class="popup-content">
                <button class="close-popup" id="closePopup">&times;</button>
                <div class="popup-header">
                    <i class="fab fa-instagram"></i>
                    <h3>¡Somos Nuevos en Instagram!</h3>
                </div>
                <p>Síguenos y no te pierdas nuestras últimas actualizaciones y novedades</p>
                <a href="https://www.instagram.com/_creawebchile_/" target="_blank" class="instagram-btn">
                    <i class="fab fa-instagram"></i>
                    Seguir @_creawebchile_
                </a>
            </div>
        </div>
    `;

    // Insertar el HTML en el body
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Obtener referencias a los elementos después de insertarlos
    const popup = document.getElementById('instagramPopup');
    const overlay = document.getElementById('popupOverlay');
    const closeBtn = document.getElementById('closePopup');

    if (popup && overlay && closeBtn) {
        // Función para cerrar el popup
        const closePopup = () => {
            popup.style.opacity = '0';
            overlay.style.opacity = '0';
            setTimeout(() => {
                popup.remove();
                overlay.remove();
            }, 300);
        };

        // Event listeners
        closeBtn.addEventListener('click', closePopup);
        overlay.addEventListener('click', closePopup);

        // Auto cerrar después de 3 segundos
        setTimeout(closePopup, 3000);
    }
});
