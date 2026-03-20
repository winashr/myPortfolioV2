document.addEventListener('DOMContentLoaded', function() {
    // ========== DOM REFERENCES ==========
    const categoriesView = document.getElementById('categories-view');
    const projectsListView = document.getElementById('projects-list-view');
    const projectDetail = document.getElementById('project-detail');
    const categoryCards = document.querySelectorAll('.category-card');
    const deliverablesModal = document.getElementById('deliverables-modal');
    const deliverablesGallery = document.getElementById('deliverables-gallery');
    const imageLightbox = document.getElementById('image-lightbox');

    let currentCategory = null;
    let currentProjectId = null;

    // ========== DATA DECLARATION ==========
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
            deliverables: {
                enabled: true,  // ✅ Activé!
                images: [
                    {
                        src: '/images/livrables/hsm-immo/ScrumJira.png',
                        title: 'Méthode Agile Scrum',
                        description: 'Interface des tâchjes et sprints sur Jira pour une gestion de projet efficace',
                        category: 'Gestion de Projet'
                    },
                    {
                        src: '/images/livrables/hsm-immo/DemandeClient.jpeg',
                        title: 'Demande Client',
                        description: 'Document de demande initiale du client avec les exigences fonctionnelles et techniques',
                        category: 'Fonctionnalité'
                    },
                    {
                        src: '/images/livrables/hsm-immo/architect.png',
                        title: 'Architecture du projet',
                        description: 'Diagramme de l\'architecture technique du code HSM Immo, illustrant l\'organisation des composants et des flux de données',
                        category: 'Architecture'
                    }
                ]
            },
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
            deliverables: {
                enabled: true,
                images: [
                    {
                        src: '/images/livrables/hsm-immo-perf/SEO50.png',
                        title: 'Score SEO Avant Optimisation',
                        description: 'Audit initial révélant un score SEO de 50 avec des recommandations claires pour l\'amélioration',
                        category: 'Interface'
                    },
                    {
                        src: '/images/livrables/hsm-immo-perf/SEO100.png',
                        title: 'Score SEO Après Optimisation',
                        description: 'Implementation des recommandations SEO pour atteindre un score parfait de 100',
                        category: 'Interface'
                    },
                    {
                        src: '/images/livrables/hsm-immo-perf/DB.png',
                        title: 'Intégration de BDD avec requêtes préparées',
                        description: 'Sécurisation des interactions avec la base de données pour éviter les injections SQL',
                        category: 'Backend'
                    }
                ]
            },
            links: [
                {text: 'Voir le rapport Lighthouse(Soon...)', url: 'https://hsmimmo.com'},
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
                'Base de Données': ['JDBC', 'MySQL', 'DAO Pattern', 'Optimisation des requêtes'],
                'Outils de Développement': ['IntelliJ IDEA', 'Git', 'Maven', 'JavaDoc']
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
                { metric: 'Base de données', value: 'MySQL', icon: '💾' }
            ],
            deliverables: {
                enabled: true,
                images: [
                    {
                        src: '/images/livrables/immosync/workflow.png',
                        title: 'Fonctionnalités de l\'application',
                        description: 'Illustration des différentes fonctionnalités de l\'application et de leur interaction',
                        category: 'Fonctionnalité'
                    },
                    {
                        src: '/images/livrables/immosync/gestadmin.png',
                        title: 'Interface Administrateur',
                        description: 'Interface pour la gestion des utilisateurs / entités avec JavaFX et FXML',
                        category: 'Interface'
                    },
                    {
                        src: '/images/livrables/immosync/gestchantier.png',
                        title: 'Interface gestionnaire',
                        description: 'Interface pour la gestion des chantiers avec JavaFX et FXML',
                        category: 'Interface'
                    }
                ]
            },
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
            deliverables: {
                enabled: true,
                images: [
                    {
                        src: '/images/livrables/travaux-symfony/webinspect.png',
                        title: 'Interface Inspecteur',
                        description: 'Interface dédiée aux inspecteurs pour le suivi des chantiers et interventions',
                        category: 'Interface'
                    },
                    {
                        src: '/images/livrables/travaux-symfony/webadmin.png',
                        title: 'Interface Administrateur',
                        description: 'Interface dédiée aux admins pour la gestion des utilisateurs',
                        category: 'Interface'
                    },  
                    { 
                        src: '/images/livrables/travaux-symfony/architect.png',
                        title: 'Architecture MVC',
                        description: 'Schéma de l\'architecture MVC de l\'application avec les interactions entre les composants',
                        category: 'Architecture'
                    }
                        
                ]
            },
            links: [
                {text: 'Voir le code source', url: 'https://github.com/ort-montreuil/BTS-SIO-G2-2026-GESTTRAVAUX-Web'}
            ]
        },
        'endgame-eduframe': {
            title: 'EndGame - Déploiement EDUFramework',
            tech: ['EDUFramework', 'Docker', 'Nginx', 'PHP 8.3', 'MySQL', 'phpMyAdmin', 'Deployer', 'DevOps'],
            fullDescription: [
                'Projet de déploiement complet d\'une application web avec EDUFramework, du développement à la mise en production. Collaboration entre développeurs (SLAM) et administrateurs système (SISR) pour comprendre l\'intégralité du cycle de vie d\'une application.',
                'Le projet intègre la création d\'un formulaire de contact avec EDUFramework et la mise en place d\'un environnement de production conteneurisé avec Docker, incluant la configuration de Nginx, PHP 8.3, MySQL et phpMyAdmin pour le déploiement automatisé.'
            ],
            features: [
                {
                    icon: '📝',
                    title: 'Formulaire de Contact',
                    description: 'Application web fonctionnelle avec formulaire HTML/CSS/PHP et message de confirmation'
                },
                {
                    icon: '🐳',
                    title: 'Conteneurisation Docker',
                    description: 'Environnement complet avec docker-compose.yml pour Nginx, PHP 8.3, MySQL et phpMyAdmin'
                },
                {
                    icon: '⚙️',
                    title: 'Configuration Nginx',
                    description: 'Serveur web Nginx configuré pour servir l\'application PHP avec optimisations performances'
                },
                {
                    icon: '🚀',
                    title: 'Déploiement Automatisé',
                    description: 'Intégration de Deployer pour automatiser le processus de déploiement en production'
                },
                {
                    icon: '🤝',
                    title: 'Collaboration SLAM/SISR',
                    description: 'Travail en équipe entre développeurs et administrateurs système pour une mise en production réussie'
                },
                {
                    icon: '💾',
                    title: 'Base de Données',
                    description: 'MySQL configuré avec phpMyAdmin pour la gestion des données de l\'application'
                }
            ],
            techStack: {
                'Développement': ['EDUFramework', 'PHP 8.3', 'HTML5', 'CSS3', 'JavaScript'],
                'Infrastructure': ['Docker', 'Docker Compose', 'Nginx', 'MySQL 8', 'phpMyAdmin'],
                'DevOps': ['Deployer', 'Git', 'Automatisation du déploiement'],
                'Outils': ['VS Code', 'Terminal', 'Docker Desktop']
            },
            challenges: [
                {
                    title: 'Collaboration SLAM/SISR',
                    description: 'Coordination entre développeurs et administrateurs pour aligner les besoins de développement avec les contraintes d\'infrastructure et de déploiement.'
                },
                {
                    title: 'Containerisation de l\'Application',
                    description: 'Configuration d\'un environnement Docker multi-conteneurs avec services interconnectés (Nginx, PHP-FPM, MySQL) et gestion des volumes persistants.'
                },
                {
                    title: 'Configuration Nginx et PHP',
                    description: 'Mise en place de la configuration Nginx optimale pour servir une application PHP avec FastCGI et gestion des rewrites URL.'
                },
                {
                    title: 'Automatisation du Déploiement',
                    description: 'Intégration de Deployer pour automatiser le processus de mise en production avec tests et rollback en cas d\'erreur.'
                }
            ],
            results: [
                { metric: 'Durée du projet', value: '4 heures', icon: '⏱️' },
                { metric: 'Environnement', value: 'Docker', icon: '🐳' },
                { metric: 'Déploiement', value: 'Automatisé', icon: '🚀' }
            ],
            deliverables: {
                enabled: true,
                images: [
                    {
                        src: '/images/livrables/endgame/endgamephotoi.png',
                        title: 'Instructions de mise en production',
                        description: 'Documentation détaillée des étapes de déploiement de l\'application avec Docker et Deployer',
                        category: 'Fonctionnalité'
                    },
                    {
                        src: '/images/livrables/endgame/formulaire.png',
                        title: 'Formulaire de déploiement',
                        description: 'Modèle de formulaire pour la soumission des demandes de déploiement',
                        category: 'Fonctionnalité'
                    },
                    {
                        src: '/images/livrables/endgame/architec.png',
                        title: 'Architecture de l\'environnement de production',
                        description: 'Schéma de l\'architecture Docker avec les différents services (Nginx, PHP, MySQL) et leurs interactions',
                        category: 'Architecture'
                    }
                ]
            },
            links: [
                {text: 'Documentation EDUFramework', url: 'https://studooapp.github.io/edu-framework/'},
                {text: 'Documentation Deployer', url: 'https://deployer.org/'}
            ]
        },
        'gestion-restaurant': {
            title: 'Gestion Restaurant - Création de Menus',
            tech: ['Java', 'JavaFX', 'XAML', 'HashMap', 'TreeView'],
            fullDescription: [
                'Application de gestion de cartes de restaurant permettant de créer des menus pour différentes saisons. L\'application utilise des collections HashMap pour stocker les plats par catégorie (Entrées, Plats, Desserts) et par carte/menu.',
                'L\'interface permet de sélectionner des catégories, d\'ajouter des plats aux menus (maximum 3 par menu), de visualiser la composition via un TreeView interactif et de calculer automatiquement le prix total de chaque menu.'
            ],
            features: [
                {
                    icon: '🍽️',
                    title: 'Gestion des Plats',
                    description: 'Stockage des plats dans une HashMap par catégorie (Entrées, Plats, Desserts) avec chargement dynamique'
                },
                {
                    icon: '📋',
                    title: 'Création de Menus',
                    description: 'Ajout de plats aux menus avec validation (maximum 3 plats par menu) et vérification des doublons'
                },
                {
                    icon: '🌳',
                    title: 'TreeView Interactif',
                    description: 'Visualisation hiérarchique des cartes, menus et plats avec gestion des clics pour suppression'
                },
                {
                    icon: '💰',
                    title: 'Calcul Prix Total',
                    description: 'Calcul automatique et mise à jour du prix total du menu en fonction des plats sélectionnés'
                },
                {
                    icon: '🖼️',
                    title: 'Affichage Images',
                    description: 'Affichage conditionnel des images des plats uniquement si le menu est complet (3 plats)'
                },
                {
                    icon: '🗑️',
                    title: 'Suppression Dynamique',
                    description: 'Suppression des plats via clic dans le TreeView avec mise à jour automatique du prix'
                }
            ],
            techStack: {
                'Interface & Design': ['JAVAFX', 'XAML', 'TreeView', 'ComboBox', 'DataBinding'],
                'Backend & Architecture': ['Java', 'Collections HashMap', 'SpringBoot', 'Gestion événements'],
                'Fonctionnalités': ['Validation données', 'Calcul dynamique', 'Affichage conditionnel']
            },
            challenges: [
                {
                    title: 'Gestion des Collections',
                    description: 'Utilisation de HashMap imbriquées pour stocker les plats par catégorie et les menus par carte, avec accès efficace aux données.'
                },
                {
                    title: 'TreeView Dynamique',
                    description: 'Manipulation du TreeView pour ajouter, afficher et supprimer des éléments de manière hiérarchique (Carte > Menu > Plat).'
                },
                {
                    title: 'Logique de Validation',
                    description: 'Implémentation des règles métier : maximum 3 plats par menu, vérification des doublons, affichage conditionnel des images.'
                }
            ],
            results: [
                { metric: 'Interface', value: 'WPF moderne', icon: '🎨' },
                { metric: 'Collections', value: 'HashMap', icon: '📊' },
                { metric: 'Pattern', value: 'MVVM', icon: '🏛️' }
            ],
            deliverables: {
                enabled: true,
                images: [
                    {
                        src: '/images/livrables/gestion-restaurant/gestrestau.png',
                        title: 'Interface de gestion de cartes',
                        description: 'Interface de gestion des cartes de restaurant avec JavaFX et XAML',
                        category: 'Interface'
                    },
                    {
                        src: '/images/livrables/gestrestau/architec.png',
                        title: 'Architecture',
                        description: 'Schéma de l\'architecture de l\'application avec les interactions entre les composants',
                        category: 'Architecture'
                    }
                        
                ]
            },
            links: []
        }
    };

    // Données de catégories
    const categoriesData = {
        professional: {
            title: 'Projets Professionnels',
            description: 'Expériences en entreprise et stages',
            icon: '💼',
            projects: ['hsm-immo', 'hsm-immo-perf']
        },
        academic: {
            title: 'Projets Scolaires',
            description: 'Travaux réalisés en formation BTS SIO',
            icon: '🎓',
            projects: ['immosync', 'travaux-symfony', 'endgame-eduframe', 'gestion-restaurant']
        }
    };

    // ========== EVENT LISTENERS SETUP ==========
    setupEventListeners();

    function setupEventListeners() {
        // Catégories
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.dataset.category;
                showProjectsForCategory(category);
            });
        });

        // Boutons close pour les modales
        const closeButtons = document.querySelectorAll('.close-modal');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const modal = this.closest('.projects-list-view, .project-detail');
                if (modal && modal.id === 'project-detail') {
                    // Revenir à la liste des projets
                    if (currentCategory) {
                        showProjectsForCategory(currentCategory);
                    } else {
                        showCategoriesView();
                    }
                } else {
                    // Revenir aux catégories
                    showCategoriesView();
                }
            });
        });
    }

    // ========== VIEW FUNCTIONS ==========
    function showCategoriesView() {
        categoriesView.classList.remove('hidden');
        projectsListView.classList.add('hidden');
        projectDetail.classList.add('hidden');
    }

    function showProjectsForCategory(category) {
        currentCategory = category;
        const catData = categoriesData[category];
        if (!catData) return;

        // Mettre à jour l'en-tête
        document.getElementById('category-title').textContent = catData.title;
        document.getElementById('category-description').textContent = catData.description;
        document.querySelector('.category-icon-large').textContent = catData.icon;

        // Colorer l'en-tête selon la catégorie
        const header = document.querySelector('.category-display-header h2');
        if (category === 'academic') {
            header.style.background = 'linear-gradient(135deg, #a855f7, #7c3aed)';
            header.style.webkitBackgroundClip = 'text';
            header.style.webkitTextFillColor = 'transparent';
        } else {
            header.style.background = 'linear-gradient(135deg, #00d4ff, #0099ff)';
            header.style.webkitBackgroundClip = 'text';
            header.style.webkitTextFillColor = 'transparent';
        }

        // Générer les cartes de projets
        const grid = document.getElementById('projects-grid');
        grid.innerHTML = '';
        
        catData.projects.forEach(projectId => {
            const project = projectsData[projectId];
            if (!project) return;

            const card = document.createElement('div');
            card.className = 'project-card';
            card.dataset.project = projectId;
            card.innerHTML = `
                <div class="project-header">
                    <div class="project-icon">${projectId === 'hsm-immo' ? '🏠' : projectId === 'hsm-immo-perf' ? '⚡' : projectId === 'immosync' ? '🛠️' : '💻'}</div>
                    <h3>${project.title}</h3>
                </div>
                <p class="project-description">${project.fullDescription[0]}</p>
                <div class="tech-badges">
                    ${project.tech.slice(0, 3).map(t => `<span class="tech-badge">${t}</span>`).join('')}
                    ${project.tech.length > 3 ? `<span class="tech-badge">+${project.tech.length - 3}</span>` : ''}
                </div>
                <div class="project-footer">
                    <span class="project-date">${projectId.includes('immosync') || projectId.includes('travaux') ? 'En cours' : '2025'}</span>
                    <span class="arrow-icon">→</span>
                </div>
            `;
            grid.appendChild(card);
        });

        // Afficher la vue liste de projets
        categoriesView.classList.add('hidden');
        projectsListView.classList.remove('hidden');
        projectDetail.classList.add('hidden');

        // Scroll to top of modal content
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
        
        // Page scroll to projects list
        projectsListView.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Attachez les événements aux cartes generées dynamiquement
        attachProjectCardListeners();
    }

    // Attache les événements aux cartes de projets
    function attachProjectCardListeners() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                const projectId = this.dataset.project;
                showProjectDetail(projectId);
            });
        });
    }

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

        // NOUVEAU: Bouton "Voir les livrables" (toujours affiché)
        const delivBtn = document.createElement('button');
        delivBtn.className = 'btn-deliverables';
        delivBtn.textContent = '📸 Voir les livrables';
        delivBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showDeliverablesModal(projectId);
        });
        linksDiv.appendChild(delivBtn);

        // Boutons existants (Visiter/Code)
        project.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.className = link.text.includes('Code') || link.text.includes('source') ? 'btn-secondary' : 'btn-primary';
            a.textContent = link.text;
            linksDiv.appendChild(a);
        });

        currentProjectId = projectId;

        // Affichage du détail
        projectDetail.classList.remove('hidden');
        categoriesView.classList.add('hidden');
        projectsListView.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ========== DELIVERABLES MODAL FUNCTIONS ==========
    function showDeliverablesModal(projectId) {
        const project = projectsData[projectId];
        if (!project) return;

        // Mettre à jour titre
        document.getElementById('deliverables-title').textContent = `Livrables - ${project.title}`;

        const gallery = document.getElementById('deliverables-gallery');
        gallery.innerHTML = '';

        // Si pas de livrables ou disabled, afficher message
        if (!project.deliverables || !project.deliverables.enabled || !project.deliverables.images || project.deliverables.images.length === 0) {
            gallery.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">📸</div>
                    <h3 style="color: #00d4ff; font-size: 1.5rem; margin-bottom: 1rem;">Livrables à venir</h3>
                    <p style="color: #a0aec0; font-size: 1rem;">Les preuves de travail pour ce projet seront ajoutées prochainement.</p>
                </div>
            `;
            deliverablesModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            return;
        }

        // Générer la galerie
        project.deliverables.images.forEach((deliverable, index) => {
            const item = document.createElement('div');
            item.className = 'deliverable-item';
            item.dataset.index = index;

            item.innerHTML = `
                <div class="deliverable-image-container">
                    <img class="deliverable-image" src="${deliverable.src}" alt="${deliverable.title}" loading="lazy">
                    <div class="deliverable-overlay">
                        <span class="deliverable-overlay-icon">🔍</span>
                    </div>
                </div>
                <div class="deliverable-info">
                    <span class="deliverable-category">${deliverable.category}</span>
                    <h3>${deliverable.title}</h3>
                    <p>${deliverable.description}</p>
                </div>
            `;

            // Event listener pour lightbox
            item.addEventListener('click', function() {
                openImageLightbox(deliverable);
            });

            gallery.appendChild(item);
        });

        // Afficher modal
        deliverablesModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Scroll to top
        const modalContent = document.querySelector('.deliverables-content');
        if (modalContent) modalContent.scrollTop = 0;
    }

    function closeDeliverablesModal() {
        deliverablesModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    function openImageLightbox(deliverable) {
        document.getElementById('lightbox-image').src = deliverable.src;
        document.getElementById('lightbox-title').textContent = deliverable.title;
        document.getElementById('lightbox-description').textContent = deliverable.description;
        imageLightbox.classList.remove('hidden');
    }

    function closeLightbox() {
        imageLightbox.classList.add('hidden');
    }

    // Event listeners pour les modals
    document.getElementById('close-deliverables').addEventListener('click', closeDeliverablesModal);
    document.getElementById('close-lightbox').addEventListener('click', closeLightbox);

    // Fermer en cliquant sur fond
    deliverablesModal.addEventListener('click', function(e) {
        if (e.target === deliverablesModal) closeDeliverablesModal();
    });

    imageLightbox.addEventListener('click', function(e) {
        if (e.target === imageLightbox) closeLightbox();
    });

    // Support clavier ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (!imageLightbox.classList.contains('hidden')) {
                closeLightbox();
            } else if (!deliverablesModal.classList.contains('hidden')) {
                closeDeliverablesModal();
            }
        }
    });

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

    // 3D name rotation based on mouse position (Mes Projets)
    (function() {
      const nameEl = document.getElementById('name3d');
      const header = document.querySelector('.header');
      if (!nameEl || !header) return;

      header.addEventListener('mousemove', (e) => {
        const rect = header.getBoundingClientRect();
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

      header.addEventListener('mouseleave', () => {
        nameEl.style.transform = '';
        nameEl.style.textShadow = '';
      });
    })();

    // Idle animation + spins (Mes Projets)
    (function() {
      const nameEl = document.getElementById('name3d');
      const header = document.querySelector('.header');
      if (!nameEl || !header) return;

      let lastInteraction = Date.now();
      let isHovering = false;
      let spinning = false;
      let currentRotX = 0;
      let currentRotY = 0;
      let currentTz = 20;

      header.addEventListener('mousemove', () => { lastInteraction = Date.now(); isHovering = true; if (spinning) spinning = false; });
      header.addEventListener('mouseenter', () => { lastInteraction = Date.now(); isHovering = true; if (spinning) spinning = false; });
      header.addEventListener('mouseleave', () => { lastInteraction = Date.now(); isHovering = false; });

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
});
