// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.getElementById('nav');

if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Handle dropdowns on mobile
    const dropdownToggles = nav.querySelectorAll('.nav-dropdown > .nav-link');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                const dropdown = toggle.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });
}

// Language Selector
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const langSelector = document.querySelector('.language-selector');

if (langBtn && langSelector) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target)) {
            langSelector.classList.remove('active');
        }
    });

    // Language selection
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.getAttribute('data-lang');
            
            // Update active state
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Update button
            const flag = option.textContent.split(' ')[0];
            const code = lang.toUpperCase();
            langBtn.querySelector('.lang-flag').textContent = flag;
            langBtn.querySelector('.lang-code').textContent = code;
            
            // Set language and translate page
            if (typeof setLanguage === 'function') {
                setLanguage(lang);
            } else if (typeof translatePage === 'function') {
                translatePage(lang);
            } else {
                localStorage.setItem('preferredLanguage', lang);
            }
            
            // Close dropdown
            langSelector.classList.remove('active');
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Booking form handling
const bookingForms = document.querySelectorAll('.booking-form form');
bookingForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your backend
        console.log('Booking submitted:', data);
        
        // Show success message (you can customize this)
        alert('Votre demande de réservation a été envoyée avec succès ! Nous vous contacterons sous peu.');
        form.reset();
    });
});

// Product form handling
const productForms = document.querySelectorAll('.product-form form');
productForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Product inquiry submitted:', data);
        
        alert('Votre demande d\'information a été envoyée avec succès ! Notre équipe vous contactera rapidement.');
        form.reset();
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('SeaZen website loaded');
    
    // Add fade-in animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('.feature-card, .about-content, .number-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

