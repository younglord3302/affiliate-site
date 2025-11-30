// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add fade-in animation to sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections except hero
document.querySelectorAll('section:not(.hero)').forEach(section => {
    observer.observe(section);
});

// Form submission handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all fields.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // In a real application, you would send this data to a server
    alert('Thank you for your message! This is a demo site - in production, this would send an email.');

    // Reset form
    this.reset();
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add click tracking for affiliate links (for analytics)
    const affiliateLinks = document.querySelectorAll('.affiliate-link');
    affiliateLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // In production, you might want to track clicks here
            console.log('Affiliate link clicked:', this.href);
        });
    });
});

// Simple scroll-based header styling
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
