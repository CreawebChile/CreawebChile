document.addEventListener('DOMContentLoaded', function() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    
    // Load popup HTML
    fetch('/anuncio/pop.html')
        .then(response => response.text())
        .then(html => {
            // Add overlay and popup to body
            document.body.appendChild(overlay);
            document.body.insertAdjacentHTML('beforeend', html);
            
            const popup = document.getElementById('instagramPopup');
            const closeBtn = document.getElementById('closePopup');
            
            // Close popup function
            const closePopup = () => {
                popup.style.opacity = '0';
                overlay.style.opacity = '0';
                setTimeout(() => {
                    popup.remove();
                    overlay.remove();
                }, 300);
            };
            
            // Close on button click
            closeBtn.addEventListener('click', closePopup);
            
            // Close on overlay click
            overlay.addEventListener('click', closePopup);
            
            // Auto close after 3 seconds
            setTimeout(closePopup, 3000);
        });
});
