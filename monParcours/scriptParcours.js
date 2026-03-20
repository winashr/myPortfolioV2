document.addEventListener('DOMContentLoaded', () => {
    // ========== THEME TOGGLE FUNCTIONALITY ==========
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      html.setAttribute('data-theme', savedTheme);
    }

    // Toggle theme on button click
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
            { titre: "Stage - HSM Immo 2ème année (Performance & SEO)", date: "Janvier 2026 - février 2026", desc: "Analyse via PageSpeed Insights et optimisation des performances/SEO (images, balises, temps de chargement)." },
            { titre: "Stage - HSM Immo (Développeur Web)", date: "Mai 2025 - juillet 2025", desc: "Participation au développement d’une application en React/TypeScript." },
            { titre: "Employé Polyvalent - McDonald’s", date: "Juin 2024 - aout 2024", desc: "Polyvalence et gestion d’équipe dans la restauration rapide." },
            { titre: "Réceptionniste - Kyriad Direct", date: "Juin 2023 - aout 2023", desc: "Accueil, communication bilingue, gestion des services informatiques pour les réservations." },
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

            let titreHtml = item.titre;
            if (item.titre.includes("HSM Immo")) {
                titreHtml += ` <button class="info-btn" data-swot="hsm-immo">i</button>`;
            }

            div.innerHTML = `
                <h3>${titreHtml}</h3>
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

    /* ===== MODAL LOGIC ===== */
    const modal = document.getElementById('swot-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = modal.querySelector('.close-btn');

    const swotData = {
        'hsm-immo': {
            title: 'Analyse SWOT - HSM Immo',
            content: `
                <h3>Analyse SWOT</h3>
                <div class="swot-section">
                    <div class="swot-category swot-forces">
                        <h4>Forces</h4>
                        <ul>
                            <li>Réactivité via les réseaux</li>
                            <li>Relation client personnalisée</li>
                            <li>Expertise sur les biens locaux</li>
                        </ul>
                    </div>
                    <div class="swot-category swot-faiblesses">
                        <h4>Faiblesses</h4>
                        <ul>
                            <li>Notoriété limitée</li>
                            <li>Polyvalence extrême du gérant</li>
                            <li>Dépendance (effectif réduit)</li>
                        </ul>
                    </div>
                    <div class="swot-category swot-opportunites">
                        <h4>Opportunités</h4>
                        <ul>
                            <li>Digitalisation (réseaux sociaux)</li>
                            <li>Spécialisation sur le marché</li>
                            <li>Partenariats avec des acteurs locaux</li>
                        </ul>
                    </div>
                    <div class="swot-category swot-menaces">
                        <h4>Menaces</h4>
                        <ul>
                            <li>Concurrence des grands réseaux</li>
                            <li>Réglementation complexe (PTZ, etc.)</li>
                            <li>Conjoncture économique (taux d'intérêt)</li>
                        </ul>
                    </div>
                </div>
                <div class="other-info">
                    <h3>Informations Complémentaires</h3>
                    <p><strong>Statut Juridique :</strong> Société à responsabilité limitée (SARL) spécialisée dans les transactions immobilières.</p>
                    <p><strong>Responsabilité RSE :</strong> En tant que petite structure, l'engagement RSE se concentre sur une approche éthique du métier, la transparence envers les clients et une faible empreinte carbone via la digitalisation des documents.</p>
                </div>
            `
        }
    };

    function fillSwotModal(type) {
        const data = swotData[type];
        if (!data) return;

        modalBody.innerHTML = `<h2>${data.title}</h2>` + data.content;
    }

    function openModal() {
        modal.classList.remove('hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    timeline.addEventListener('click', (e) => {
        if (e.target.classList.contains('info-btn')) {
            const swotType = e.target.dataset.swot;
            if (swotType) {
                fillSwotModal(swotType);
                openModal();
            }
        }
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});


// 3D name rotation based on mouse position (Mon Parcours)
(function() {
  const nameEl = document.getElementById('name3d');
  const container = document.querySelector('.container');
  if (!nameEl || !container) return;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    const rotY = dx * 12;
    const rotX = -dy * 12;
    const tz = 24;
    nameEl.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${tz}px)`;
    const glowX = Math.round(rotY * 0.6);
    const glowY = Math.round(rotX * 0.6);
    nameEl.style.textShadow = `${-glowX}px ${glowY}px 10px rgba(0,212,255,0.25), 0 6px 18px rgba(0,0,0,0.35)`;
  });

  container.addEventListener('mouseleave', () => {
    nameEl.style.transform = '';
    nameEl.style.textShadow = '';
  });
})();

// Idle animation + spins (Mon Parcours)
(function() {
  const nameEl = document.getElementById('name3d');
  const container = document.querySelector('.container');
  if (!nameEl || !container) return;

  let lastInteraction = Date.now();
  let isHovering = false;
  let spinning = false;
  let currentRotX = 0;
  let currentRotY = 0;
  let currentTz = 20;

  container.addEventListener('mousemove', () => { lastInteraction = Date.now(); isHovering = true; if (spinning) spinning = false; });
  container.addEventListener('mouseenter', () => { lastInteraction = Date.now(); isHovering = true; if (spinning) spinning = false; });
  container.addEventListener('mouseleave', () => { lastInteraction = Date.now(); isHovering = false; });

  function easeOutQuad(t) { return t * (2 - t); }

  function startSpin() {
    if (spinning) return;
    if ((Date.now() - lastInteraction) < 900 || isHovering) return scheduleNextSpin(1200);
    spinning = true;
    const duration = 1000 + Math.random() * 800;
    const startX = currentRotX;
    const startY = currentRotY;
    const startTz = currentTz;
    const start = performance.now();

    function spinFrame(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = easeOutQuad(p);
      const added = eased * 360;
      const rotY = startY + added;
      const rotX = startX + Math.sin(eased * Math.PI) * 8;
      const tz = startTz + Math.sin(eased * Math.PI) * 2;
      nameEl.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${tz}px)`;
      nameEl.style.transition = 'transform 0.14s linear';
      nameEl.style.textShadow = `${-rotY * 0.02}px ${rotX * 0.4}px 18px rgba(0,212,255,0.18), 0 10px 30px rgba(0,0,0,0.36)`;
      if (p < 1 && spinning) {
        requestAnimationFrame(spinFrame);
      } else {
        spinning = false;
        currentRotX = ((rotX + 180) % 360) - 180;
        currentRotY = ((rotY + 180) % 360) - 180;
        currentTz = tz;
        scheduleNextSpin();
      }
    }

    requestAnimationFrame(spinFrame);
  }

  let spinTimeout = null;
  function scheduleNextSpin(delay) {
    if (spinTimeout) clearTimeout(spinTimeout);
    const wait = typeof delay === 'number' ? delay : (5000 + Math.random() * 14000);
    spinTimeout = setTimeout(() => {
      startSpin();
    }, wait);
  }

  function idleStep(t) {
    const now = Date.now();
    const idle = (now - lastInteraction) > 1200;

    if (!isHovering && idle && !spinning) {
      const s = t / 1000;
      const rotY = Math.sin(s * 0.6) * 6;
      const rotX = Math.sin(s * 0.8) * 3;
      const tz = 20 + Math.sin(s * 0.7) * 1.5;
      nameEl.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${tz}px)`;
      nameEl.style.transition = 'transform 0.9s cubic-bezier(.22,.9,.28,1), text-shadow 0.6s ease';
      nameEl.style.textShadow = `${-rotY * 0.6}px ${rotX * 0.6}px 16px rgba(0,212,255,0.12), 0 8px 24px rgba(0,0,0,0.32)`;
      currentRotX = rotX;
      currentRotY = rotY;
      currentTz = tz;
    }

    requestAnimationFrame(idleStep);
  }

  requestAnimationFrame(idleStep);
  scheduleNextSpin();
})();

// 3D name rotation based on mouse position (Mon Parcours)
(function() {
  const nameEl = document.getElementById('name3d');
  const container = document.querySelector('.container');
  if (!nameEl || !container) return;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    const rotY = dx * 12;
    const rotX = -dy * 12;
    const tz = 24;
    nameEl.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${tz}px)`;
    const glowX = Math.round(rotY * 0.6);
    const glowY = Math.round(rotX * 0.6);
    nameEl.style.textShadow = `${-glowX}px ${glowY}px 10px rgba(0,212,255,0.25), 0 6px 18px rgba(0,0,0,0.35)`;
  });

  container.addEventListener('mouseleave', () => {
    nameEl.style.transform = '';
    nameEl.style.textShadow = '';
  });
})();

// Idle animation + spins (Mon Parcours)
(function() {
  const nameEl = document.getElementById('name3d');
  const container = document.querySelector('.container');
  if (!nameEl || !container) return;

  let lastInteraction = Date.now();
  let isHovering = false;
  let spinning = false;
  let currentRotX = 0;
  let currentRotY = 0;
  let currentTz = 20;

  container.addEventListener('mousemove', () => { lastInteraction = Date.now(); isHovering = true; if (spinning) spinning = false; });
  container.addEventListener('mouseenter', () => { lastInteraction = Date.now(); isHovering = true; if (spinning) spinning = false; });
  container.addEventListener('mouseleave', () => { lastInteraction = Date.now(); isHovering = false; });

  function easeOutQuad(t) { return t * (2 - t); }

  function startSpin() {
    if (spinning) return;
    if ((Date.now() - lastInteraction) < 900 || isHovering) return scheduleNextSpin(1200);
    spinning = true;
    const duration = 1000 + Math.random() * 800;
    const startX = currentRotX;
    const startY = currentRotY;
    const startTz = currentTz;
    const start = performance.now();

    function spinFrame(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = easeOutQuad(p);
      const added = eased * 360;
      const rotY = startY + added;
      const rotX = startX + Math.sin(eased * Math.PI) * 8;
      const tz = startTz + Math.sin(eased * Math.PI) * 2;
      nameEl.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${tz}px)`;
      nameEl.style.transition = 'transform 0.14s linear';
      nameEl.style.textShadow = `${-rotY * 0.02}px ${rotX * 0.4}px 18px rgba(0,212,255,0.18), 0 10px 30px rgba(0,0,0,0.36)`;
      if (p < 1 && spinning) {
        requestAnimationFrame(spinFrame);
      } else {
        spinning = false;
        currentRotX = ((rotX + 180) % 360) - 180;
        currentRotY = ((rotY + 180) % 360) - 180;
        currentTz = tz;
        scheduleNextSpin();
      }
    }

    requestAnimationFrame(spinFrame);
  }

  let spinTimeout = null;
  function scheduleNextSpin(delay) {
    if (spinTimeout) clearTimeout(spinTimeout);
    const wait = typeof delay === 'number' ? delay : (5000 + Math.random() * 14000);
    spinTimeout = setTimeout(() => {
      startSpin();
    }, wait);
  }

  function idleStep(t) {
    const now = Date.now();
    const idle = (now - lastInteraction) > 1200;

    if (!isHovering && idle && !spinning) {
      const s = t / 1000;
      const rotY = Math.sin(s * 0.6) * 6;
      const rotX = Math.sin(s * 0.8) * 3;
      const tz = 20 + Math.sin(s * 0.7) * 1.5;
      nameEl.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${tz}px)`;
      nameEl.style.transition = 'transform 0.9s cubic-bezier(.22,.9,.28,1), text-shadow 0.6s ease';
      nameEl.style.textShadow = `${-rotY * 0.6}px ${rotX * 0.6}px 16px rgba(0,212,255,0.12), 0 8px 24px rgba(0,0,0,0.32)`;
      currentRotX = rotX;
      currentRotY = rotY;
      currentTz = tz;
    }

    requestAnimationFrame(idleStep);
  }

  requestAnimationFrame(idleStep);
  scheduleNextSpin();
})();
