// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon between bars and times
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

// Scroll Reveal Animation (Fade In)
const fadeElements = document.querySelectorAll('.fade-in');

const revealElements = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealElements);
// Trigger once on load
revealElements();


// Number Counter Animation for Stats Section
const counters = document.querySelectorAll('.counter');
const statsSection = document.getElementById('stats');
let hasCounted = false;

const startCounters = () => {
    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100 && !hasCounted) {
        hasCounted = true;
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps approx
            
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCounter();
        });
    }
};

window.addEventListener('scroll', startCounters);
startCounters();

// Form Submission Simulation
const leadForm = document.getElementById('leadForm');

if(leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = leadForm.querySelector('.btn-submit');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        btn.style.opacity = '0.7';
        btn.style.cursor = 'not-allowed';
        
        // Simulate network request
        setTimeout(() => {
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
            btn.style.background = '#27c93f';
            btn.style.boxShadow = '0 4px 15px rgba(39, 201, 63, 0.4)';
            
            leadForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.boxShadow = '';
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
            }, 3000);
            
        }, 1500);
    });
}
