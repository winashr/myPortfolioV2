document.addEventListener('DOMContentLoaded', () => {
    const btnScolaire = document.getElementById('btn-scolaire');
    const btnPro = document.getElementById('btn-pro');
    const timeline = document.getElementById('timeline');

    const parcoursData = {
        scolaire: [
            { titre: "BTS SIO (1ère & 2ème années)", date: "2024 - 2026", desc: "Spécialisation en développement web et cybersécurité." },
            { titre: "Licence Sciences de l'ingénieur-Sorbonne UPMC", date: "2023 - 2024", desc: "Etude de mathématiques, mécanique, électronique et de l'informatique." },
            { titre: "Lycée Général Jean-Baptiste Corot", date: "2020 - 2023", desc: "Baccalauréat spéacialité mathématique & physique-chimie mention Assez Bien." }
        ],
        professionnel: [
            { titre: "Stage-HSM Immo Développeur Web", date: "MAI 2025", desc: "Participation au développement d’une application en React/TypeScript." },
            { titre: "Employé polyvalent-McDonald", date: "JUIN 2024", desc: "Polyvalence et Gestion d’équipe au sein de d'une équipe dans la restauration rapide." },
            { titre: "Receptionniste-Kyriad Direct", date: "JUIN 2023", desc: "Polyvalence et Gestion d’équipe,communications bilingues, gestion des services informatiques pour les reservations." },
            { titre: "Bénévole-Maison de quartier", date: "JUIN 2022", desc: "Aide aux devoirs des enfants en difficulté dans n'importe quelle matière, Aide aux loisirs des enfants."}

        ]
    };

    function afficherTimeline(type) {
        timeline.innerHTML = '';
        timeline.classList.remove('hidden');

        const data = parcoursData[type];
        data.forEach((item, i) => {
            const div = document.createElement('div');
            div.classList.add('timeline-item');
            div.style.animationDelay = `${i * 0.15}s`;
            div.innerHTML = `
                <h3>${item.titre}</h3>
                <span>${item.date}</span>
                <p>${item.desc}</p>
            `;
            timeline.appendChild(div);
        });

        window.scrollTo({ top: timeline.offsetTop, behavior: 'smooth' });
    }

    btnScolaire.addEventListener('click', () => afficherTimeline('scolaire'));
    btnPro.addEventListener('click', () => afficherTimeline('professionnel'));

    /* ===== EFFET DE PARTICULES CYBER ===== */
    class Particle {
        constructor(canvas) {
            this.canvas = canvas;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = (Math.random() - 0.5) * 0.5;
            this.dy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 1.8 + 0.5;
            this.color = Math.random() > 0.5 ? '#00ffcc' : '#5b5fff';
        }
        update() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0 || this.x > this.canvas.width) this.dx *= -1;
            if (this.y < 0 || this.y > this.canvas.height) this.dy *= -1;
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

    const particles = Array.from({ length: 100 }, () => new Particle(canvas));

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
