// Variables del menú
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

// Menú hamburguesa
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Cerrar menú al hacer scroll
window.addEventListener('scroll', () => {
    if (navLinks.classList.contains('active')) {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Interactividad
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Cerrar todas las respuestas abiertas
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Si el ítem clickeado no estaba activo, abrirlo
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Funcionalidad del Modal
const modal = document.getElementById('cotizacionModal');
const btns = document.querySelectorAll('[href*="wa.me"]');
const closeBtn = document.querySelector('.close-modal');
const form = document.getElementById('cotizacionForm');

// Abrir modal en vez de ir directo a WhatsApp
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Si el botón tiene un data-plan, seleccionar ese plan
        const planBtn = e.target.closest('[data-plan]');
        if (planBtn) {
            document.getElementById('plan').value = planBtn.dataset.plan;
        }
    });
});

// Cerrar modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Manejar envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const plan = document.getElementById('plan').value;
    const dominio = document.getElementById('dominio').value;
    const nombreSitio = document.getElementById('nombreSitio').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Construir mensaje para WhatsApp
    const text = `¡Hola! Me interesa una cotización.%0A%0A` +
                `Nombre: ${nombre}%0A` +
                `Plan Seleccionado: ${plan}%0A` +
                `Dominio Deseado: ${nombreSitio}${dominio}%0A` +
                `${mensaje ? `Mensaje: ${mensaje}%0A` : ''}`;
    
    // Redirigir a WhatsApp
    window.location.href = `https://wa.me/56966083139?text=${text}`;
});

// Modal de Email
const emailModal = document.getElementById('emailModal');
const emailBtn = document.querySelector('a[href^="mailto"]');
const emailForm = document.getElementById('emailForm');

// Abrir modal de email en vez de mailto
emailBtn.addEventListener('click', (e) => {
    e.preventDefault();
    emailModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Cerrar modal de email
emailModal.querySelector('.close-modal').addEventListener('click', () => {
    emailModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target === emailModal) {
        emailModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Manejar envío del formulario de email
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('emailNombre').value;
    const plan = document.getElementById('emailPlan').value;
    const dominio = document.getElementById('emailDominio').value;
    const nombreSitio = document.getElementById('emailNombreSitio').value;
    const mensaje = document.getElementById('emailMensaje').value;
    
    // Construir el cuerpo del correo
    const mailtoLink = `mailto:chilecreaweb@gmail.com` +
                      `?subject=${encodeURIComponent('Solicitud de Cotización Web')}` +
                      `&body=${encodeURIComponent(
                          `Nombre: ${nombre}\n` +
                          `Plan Seleccionado: ${plan}\n` +
                          `Dominio Deseado: ${nombreSitio}${dominio}\n` +
                          `${mensaje ? `\nMensaje:\n${mensaje}` : ''}`
                      )}`;
    
    // Abrir el cliente de correo predeterminado
    window.location.href = mailtoLink;
    
    // Cerrar el modal después de enviar
    emailModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});