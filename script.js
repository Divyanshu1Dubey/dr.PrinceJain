/* ============================================
   Dr. Prince Jain - Portfolio JavaScript
   Premium Interactions & Animations
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initPreloader();
    initCustomCursor();
    initNavigation();
    initParticles();
    initTypingEffect();
    initCounterAnimation();
    initAOS();
    initSmoothScroll();
    initBackToTop();
    initContactForm();
    initScrollReveal();
    initPublicationsModal();
});

/* ============================================
   Publications Modal
   ============================================ */
function initPublicationsModal() {
    // Close modal on clicking outside
    const modal = document.getElementById('publicationsModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePublicationsModal();
            }
        });
        
        // Close modal on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closePublicationsModal();
            }
        });
    }
}

function openPublicationsModal() {
    const modal = document.getElementById('publicationsModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePublicationsModal() {
    const modal = document.getElementById('publicationsModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

/* ============================================
   Preloader
   ============================================ */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('loaded');
            document.body.style.overflow = 'visible';
        }, 1500);
    });
}

/* ============================================
   Custom Cursor
   ============================================ */
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (window.innerWidth <= 992) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor animation
    function animateCursor() {
        // Main cursor - follows instantly
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Follower - follows with delay
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Cursor effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-toggle, .research-card, .skill-item, .timeline-content, .about-card, .profile-link, .publisher-item, .contact-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');
        });
        
        el.addEventListener('mouseleave', function() {
            cursor.classList.remove('active');
            cursorFollower.classList.remove('active');
        });
    });
}

/* ============================================
   Navigation
   ============================================ */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'visible';
    });
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        });
    });
    
    // Update active nav link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 200;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

/* ============================================
   Particles.js Configuration
   ============================================ */
function initParticles() {
    if (typeof particlesJS === 'undefined') return;
    
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#667eea', '#764ba2', '#f093fb', '#4facfe']
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#667eea',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    });
}

/* ============================================
   Typing Effect
   ============================================ */
function initTypingEffect() {
    // Image typing text (below image) - All designations and expertise
    const imageTypingText = document.querySelector('#image-typing-text');
    if (imageTypingText) {
        const imageTexts = [
            'IoT & Biomedical Signal Processing',
            'Machine Learning Researcher',
            'Metamaterial Expert',
            'UGC-NET JRF Qualified',
            'Visvesvaraya Ph.D. Fellow',
            'Academic Editor - PLOS ONE',
            'Academic Editor - Hindawi',
            '100+ SCI/Scopus Publications'
        ];
        
        let imgTextIndex = 0;
        let imgCharIndex = 0;
        let imgIsDeleting = false;
        
        function typeImage() {
            const currentText = imageTexts[imgTextIndex];
            
            if (imgIsDeleting) {
                imageTypingText.textContent = currentText.substring(0, imgCharIndex - 1);
                imgCharIndex--;
            } else {
                imageTypingText.textContent = currentText.substring(0, imgCharIndex + 1);
                imgCharIndex++;
            }
            
            let speed = imgIsDeleting ? 40 : 80;
            
            if (!imgIsDeleting && imgCharIndex === currentText.length) {
                speed = 2500;
                imgIsDeleting = true;
            } else if (imgIsDeleting && imgCharIndex === 0) {
                imgIsDeleting = false;
                imgTextIndex = (imgTextIndex + 1) % imageTexts.length;
                speed = 400;
            }
            
            setTimeout(typeImage, speed);
        }
        typeImage();
    }
}

/* ============================================
   Legacy Typing Support (keeping for compatibility)
   ============================================ */
function initTypingEffectLegacy() {
    const typingText = document.querySelector('#typing-text-legacy');
    if (!typingText) return;
    
    const texts = [
        'Top 2% Scientists Worldwide (Elsevier-Stanford)',
        'Assistant Professor (Research Cadre)',
        'Editor - PLOS ONE',
        'Editor - Journal of Electrical and Computer Engineering',
       'Editor - International Journal of Antennas and Propagation',
       'Editor - Discover Applied Sciences',
        'Editor - Scientific Reports',
        'Visvesvaraya Ph.D. Fellow',
        'UGC-NET JRF Qualified'
        'GATE Qualified'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing after a delay
    setTimeout(type, 2000);
}

/* ============================================
   Counter Animation
   ============================================ */
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, stepTime);
    }
}

/* ============================================
   AOS (Animate On Scroll) Initialization
   ============================================ */
function initAOS() {
    if (typeof AOS === 'undefined') return;
    
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 100
    });
}

/* ============================================
   Smooth Scroll
   ============================================ */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/* ============================================
   Back to Top Button
   ============================================ */
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ============================================
   Contact Form
   ============================================ */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Create mailto link
        const subject = encodeURIComponent(data.subject);
        const body = encodeURIComponent(
            `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
        );
        
        const mailtoLink = `mailto:princeece48@gmail.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Email client opened! Please send the email.', 'success');
        
        // Reset form
        form.reset();
    });
}

/* ============================================
   Notification System
   ============================================ */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 20px 30px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#333'};
        color: white;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.5s ease;
        display: flex;
        align-items: center;
        gap: 15px;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100px);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .notification-content i {
        font-size: 1.5rem;
    }
`;
document.head.appendChild(notificationStyles);

/* ============================================
   Scroll Reveal Animation
   ============================================ */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => observer.observe(el));
}

/* ============================================
   Parallax Effect
   ============================================ */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-parallax') || 0.5;
            const yPos = -(scrollY * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
}

/* ============================================
   Magnetic Effect for Buttons
   ============================================ */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    if (window.innerWidth <= 992) return;
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', function() {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

/* ============================================
   Image Tilt Effect
   ============================================ */
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('.hero-image-wrapper, .about-img-wrapper');
    
    if (window.innerWidth <= 992) return;
    
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        el.addEventListener('mouseleave', function() {
            el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

/* ============================================
   Initialize Additional Effects
   ============================================ */
window.addEventListener('load', function() {
    initMagneticButtons();
    initTiltEffect();
});

/* ============================================
   Performance Optimization - Debounce
   ============================================ */
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

/* ============================================
   Easter Egg - Konami Code
   ============================================ */
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
    
    showNotification('🎉 You found the Easter Egg! 🎉', 'success');
}

/* ============================================
   Console Welcome Message
   ============================================ */
console.log('%c Welcome to Dr. Prince Jain\'s Portfolio! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 15px; border-radius: 10px;');
console.log('%c Built with ❤️ ', 'font-size: 14px; padding: 5px;');

    // Image Modal Slideshow State
    let currentImages = [];
    let currentIndex = 0;

    // Image Modal Functions
    function openImageModal(imageSrcOrArray, title, description, category) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalCategory = document.getElementById('modalCategory');
        const modalCounter = document.getElementById('modalCounter');

        // Support both single image (string) and multiple images (array)
        if (Array.isArray(imageSrcOrArray)) {
            currentImages = imageSrcOrArray;
        } else {
            currentImages = [imageSrcOrArray];
        }
        currentIndex = 0;

        modalImage.src = currentImages[currentIndex];
        modalTitle.textContent = title || '';
        modalDescription.textContent = description || '';
        modalCategory.textContent = category || '';

        if (currentImages.length > 1) {
            modalCounter.textContent = (currentIndex + 1) + ' / ' + currentImages.length;
        } else {
            modalCounter.textContent = '';
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeImageModal() {
        const modal = document.getElementById('imageModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function showImageAt(index) {
        if (!currentImages.length) return;

        const modalImage = document.getElementById('modalImage');
        const modalCounter = document.getElementById('modalCounter');

        // wrap around (e.g., from last to first)
        currentIndex = (index + currentImages.length) % currentImages.length;

        modalImage.src = currentImages[currentIndex];

        if (currentImages.length > 1) {
            modalCounter.textContent = (currentIndex + 1) + ' / ' + currentImages.length;
        } else {
            modalCounter.textContent = '';
        }
    }

    function nextImage(event) {
        if (event) event.stopPropagation();
        showImageAt(currentIndex + 1);
    }

    function prevImage(event) {
        if (event) event.stopPropagation();
        showImageAt(currentIndex - 1);
    }

    // Close modal on outside click
    document.getElementById('imageModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeImageModal();
        }
    });

    // Close modal / navigate with keyboard
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('imageModal');
        if (!modal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeImageModal();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    });

