document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.thank-you-card');
    card.classList.add('animate__animated', 'animate__fadeIn');
    
    const buttons = document.querySelectorAll('.btn, .social-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    const websiteButtons = document.querySelectorAll('.website-type-btn');
    const subscriptionPlans = document.querySelector('.subscription-plans');
    const planOptions = document.querySelectorAll('.plan-option');

    // Hide subscription plans by default
    subscriptionPlans.style.display = 'none';
    planOptions.forEach(plan => plan.style.display = 'none');

    websiteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            websiteButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const selectedPlan = this.getAttribute('data-plan');
            
            // Show subscription plans container
            subscriptionPlans.style.display = 'block';
            
            // Show only the plan that matches the selected website type
            planOptions.forEach(plan => {
                plan.style.display = plan.id === `plan-${selectedPlan}` ? 'block' : 'none';
            });
        });
    });

    // Add smooth reveal animation for plan options
    planOptions.forEach(plan => {
        plan.addEventListener('show', () => {
            plan.classList.add('animate__animated', 'animate__fadeInUp');
        });
    });

    // Add pulse animation to important message
    const importantMessage = document.querySelector('.important-message');
    setTimeout(() => {
        importantMessage.classList.add('animate__animated', 'animate__pulse');
    }, 1000);

    // Update hover effect for buttons to not override gradients
    const allButtons = document.querySelectorAll('.btn, .website-type-btn');
    allButtons.forEach(button => {
        if (!button.classList.contains('btn-premium') && 
            !button.classList.contains('btn-professional') && 
            !button.classList.contains('btn-basic')) {
            button.addEventListener('mouseenter', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                button.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.background = '';
            });
        }
    });
});
