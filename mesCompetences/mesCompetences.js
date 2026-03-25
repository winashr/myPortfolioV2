document.addEventListener('DOMContentLoaded', function() {
    // ========== THEME TOGGLE ==========
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            if (newTheme === 'dark') {
                html.removeAttribute('data-theme');
            } else {
                html.setAttribute('data-theme', newTheme);
            }

            localStorage.setItem('portfolio-theme', newTheme);
        });
    }

    // ========== TABS FUNCTIONALITY ==========
    const tabBtns = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.section-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;

            // Remove active class from all tabs and sections
            tabBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked tab and corresponding section
            btn.classList.add('active');
            document.getElementById(`${tabId}-section`).classList.add('active');
        });
    });

    // ========== 3D TITLE EFFECT ==========
    const name3d = document.getElementById('name3d');
    if (name3d) {
        document.addEventListener('mousemove', (e) => {
            const rect = name3d.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) / 30;
            const deltaY = (e.clientY - centerY) / 30;

            const rotateX = Math.max(-15, Math.min(15, -deltaY));
            const rotateY = Math.max(-15, Math.min(15, deltaX));

            name3d.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    }

    // ========== PARTICLE CANVAS ==========
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function getParticleColor() {
            const style = getComputedStyle(document.documentElement);
            return style.getPropertyValue('--particle-color').trim() || '0, 212, 255';
        }

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                const color = getParticleColor();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
            for (let i = 0; i < Math.min(particleCount, 100); i++) {
                particles.push(new Particle());
            }
        }

        function connectParticles() {
            const color = getParticleColor();
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        const opacity = (1 - distance / 120) * 0.15;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${color}, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            connectParticles();
            requestAnimationFrame(animate);
        }

        resizeCanvas();
        initParticles();
        animate();

        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });
    }

    // ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
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

    // Observe competence blocks
    document.querySelectorAll('.competence-block, .stack-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});
