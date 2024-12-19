// Variables del menú
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

// Menú hamburguesa
if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
}

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link) {
        link.addEventListener('click', () => {
            menuBtn?.classList.remove('active');
            navLinks?.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }
});

// Cerrar menú al hacer scroll
window.addEventListener('scroll', () => {
    if (navLinks?.classList.contains('active')) {
        menuBtn?.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Verificar que el targetId no sea solo '#'
            if (targetId && targetId !== '#') {
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
            }
        });
    }
});

// FAQ Interactividad
document.querySelectorAll('.faq-question').forEach(question => {
    if (question) {
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
    }
});

// Funcionalidad del Modal de Cotización
const modal = document.getElementById('cotizacionModal');
// Modificar el selector para excluir los botones del portafolio
const cotizarBtns = document.querySelectorAll('.price-card .btn-outline, [href*="wa.me"]');
const closeBtn = document.querySelector('.close-modal');
const form = document.getElementById('cotizacionForm');

// Abrir modal al hacer clic en botones de cotización
cotizarBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const planText = btn.closest('.price-card')?.querySelector('h3')?.textContent || '';
        const modal = document.getElementById('cotizacionModal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Si encontramos un plan, lo seleccionamos en el formulario
            const planSelect = document.getElementById('plan');
            if (planSelect && planText) {
                const options = Array.from(planSelect.options);
                const option = options.find(opt => opt.text.includes(planText));
                if (option) {
                    planSelect.value = option.value;
                }
            }
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

// Manejar envío del formulario con formato mejorado
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const plan = document.getElementById('plan').value;
    const dominio = document.getElementById('dominio').value;
    const nombreSitio = document.getElementById('nombreSitio').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validación básica
    if (!nombre || !nombreSitio) {
        alert('Por favor, complete todos los campos requeridos');
        return;
    }

    // Formato mejorado del mensaje
    const text = 
`¡Hola! Me interesa una cotización para mi sitio web.

*Información del Cliente*
━━━━━━━━━━━━━━━━━━━━━
👤 *Nombre:* ${nombre}
🎯 *Plan Seleccionado:* ${plan}
🌐 *Dominio Deseado:* ${nombreSitio}${dominio}

${mensaje ? `*Mensaje Adicional:*
━━━━━━━━━━━━━━━━━━━━━
${mensaje}

` : ''}¡Gracias por su atención! Espero su respuesta.`;

    // Codificar el mensaje para URL
    const encodedText = encodeURIComponent(text);
    
    // Redireccionar a WhatsApp
    window.location.href = `https://wa.me/56966083139?text=${encodedText}`;
});

// Modal de Email
const emailModal = document.getElementById('emailModal');
const emailBtn = document.querySelector('a[href^="mailto"]');
const emailForm = document.getElementById('emailForm');

// Abrir modal de email en vez de mailto
if (emailBtn && emailModal) {
    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        emailModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Cerrar modal de email
    const emailCloseBtn = emailModal.querySelector('.close-modal');
    if (emailCloseBtn) {
        emailCloseBtn.addEventListener('click', () => {
            emailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === emailModal) {
            emailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Manejar envío del formulario de email
if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('emailNombre')?.value || '';
        const plan = document.getElementById('emailPlan')?.value || '';
        const dominio = document.getElementById('emailDominio')?.value || '';
        const nombreSitio = document.getElementById('emailNombreSitio')?.value || '';
        const mensaje = document.getElementById('emailMensaje')?.value || '';
        
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
}