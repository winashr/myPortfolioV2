document.addEventListener('DOMContentLoaded', function() {
    const projectsOverview = document.getElementById('projects-overview');
    const projectDetail = document.getElementById('project-detail');
    const backBtn = document.getElementById('back-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    console.log('Nombre de cartes trouvées:', projectCards.length);

    const projectsData = {
        'hsm-immo': {
            title: 'HSM Immo - Application Web Immobilière',
            tech: ['React 18', 'TypeScript', 'Vite', 'PHP 8', 'Mailjet API', 'API REST', 'Responsive Design'],
            fullDescription: [
                'Développement complet d\'une application web moderne pour l\'agence immobilière HSM Immo. Le projet propose une interface utilisateur élégante et performante construite avec React et TypeScript, associée à un backend PHP robuste pour la gestion des données immobilières.',
                'L\'application intègre un système de contact professionnel utilisant l\'API Mailjet pour l\'envoi et la gestion des emails transactionnels, garantissant une communication fiable entre l\'agence et ses clients.'
            ],
            features: [
                {
                    icon: '📧',
                    title: 'Système de Contact',
                    description: 'Formulaires de contact intelligents avec envoi d\'emails via API Mailjet et notifications en temps réel'
                },

                {
                    icon: '📱',
                    title: 'Interface Responsive',
                    description: 'Design adaptatif offrant une expérience optimale sur tous les appareils (desktop, tablette, mobile)'
                },
                {
                    icon: '⚡',
                    title: 'Performance Optimale',
                    description: 'Build optimisé avec Vite pour des temps de chargement ultra-rapides et une navigation fluide'
                },
                {
                    icon: '🔒',
                    title: 'Sécurité Renforcée',
                    description: 'Validation des données, protection CSRF, sanitisation des entrées utilisateur'
                }
            ],
            techStack: {
                'Frontend': ['React 18', 'TypeScript', 'Vite', 'React Router', 'CSS Modules', 'Responsive Design'],
                'Backend': ['PHP 8', 'API REST', 'Mailjet API', 'JSON', 'Validation des données'],
                'Outils & Workflow': ['Git', 'VS Code', 'npm'],
                'Déploiement': ['Hébergement Web IONOS', 'SSL/HTTPS']
            },
            challenges: [
                {
                    title: 'Intégration API Mailjet',
                    description: 'Mise en place d\'un système d\'emailing professionnel avec l\'API Mailjet, incluant la gestion des templates, le suivi des envois et la gestion des erreurs.'
                },
                {
                    title: 'Architecture Frontend Moderne',
                    description: 'Développement d\'une SPA (Single Page Application) performante avec React et TypeScript, garantissant la maintenabilité et la scalabilité du code.'
                },
                {
                    title: 'Expérience Utilisateur',
                    description: 'Conception d\'une interface intuitive et attractive permettant aux visiteurs de trouver facilement les biens correspondant à leurs critères.'
                }
            ],
            results: [
                { metric: 'Performance', value: 'Optimale', icon: '⚡' },
                { metric: 'Responsive', value: '100%', icon: '📱' },
                { metric: 'Type-Safety', value: 'TypeScript', icon: '🛡️' }
            ],
            links: [
                {text: 'Visiter le site', url: 'https://hsmimmo.com'}
            ]
        },
        'hsm-immo-perf': {
            title: 'HSM Immo - Optimisation SEO & Performance',
            tech: ['PageSpeed Insights', 'Web Performance', 'SEO Audit', 'Image Optimization', 'Core Web Vitals', 'Lighthouse', 'Analytics'],
            fullDescription: [
                'Optimisation complète du site HSM Immo focalisée sur les performances et le SEO. Analyse détaillée via Google PageSpeed Insights et Lighthouse, suivi d\'une série de corrections avancées pour améliorer significativement la visibilité organique et l\'expérience utilisateur.',
                'Le projet comprenait l\'identification et la correction des problèmes critiques liés aux images mal compressées, au temps de chargement excessif, et aux facteurs SEO impactant le classement dans les moteurs de recherche.'
            ],
            features: [
                {
                    icon: '🔍',
                    title: 'Audit SEO Complet',
                    description: 'Analyse approfondie des aspects SEO (métadonnées, structure, backlinks, indexation) avec recommandations détaillées'
                },
                {
                    icon: '📊',
                    title: 'Analyse PageSpeed Insights',
                    description: 'Utilisation systématique de Google PageSpeed Insights pour identifier les goulots d\'étranglement et mesurer les améliorations'
                },
                {
                    icon: '🖼️',
                    title: 'Optimisation des Images',
                    description: 'Compression et conversion des images en formats modernes (WebP), réduction des tailles sans perte de qualité'
                },
                {
                    icon: '⏱️',
                    title: 'Core Web Vitals Optimized',
                    description: 'Amélioration des métriques essentielles : LCP, FID, CLS pour un score Lighthouse maximal'
                },
                {
                    icon: '🚀',
                    title: 'Lazy Loading & Code Splitting',
                    description: 'Mise en place du lazy loading pour les images et du code splitting pour réduire le JavaScript initial'
                },
                {
                    icon: '📈',
                    title: 'Suivi & Monitoring',
                    description: 'Configuration du monitoring continu avec Google Analytics 4 et Search Console pour le suivi des performances'
                }
            ],
            techStack: {
                'Outils d\'Analyse': ['Google PageSpeed Insights', 'Lighthouse', 'Google Search Console', 'Google Analytics 4', 'Screaming Frog SEO Spider'],
                'Optimisation Images': ['TinyPNG/TinyJPG', 'ImageMagick', 'WebP Conversion', 'Responsive Images', 'Picture Element'],
                'Web Performance': ['Minification CSS/JS', 'Code Splitting React', 'Lazy Loading', 'Browser Caching', 'CDN Optimization'],
                'SEO Techniques': ['Structured Data (Schema.org)', 'Meta Tags Optimization', 'URL Structure', 'Internal Linking', 'XML Sitemap']
            },
            challenges: [
                {
                    title: 'Compression des Images Sans Perte de Qualité',
                    description: 'Réduction significative de la taille des images (souvent 70-80%) tout en maintenant une qualité visuelle impeccable. Conversion en WebP pour les navigateurs modernes avec fallback JPG/PNG.'
                },
                {
                    title: 'Amélioration des Core Web Vitals',
                    description: 'Optimisation des trois métriques clés (LCP, FID, CLS) avec un focus particulier sur le LCP (Largest Contentful Paint) en optimisant le chargement des ressources critiques.'
                },
                {
                    title: 'SEO Technique Avancé',
                    description: 'Mise en place du balisage Schema.org pour l\'immobilier, optimisation des métadonnées, amélioration de la structure interne et audit des problèmes d\'indexation.'
                },
                {
                    title: 'Compatibilité et Tests Croisés',
                    description: 'Tests rigoureux sur différents appareils, connexions réseau et navigateurs pour assurer une expérience utilisateur cohérente et une performance maintenue.'
                }
            ],
            results: [
                { metric: 'Performance Score', value: '95+', icon: '⚡' },
                { metric: 'SEO Score', value: '100', icon: '🎯' },
                { metric: 'Accessibilité', value: '95+', icon: '♿' }
            ],
            links: [
                {text: 'Voir le rapport Lighthouse', url: 'https://hsmimmo.com'},
                {text: 'Visiter le site', url: 'https://hsmimmo.com'}
            ]
        },
        'immosync': {
            title: 'immoSync - Application Client Lourd',
            tech: ['Java 17', 'JavaFX', 'FXML', 'Scene Builder', 'Maven', 'MVC'],
            fullDescription: [
                'immoSync est une application desktop complète pour la gestion de travaux immobiliers, développée en Java avec JavaFX. Ce projet vise à offrir une solution performante et intuitive pour le suivi des chantiers, la gestion des devis et le planning des interventions.',
                'L\'application propose une interface graphique riche construite avec JavaFX et FXML, permettant une expérience utilisateur fluide et professionnelle. L\'architecture suit le pattern MVC pour garantir une maintenance et évolution facilitées du code.'
            ],
            features: [
                {
                    icon: '🏗️',
                    title: 'Gestion des Chantiers',
                    description: 'Création, suivi et clôture des chantiers avec gestion des échéances et affectation des ressources'
                },
                {
                    icon: '📋',
                    title: 'Système de Devis',
                    description: 'Génération de devis détaillés avec calcul automatique des coûts et des marges bénéficiaires'
                },
                {
                    icon: '👥',
                    title: 'Gestion des Équipes',
                    description: 'Attribution des tâches, suivi des interventions et planning des équipes de travail'
                },
                {
                    icon: '📊',
                    title: 'Tableaux de Bord',
                    description: 'Visualisation en temps réel des indicateurs clés de performance (KPI) des chantiers'
                },
                {
                    icon: '🔍',
                    title: 'Comparateur Fournisseurs',
                    description: 'Comparaison multi-critères des fournisseurs et matériaux (prix, qualité, délais)'
                },
                {
                    icon: '💾',
                    title: 'Mode Offline',
                    description: 'Fonctionnement complet sans connexion internet avec synchronisation différée'
                }
            ],
            techStack: {
                'Interface & Design': ['JavaFX 17', 'FXML', 'Scene Builder', 'CSS JavaFX', 'Responsive Layout'],
                'Backend & Architecture': ['Java 17', 'Architecture MVC', 'Design Patterns', 'Maven', 'Gestion événements'],
                'Base de Données': ['JDBC', 'MySQL', 'DAO Pattern', 'Transactions', 'Pool de connexions'],
                'Outils de Développement': ['IntelliJ IDEA', 'Git', 'Maven', 'JUnit', 'JavaDoc']
            },
            challenges: [
                {
                    title: 'Architecture Desktop Robuste',
                    description: 'Conception d\'une architecture MVC solide permettant une séparation claire entre interface, logique métier et accès aux données.'
                },
                {
                    title: 'Interface Utilisateur Intuitive',
                    description: 'Création d\'interfaces graphiques avec JavaFX et FXML offrant une expérience utilisateur moderne et fluide, comparable aux applications web.'
                },
                {
                    title: 'Performance et Réactivité',
                    description: 'Optimisation des requêtes et gestion des threads pour garantir une application réactive même avec de grandes quantités de données.'
                }
            ],
            results: [
                { metric: 'Interface riche', value: 'JavaFX moderne', icon: '🎨' },
                { metric: 'Architecture', value: 'MVC solide', icon: '🏛️' },
                { metric: 'Fonctionnement', value: '100% Offline', icon: '📴' }
            ],
            links: [
                {text: 'Voir le code source', url: 'https://github.com/ort-montreuil/BTS-SIO-G2-2026-GESTTRAVAUX-Java'}
            ]
        },
        'travaux-symfony': {
            title: 'GestionTravaux Web - Application Symfony',
            tech: ['PHP 8', 'Symfony 7', 'Doctrine ORM', 'Twig', 'Bootstrap 5', 'MVC', 'MySQL'],
            fullDescription: [
                'Application web complète de gestion de travaux immobiliers développée avec le framework Symfony 7. Le projet suit une architecture MVC rigoureuse et intègre les meilleures pratiques du développement web moderne.',
                'L\'application permet aux entreprises du bâtiment de gérer efficacement leurs chantiers, devis, interventions et équipes, avec une interface web accessible depuis n\'importe quel navigateur.'
            ],
            features: [
                {
                    icon: '👷',
                    title: 'Gestion des entités',
                    description: 'Attribution des tâches aux selon le role'
                },
                {
                    icon: '🔐',
                    title: 'Authentification Sécurisée',
                    description: 'Système de connexion avec gestion des rôles (admin, inspecteur, entrepreneurs...) et permissions'
                },
                {
                    icon: '📊',
                    title: 'Tableaux de Bord',
                    description: 'Visualisation des indicateurs clés : chantiers en cours, rentabilité, planning et statistiques'
                },
                {
                    icon: '🌐',
                    title: 'Interface Web Moderne',
                    description: 'Design responsive avec Bootstrap 5, navigation intuitive et expérience utilisateur optimale'
                }
            ],
            techStack: {
                'Framework & Backend': ['Symfony 7', 'PHP 8', 'Doctrine ORM', 'Architecture MVC', 'Symfony Security'],
                'Frontend & Templates': ['Twig', 'Bootstrap 5', 'JavaScript', 'CSS3', 'HTML5'],
                'Base de Données': ['MySQL 8', 'Doctrine Migrations', 'Relations complexes', 'Optimisation requêtes'],
                'Outils & Pratiques': ['Composer', 'Git', 'Symfony CLI', 'PHPStorm', 'Conventions PSR']
            },
            challenges: [
                {
                    title: 'Architecture Symfony',
                    description: 'Maîtrise du framework Symfony avec mise en place d\'une architecture MVC solide, gestion des entités Doctrine et création de contrôleurs performants.'
                },
                {
                    title: 'Modélisation de la Base de Données',
                    description: 'Conception d\'un schéma relationnel complexe avec Doctrine ORM pour gérer les chantiers, devis, équipes et interventions avec leurs relations.'
                },
                {
                    title: 'Système de Permissions',
                    description: 'Implémentation d\'un système de sécurité avec Symfony Security pour gérer les différents rôles utilisateurs et leurs accès aux fonctionnalités.'
                }
            ],
            results: [
                { metric: 'Framework', value: 'Symfony 7', icon: '🎯' },
                { metric: 'Architecture', value: 'MVC Pro', icon: '🏛️' },
                { metric: 'Base de données', value: 'Doctrine ORM', icon: '💾' }
            ],
            links: [
                {text: 'Voir le code source', url: 'https://github.com/ort-montreuil/BTS-SIO-G2-2026-GESTTRAVAUX-Web'}
            ]
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.dataset.project;
            console.log('Carte cliquée:', projectId);
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

        // Gestion du format enrichi (immoSync)
        if (project.features) {
            const featuresSection = document.createElement('div');
            featuresSection.className = 'features-section';
            featuresSection.innerHTML = '<h2>🎯 Fonctionnalités Principales</h2>';
            const featuresContainer = document.createElement('div');
            featuresContainer.className = 'features-cards';
            project.features.forEach(feature => {
                const card = document.createElement('div');
                card.className = 'feature-card';
                card.innerHTML = `
                    <div class="feature-icon">${feature.icon}</div>
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                `;
                featuresContainer.appendChild(card);
            });
            featuresSection.appendChild(featuresContainer);
            featuresGrid.appendChild(featuresSection);

            if (project.techStack) {
                const techSection = document.createElement('div');
                techSection.className = 'tech-section';
                techSection.innerHTML = '<h2>💻 Technologies Utilisées</h2>';
                const techGrid = document.createElement('div');
                techGrid.className = 'tech-stack-grid';
                Object.entries(project.techStack).forEach(([category, techs]) => {
                    const techCard = document.createElement('div');
                    techCard.className = 'tech-category';
                    techCard.innerHTML = `
                        <h3>${category}</h3>
                        <ul>${techs.map(t => `<li>${t}</li>`).join('')}</ul>
                    `;
                    techGrid.appendChild(techCard);
                });
                techSection.appendChild(techGrid);
                featuresGrid.appendChild(techSection);
            }

            if (project.challenges) {
                const challengesSection = document.createElement('div');
                challengesSection.className = 'challenges-section';
                challengesSection.innerHTML = '<h2>🚀 Défis Techniques Relevés</h2>';
                const challengesContainer = document.createElement('div');
                challengesContainer.className = 'challenges-list';
                project.challenges.forEach(challenge => {
                    const card = document.createElement('div');
                    card.className = 'challenge-card';
                    card.innerHTML = `
                        <h3>${challenge.title}</h3>
                        <p>${challenge.description}</p>
                    `;
                    challengesContainer.appendChild(card);
                });
                challengesSection.appendChild(challengesContainer);
                featuresGrid.appendChild(challengesSection);
            }

            if (project.results) {
                const resultsSection = document.createElement('div');
                resultsSection.className = 'results-section';
                resultsSection.innerHTML = '<h2>📈 Résultats & Impact</h2>';
                const resultsContainer = document.createElement('div');
                resultsContainer.className = 'results-grid';
                project.results.forEach(result => {
                    const card = document.createElement('div');
                    card.className = 'result-card';
                    card.innerHTML = `
                        <div class="result-icon">${result.icon}</div>
                        <div class="result-value">${result.value}</div>
                        <div class="result-metric">${result.metric}</div>
                    `;
                    resultsContainer.appendChild(card);
                });
                resultsSection.appendChild(resultsContainer);
                featuresGrid.appendChild(resultsSection);
            }
        } else {
            // Format simple (HSM et Symfony)
            const frontendDiv = document.createElement('div');
            frontendDiv.className = 'feature-section';
            frontendDiv.innerHTML = `<h3>Frontend</h3><ul>${project.frontendFeatures.map(f => `<li>${f}</li>`).join('')}</ul>`;
            const backendDiv = document.createElement('div');
            backendDiv.className = 'feature-section';
            backendDiv.innerHTML = `<h3>Backend</h3><ul>${project.backendFeatures.map(f => `<li>${f}</li>`).join('')}</ul>`;
            featuresGrid.appendChild(frontendDiv);
            featuresGrid.appendChild(backendDiv);
        }

        const linksDiv = document.querySelector('.project-links');
        linksDiv.innerHTML = '';
        project.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.className = link.text.includes('Code') || link.text.includes('source') ? 'btn-secondary' : 'btn-primary';
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
