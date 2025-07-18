document.addEventListener('DOMContentLoaded', function() {
    const projectsOverview = document.getElementById('projects-overview');
    const projectDetail = document.getElementById('project-detail');
    const backBtn = document.getElementById('back-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Données des projets
    const projectsData = {
        'hsm-immo': {
            title: 'HSM Immo',
            fullDescription: [
                'Développement d\'une application web moderne pour l\'agence immobilière HSM Immo. Le projet comprend une interface utilisateur intuitive développée en React avec TypeScript pour une expérience utilisateur optimale, et un backend robuste en PHP pour la gestion des communications et des données.',
                'L\'application intègre un système de contact sophistiqué utilisant PHPMailer pour l\'envoi et la réception d\'emails, permettant une communication fluide entre l\'agence et ses clients.'
            ]
        }
    };

    // Gestion du clic sur les cartes de projet
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.dataset.project;
            showProjectDetail(projectId);
        });
    });

    // Gestion du bouton retour
    backBtn.addEventListener('click', function() {
        showProjectsOverview();
    });

    // Fonction pour afficher la vue détaillée
    function showProjectDetail(projectId) {
        const project = projectsData[projectId];
        if (!project) return;

        // Mettre à jour le contenu
        document.getElementById('detail-title').textContent = project.title;
        
        // Mettre à jour la description
        const descriptionContainer = document.querySelector('.description');
        descriptionContainer.innerHTML = '';
        project.fullDescription.forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            descriptionContainer.appendChild(p);
        });

        // Afficher le bouton retour
        backBtn.classList.remove('hidden');
        
        // Appliquer les classes pour l'animation
        projectsOverview.classList.add('hidden');
        projectDetail.classList.remove('hidden'); // CORRECTION ICI
        projectDetail.classList.add('active');    // CORRECTION ICI
        
        // Scroll vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Fonction pour afficher la vue d'ensemble
    function showProjectsOverview() {
        projectDetail.classList.remove('active');
        projectDetail.classList.add('hidden');    // CORRECTION ICI
        projectsOverview.classList.remove('hidden');
        
        // Cacher le bouton retour
        backBtn.classList.add('hidden');
    }

    // Animation d'entrée pour les cartes
    function animateCards() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    // Lancer l'animation au chargement
    setTimeout(animateCards, 300);
    
    // Cacher le bouton retour initialement
    backBtn.classList.add('hidden');
});