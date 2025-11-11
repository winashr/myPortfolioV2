document.addEventListener('DOMContentLoaded', () => {
    const btnScolaire = document.getElementById('btn-scolaire');
    const btnPro = document.getElementById('btn-pro');
    const btnBts = document.getElementById('btn-bts');
    const timeline = document.getElementById('timeline');

    const parcoursData = {
        scolaire: [
            { titre: "BTS SIO (1ère & 2ème années)", date: "2024 - 2026", desc: "Spécialisation en développement web et cybersécurité." },
            { titre: "Licence Sciences de l'ingénieur - Sorbonne UPMC", date: "2023 - 2024", desc: "Étude de mathématiques, mécanique, électronique et informatique." },
            { titre: "Lycée Général Jean-Baptiste Corot", date: "2020 - 2023", desc: "Baccalauréat spécialité mathématiques & physique-chimie, mention Assez Bien." }
        ],
        professionnel: [
            { titre: "Stage - HSM Immo (Développeur Web)", date: "Mai 2025", desc: "Participation au développement d’une application en React/TypeScript." },
            { titre: "Employé Polyvalent - McDonald’s", date: "Juin 2024", desc: "Polyvalence et gestion d’équipe dans la restauration rapide." },
            { titre: "Réceptionniste - Kyriad Direct", date: "Juin 2023", desc: "Accueil, communication bilingue, gestion des services informatiques pour les réservations." },
            { titre: "Bénévole - Maison de quartier", date: "Juin 2022", desc: "Aide aux devoirs et activités ludiques pour les enfants." }
        ],
        bts: [
            { 
                titre: "Le BTS SIO (Services Informatiques aux Organisations)", 
                date: "", 
                desc: "Le BTS SIO forme des techniciens capables de concevoir, déployer et maintenir des solutions informatiques au sein des entreprises. Il se déroule sur deux ans et prépare à la fois au monde professionnel et à la poursuite d’études." 
            },
            { 
                titre: "Option SISR (Solutions d’Infrastructure, Systèmes et Réseaux)", 
                date: "", 
                desc: "Cette spécialité est centrée sur l’administration des systèmes et réseaux. Elle prépare aux métiers liés à la cybersécurité, la maintenance, la virtualisation, et la gestion d’infrastructures réseau." 
            },
            { 
                titre: "Option SLAM (Solutions Logicielles et Applications Métiers)", 
                date: "", 
                desc: "Cette spécialité forme des développeurs capables de créer des applications web, mobiles ou logicielles adaptées aux besoins des entreprises, en maîtrisant les langages de programmation, bases de données et frameworks modernes." 
            }
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
                ${item.date ? `<span>${item.date}</span>` : ''}
                <p>${item.desc}</p>
            `;
            timeline.appendChild(div);
        });

        window.scrollTo({ top: timeline.offsetTop, behavior: 'smooth' });
    }

    btnScolaire.addEventListener('click', () => afficherTimeline('scolaire'));
    btnPro.addEventListener('click', () => afficherTimeline('professionnel'));
    btnBts.addEventListener('click', () => afficherTimeline('bts'));

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
