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

// Intro animation
window.addEventListener('load', () => {
    setTimeout(() => {
        const introOverlay = document.getElementById('introOverlay');
        if (introOverlay) {
            introOverlay.classList.add('hidden');
        }
    }, 3000);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Video card hover effects
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Play button functionality
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Placeholder for video playback
        alert('Funcionalidad de video - Aquí se reproduciría el video real');
    });
});

// CTA button functionality
document.querySelectorAll('.cta-btn, .contratar-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Scroll to contact section
        document.getElementById('contacto').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
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

// Observe elements for animation
document.querySelectorAll('.service-card, .video-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// WhatsApp button functionality
const whatsappBtn = document.querySelector('.whatsapp-btn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://wa.me/584243311814', '_blank');
    });
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add scroll reveal to sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    observer.observe(section);
});

// Counter animation for stats (if added)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-visual');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Video modal functionality
const videoModal = document.getElementById('videoModal');
const modalClose = document.getElementById('modalClose');
const videoContainer = document.getElementById('videoContainer');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

// Video content data
const videoData = {
    vertical1: {
        title: 'Reel Promocional',
        description: 'Formato vertical para Instagram con transiciones dinámicas y efectos visuales modernos.',
        type: 'vertical',
        src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' // Placeholder video
    },
    vertical2: {
        title: 'TikTok Viral',
        description: 'Contenido dinámico para TikTok con ritmo ágil y efectos de moda.',
        type: 'vertical',
        src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    vertical3: {
        title: 'YouTube Shorts',
        description: 'Formato corto para YouTube con subtítulos animados y música pegajosa.',
        type: 'vertical',
        src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    horizontal1: {
        title: 'Videoclip Musical',
        description: 'Producción musical profesional con sincronización perfecta y efectos visuales.',
        type: 'horizontal',
        src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    horizontal2: {
        title: 'Comercial Publicitario',
        description: 'Spot para redes sociales con llamada a la acción efectiva y branding impactante.',
        type: 'horizontal',
        src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    horizontal3: {
        title: 'Video Corporativo',
        description: 'Contenido para empresas con estilo profesional y mensaje claro.',
        type: 'horizontal',
        src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    }
};

// Function to open modal with video
function openModal(videoId) {
    const videoInfo = videoData[videoId];
    if (!videoInfo) return;

    // Set modal content
    modalTitle.textContent = videoInfo.title;
    modalDescription.textContent = videoInfo.description;
    
    // Create video element
    const video = document.createElement('video');
    video.src = videoInfo.src;
    video.controls = true;
    video.autoplay = true;
    video.loop = true;
    
    // Clear container and add video
    videoContainer.innerHTML = '';
    videoContainer.appendChild(video);
    videoContainer.className = `video-container ${videoInfo.type}`;
    
    // Show modal
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Stop and remove video
    const video = videoContainer.querySelector('video');
    if (video) {
        video.pause();
        video.src = '';
    }
    videoContainer.innerHTML = '';
}

// Event listeners for video cards and play buttons
document.querySelectorAll('.video-card, .play-btn').forEach(element => {
    element.addEventListener('click', function(e) {
        e.stopPropagation();
        const videoId = this.dataset.video || this.closest('[data-video]').dataset.video;
        if (videoId) {
            openModal(videoId);
        }
    });
});

// Close modal events
modalClose.addEventListener('click', closeModal);

videoModal.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeModal();
    }
});