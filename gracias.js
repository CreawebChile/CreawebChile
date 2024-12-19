document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.thank-you-card');
    card.style.opacity = '0';
    
    setTimeout(() => {
        card.style.transition = 'opacity 1s ease-in-out';
        card.style.opacity = '1';
    }, 100);

    const buttons = document.querySelectorAll('.btn, .social-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
