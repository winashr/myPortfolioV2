document.addEventListener('DOMContentLoaded', function() {
    const projectsOverview = document.getElementById('projects-overview');
    const projectDetail = document.getElementById('project-detail');
    const backBtn = document.getElementById('back-btn');
    const projectCards = document.querySelectorAll('.project-card');

    const projectsData = {
        'hsm-immo': {
            title: 'HSM Immo',
            tech: ['React', 'TypeScript', 'Vite', 'PHP', 'PHPMailer', 'API REST', 'Responsive'],
            fullDescription: [
                'Développement d\'une application web moderne pour l\'agence immobilière HSM Immo. Le projet comprend une interface utilisateur intuitive en React avec TypeScript, et un backend robuste en PHP pour la gestion des données.',
                'L\'application intègre un système de contact sophistiqué utilisant PHPMailer pour l\'envoi et la réception d\'emails.'
            ],
            frontendFeatures: ['Interface moderne en React', 'Build optimisé avec Vite', 'Type-safety avec TypeScript', 'Design responsive'],
            backendFeatures: ['API REST en PHP', 'Emails via PHPMailer', 'Système de contact sécurisé', 'Validation des données'],
            links: [{text: 'Voir le projet', url: 'https://hsmimmo.com'}]
        },
        'immosync': {
            title: 'immoSync',
            tech: ['Java', 'JavaFX', 'Client lourd', 'En cours'],
            fullDescription: ['Application lourde pour la gestion complète de travaux immobiliers. Interface riche et dynamique avec JavaFX.'],
            frontendFeatures: ['Interface graphique moderne', 'Navigation fluide', 'Gestion des formulaires'],
            backendFeatures: ['Logique métier Java', 'Gestion de données locales', 'Projet en développement'],
            links: [{text: 'Voir le code source', url: 'https://github.com/ort-montreuil/BTS-SIO-G2-2026-GESTTRAVAUX-Java'}]
        },
        'travaux-symfony': {
            title: 'Gestion Travaux Web',
            tech: ['PHP', 'Symfony', 'MVC', 'Responsive'],
            fullDescription: ['Application web de gestion de travaux immobiliers, développée avec Symfony en architecture MVC.'],
            frontendFeatures: ['Templates Twig', 'Interface responsive', 'Navigation intuitive'],
            backendFeatures: ['Architecture MVC', 'Gestion des projets', 'Validation et sécurité des données'],
            links: [{text: 'Voir le code source', url: 'https://github.com/ort-montreuil/BTS-SIO-G2-2026-GESTTRAVAUX-Web'}]
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.dataset.project;
            showProjectDetail(projectId);
        });
    });

    backBtn.addEventListener('click', function() {
        showProjectsOverview();
    });

    function showProjectDetail(projectId) {
        const project = projectsData[projectId];
        if (!project) return;

        document.getElementById('detail-title').textContent = project.title;

        const techContainer = document.querySelector('.tech-badges-detail');
        techContainer.innerHTML = '';
        project.tech.forEach(t => {
            const span = document.createElement('span');
            span.className = 'tech-badge';
            span.textContent = t;
            techContainer.appendChild(span);
        });

        const descriptionContainer = document.querySelector('.description');
        descriptionContainer.innerHTML = '';
        project.fullDescription.forEach(p => {
            const para = document.createElement('p');
            para.textContent = p;
            descriptionContainer.appendChild(para);
        });

        const featuresGrid = document.querySelector('.features-grid');
        featuresGrid.innerHTML = '';
        const frontendDiv = document.createElement('div');
        frontendDiv.className = 'feature-section';
        frontendDiv.innerHTML = `<h3>Frontend</h3><ul>${project.frontendFeatures.map(f => `<li>${f}</li>`).join('')}</ul>`;
        const backendDiv = document.createElement('div');
        backendDiv.className = 'feature-section';
        backendDiv.innerHTML = `<h3>Backend</h3><ul>${project.backendFeatures.map(f => `<li>${f}</li>`).join('')}</ul>`;
        featuresGrid.appendChild(frontendDiv);
        featuresGrid.appendChild(backendDiv);

        const linksDiv = document.querySelector('.project-links');
        linksDiv.innerHTML = '';
        project.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.className = link.text.includes('Code') ? 'btn-secondary' : 'btn-primary';
            a.textContent = link.text;
            linksDiv.appendChild(a);
        });

        backBtn.classList.remove('hidden');
        projectsOverview.classList.add('hidden');
        projectDetail.classList.remove('hidden');
        projectDetail.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showProjectsOverview() {
        projectDetail.classList.remove('active');
        projectDetail.classList.add('hidden');
        projectsOverview.classList.remove('hidden');
        backBtn.classList.add('hidden');
    }

    /* ======== ANIMATION DES PARTICULES ======== */
    class Particle {
        constructor(canvas) {
            this.canvas = canvas;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = (Math.random() - 0.5) * 0.5;
            this.dy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            const colors = ['#60a5fa', '#a78bfa', '#f1f5f9'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        update() {
            if (this.x < 0 || this.x > this.canvas.width) this.dx *= -1;
            if (this.y < 0 || this.y > this.canvas.height) this.dy *= -1;
            this.x += this.dx;
            this.y += this.dy;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = Array.from({length: 120}, () => new Particle(canvas));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw(ctx);
        });
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
