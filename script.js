/**
 * ============================================================================
 * PORTFOLIO JAVASCRIPT
 * Gestion des onglets (tabs), carrousels et animation du réseau de neurones
 * ============================================================================
 */

/**
 * ============================================================================
 * DICTIONNAIRES DES TECHNOLOGIES
 * ============================================================================
 */

// Dictionnaire des langages de programmation
const LANGAGES = {
    'Python': 'fab fa-python',
    'JavaScript': 'fab fa-js',
    'R': 'fas fa-code',
    'Java': 'fab fa-java',
    'HTML5': 'fab fa-html5',
    'CSS3': 'fab fa-css3-alt',
    'C++': 'fab fa-cuttlefish',
    'SQL': 'fas fa-database'
};

// Dictionnaire des librairies et frameworks
const LIBRAIRIES = {
    'Pandas': 'fas fa-database',
    'NumPy': 'fas fa-chart-line',
    'TensorFlow': 'fas fa-brain',
    'Scikit-learn': 'fas fa-cube',
    'PyTorch': 'fas fa-network-wired',
    'Matplotlib': 'fas fa-chart-bar',
    'Keras': 'fas fa-robot',
    'Flask': 'fas fa-server'
};

// Dictionnaire des IDEs et outils
const IDES = {
    'VS Code': 'fas fa-code',
    'Jupyter Notebook': 'fas fa-terminal',
    'PyCharm': 'fas fa-laptop-code',
    'Google Colab': 'fas fa-flask',
    'Git': 'fas fa-git-alt',
    'Docker': 'fab fa-docker',
    'Anaconda': 'fas fa-cube',
    'Postman': 'fas fa-envelope'
};

/**
 * Dictionnaire des expériences professionnelles
 * Structure: { entreprise, poste, periode, missions }
 */
const EXPERIENCES = {
    '2024': [
        {
            entreprise: 'TechData Solutions',
            poste: 'Data Scientist Junior',
            periode: 'Mars 2024 - Présent',
            missions: [
                'Analyse et nettoyage de grandes volumes de données',
                'Développement de modèles de prédiction avec Python',
                'Création de dashboards interactifs avec Tableau',
                'Collaboration avec l\'équipe backend pour API integration'
            ]
        },
        {
            entreprise: 'FinanceAI Corp',
            poste: 'Stagiaire Data Analysis',
            periode: 'Janvier 2024 - Février 2024',
            missions: [
                'Traitement des données financières en temps réel',
                'Développement de scripts Python pour l\'ETL',
                'Reporting automatisé sur Excel et Power BI',
                'Documentation des processus analytiques'
            ]
        }
    ],
    '2023': [
        {
            entreprise: 'Digital Insights Inc',
            poste: 'Consultant Data Junior',
            periode: 'Juin 2023 - Décembre 2023',
            missions: [
                'Audit de qualité des données client',
                'Mise en place de pipelines de traitement de données',
                'Formation des équipes aux outils d\'analyse',
                'Optimisation des requêtes SQL pour performance'
            ]
        }
    ],
    '2022': [
        {
            entreprise: 'StartupIA',
            poste: 'Data Analyst Stagiaire',
            periode: 'Septembre 2022 - Mai 2023',
            missions: [
                'Collecte et exploration de données pour les modèles ML',
                'Création de visualisations pour les présentations',
                'Support sur projets de machine learning',
                'Tests de qualité et validation des modèles'
            ]
        }
    ]
};

/**
 * Dictionnaire des projets par catégorie
 * Structure: { titre, description, image, lien }
 */
const PROJETS = {
    'data-analysis': [
        {
            titre: 'Analyse de données Covid-19',
            description: 'Exploration et visualisation avancée des données pandémiques',
            image: 'https://via.placeholder.com/350x200.png?text=Analyse+Covid',
            lien: 'https://github.com/example/covid-analysis'
        },
        {
            titre: 'Analyse Financière',
            description: 'Étude des séries temporelles et tendances du marché',
            image: 'https://via.placeholder.com/350x200.png?text=Analyse+Financiere',
            lien: 'https://github.com/example/financial-analysis'
        },
        {
            titre: 'Analytics E-commerce',
            description: 'Comportement client et optimisation des conversions',
            image: 'https://via.placeholder.com/350x200.png?text=Statistiques+E-commerce',
            lien: 'https://github.com/example/ecommerce-analytics'
        }
    ],
    'ml': [
        {
            titre: 'Prédiction de Churn',
            description: 'Modélisation de l\'attrition client avec Scikit-learn',
            image: 'https://via.placeholder.com/350x200.png?text=Prediction+Churn',
            lien: 'https://github.com/example/churn-prediction'
        },
        {
            titre: 'Classification d\'Images',
            description: 'Reconnaissance d\'images avec Random Forest et XGBoost',
            image: 'https://via.placeholder.com/350x200.png?text=Classification+Images',
            lien: 'https://github.com/example/image-classification'
        },
        {
            titre: 'Clustering de Données',
            description: 'Segmentation client avec K-means et DBSCAN',
            image: 'https://via.placeholder.com/350x200.png?text=Clustering+Donnees',
            lien: 'https://github.com/example/clustering'
        }
    ],
    'deep-learning': [
        {
            titre: 'Détection d\'Objets',
            description: 'YOLOv5 pour la détection en temps réel',
            image: 'https://via.placeholder.com/350x200.png?text=Detection+Objets',
            lien: 'https://github.com/example/object-detection'
        },
        {
            titre: 'Génération de Texte RNN',
            description: 'LSTM pour la génération automatique de contenu',
            image: 'https://via.placeholder.com/350x200.png?text=RNN+Generation',
            lien: 'https://github.com/example/text-generation'
        },
        {
            titre: 'Computer Vision CNN',
            description: 'ResNet pour la classification d\'images avancée',
            image: 'https://via.placeholder.com/350x200.png?text=CNN+Vision',
            lien: 'https://github.com/example/computer-vision'
        }
    ],
    'ia-gen': [
        {
            titre: 'Chatbot IA Conversationnel',
            description: 'Assistant basé sur GPT et NLP avancé',
            image: 'https://via.placeholder.com/350x200.png?text=Chatbot+IA',
            lien: 'https://github.com/example/chatbot'
        },
        {
            titre: 'Générateur d\'Images IA',
            description: 'Stable Diffusion pour création d\'images génératives',
            image: 'https://via.placeholder.com/350x200.png?text=Generateur+Images',
            lien: 'https://github.com/example/image-generator'
        },
        {
            titre: 'Analyse de Sentiments IA',
            description: 'NLP pour analyse des avis clients avec transformers',
            image: 'https://via.placeholder.com/350x200.png?text=Analyse+Sentiments',
            lien: 'https://github.com/example/sentiment-analysis'
        }
    ]
};

/**
 * Initialisation au chargement du DOM
 */
document.addEventListener('DOMContentLoaded', function() {
    // Générer le contenu des expériences
    generateExperiencesContent();
    
    // Initialiser les interactions des expériences
    initExperiences();
    
    // Générer le contenu des onglets à partir des dictionnaires
    generateTechContent();
    
    // Générer les carrousels de projets
    generateProjectCarousels();
    
    // Initialiser les onglets Technologies
    initTabs();
    
    // Initialiser les carrousels Projets
    initProjectCarousels();
    
    // Initialiser l'animation du fond réseau de neurones
    initNeuralNetworkBackground();
});

/**
 * ============================================================================
 * GESTION DES EXPÉRIENCES PROFESSIONNELLES
 * ============================================================================
 */

/**
 * Génère dynamiquement le contenu de la section Expériences
 * Crée les listes d'années et les cartes d'expériences
 */
function generateExperiencesContent() {
    const yearsList = document.querySelector('.years-list');
    const detailsList = document.querySelector('.details-list');
    
    if (!yearsList || !detailsList) return;
    
    // Vider le contenu existant
    yearsList.innerHTML = '';
    detailsList.innerHTML = '';
    
    // Récupérer et trier les années en ordre décroissant
    const years = Object.keys(EXPERIENCES).sort((a, b) => b - a);
    
    // Générer les items années
    years.forEach((year, index) => {
        const yearItem = document.createElement('div');
        yearItem.className = index === 0 ? 'year-item active' : 'year-item';
        yearItem.textContent = year;
        yearItem.setAttribute('data-year', year);
        yearsList.appendChild(yearItem);
    });
    
    // Générer les cartes d'expériences pour la première année
    if (years.length > 0) {
        const firstYear = years[0];
        displayExperiencesForYear(firstYear);
    }
}

/**
 * Affiche les expériences pour une année donnée
 */
function displayExperiencesForYear(year) {
    const detailsList = document.querySelector('.details-list');
    if (!detailsList || !EXPERIENCES[year]) return;
    
    detailsList.innerHTML = '';
    
    EXPERIENCES[year].forEach(experience => {
        const card = document.createElement('div');
        card.className = 'experience-card';
        
        const missionsHTML = experience.missions
            .map(mission => `<li>${mission}</li>`)
            .join('');
        
        card.innerHTML = `
            <div class="experience-company">
                <i class="fas fa-building"></i>
                ${experience.entreprise}
            </div>
            <div class="experience-position">${experience.poste}</div>
            <div class="experience-period">
                <i class="fas fa-calendar"></i> ${experience.periode}
            </div>
            <ul class="experience-missions">
                ${missionsHTML}
            </ul>
        `;
        
        detailsList.appendChild(card);
    });
}

/**
 * Initialise les interactions de la section Expériences
 * Gère les clics sur les années
 */
function initExperiences() {
    const yearItems = document.querySelectorAll('.year-item');
    
    yearItems.forEach(item => {
        item.addEventListener('click', function() {
            // Retirer la classe active de tous les items
            yearItems.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            // Afficher les expériences de l'année sélectionnée
            const year = this.getAttribute('data-year');
            displayExperiencesForYear(year);
        });
    });
}

/**
 * ============================================================================
 * GESTION DES ONGLETS TECHNOLOGIES
 * ============================================================================
 */

/**
 * Génère dynamiquement le contenu des onglets Technologies à partir des dictionnaires
 * Cette fonction crée le HTML pour chaque tech-grid en bouclant sur les dictionnaires
 */
function generateTechContent() {
    // Mapping des onglets avec leurs dictionnaires respectifs
    const tabsData = {
        'langages': LANGAGES,
        'librairies': LIBRAIRIES,
        'ides': IDES
    };
    
    // Parcourir chaque onglet et générer le contenu
    Object.entries(tabsData).forEach(([tabId, techDict]) => {
        const tabElement = document.getElementById(tabId);
        
        if (tabElement) {
            // Récupérer ou créer le tech-grid
            let techGrid = tabElement.querySelector('.tech-grid');
            if (!techGrid) {
                techGrid = document.createElement('div');
                techGrid.className = 'tech-grid';
                tabElement.appendChild(techGrid);
            }
            
            // Vider le contenu existant
            techGrid.innerHTML = '';
            
            // Boucle pour créer les éléments technologie
            Object.entries(techDict).forEach(([name, icon]) => {
                const techItem = document.createElement('div');
                techItem.className = 'tech-item';
                techItem.innerHTML = `
                    <i class="${icon}"></i>
                    <span>${name}</span>
                `;
                techGrid.appendChild(techItem);
            });
        }
    });
}

/**
 * Initialise les onglets interactifs de la section Technologies
 */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Ajouter un écouteur d'événement sur chaque bouton d'onglet
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Désactiver tous les onglets
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Activer l'onglet cliqué
            this.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

/**
 * ============================================================================
 * GESTION DES CARROUSELS DE PROJETS
 * ============================================================================
 */

/**
 * Génère dynamiquement les carrousels de projets à partir du dictionnaire PROJETS
 * Cette fonction crée le HTML pour chaque carousel en bouclant sur les catégories
 * Les cartes sont cliquables et redirigent vers le lien du projet
 */
function generateProjectCarousels() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    
    if (carouselWrapper) {
        // Vider le contenu existant
        carouselWrapper.innerHTML = '';
        
        // Boucle sur chaque catégorie de projets
        Object.entries(PROJETS).forEach(([categoryId, projects]) => {
            // Créer le conteneur du carousel
            const carousel = document.createElement('div');
            carousel.className = categoryId === 'data-analysis' ? 'carousel active' : 'carousel';
            carousel.id = categoryId;
            
            // Créer le conteneur des cartes (grille au lieu de carousel)
            const carouselContainer = document.createElement('div');
            carouselContainer.className = 'carousel-container';
            
            // Boucle sur chaque projet de la catégorie
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.style.cursor = 'pointer';
                projectCard.innerHTML = `
                    <div class="card-image">
                        <img src="${project.image}" alt="${project.titre}">
                    </div>
                    <div class="card-body">
                        <h3>${project.titre}</h3>
                        <p>${project.description}</p>
                    </div>
                `;
                
                // Ajouter le gestionnaire de clic pour rediriger vers le lien
                projectCard.addEventListener('click', function() {
                    window.open(project.lien, '_blank');
                });
                
                carouselContainer.appendChild(projectCard);
            });
            
            carousel.appendChild(carouselContainer);
            carouselWrapper.appendChild(carousel);
        });
    }
}

/**
 * Initialise les carrousels horizontaux de la section Projets
 */
function initProjectCarousels() {
    const categoryButtons = document.querySelectorAll('.project-category-btn');
    const carousels = document.querySelectorAll('.carousel');
    
    // Ajouter un écouteur d'événement sur chaque bouton de catégorie
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-category');
            
            // Désactiver tous les carrousels
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            carousels.forEach(carousel => carousel.classList.remove('active'));
            
            // Activer le carrousel cliqué
            this.classList.add('active');
            document.getElementById(categoryId).classList.add('active');
        });
    });
    
    // Initialiser le défilement fluide des carrousels
    setupCarouselScrolling();
}

/**
 * Configure le défilement fluide pour les carrousels avec clavier et souris
 */
function setupCarouselScrolling() {
    const carouselContainers = document.querySelectorAll('.carousel-container');
    
    carouselContainers.forEach(container => {
        // Support du défilement à la roulette horizontale
        container.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
                // Défilement vertical normal
                return;
            }
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        });
    });
}

/**
 * ============================================================================
 * ANIMATION DU FOND RÉSEAU DE NEURONES
 * ============================================================================
 */

/**
 * Initialise et anime le fond avec un réseau de neurones utilisant Canvas
 */
function initNeuralNetworkBackground() {
    const canvas = document.getElementById('neural-network-bg');
    const ctx = canvas.getContext('2d');
    
    // Configuration du canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    
    // Écouter les changements de taille de fenêtre
    window.addEventListener('resize', resizeCanvas);
    
    // Configuration des nœuds du réseau
    const config = {
        nodeCount: 40,           // Nombre de nœuds/neurones
        connectionDistance: 200, // Distance max pour lier deux nœuds
        nodeRadius: 2.5,        // Rayon des nœuds
        nodeColor: '#1de9b6',   // Couleur primaire (vert émeraude)
        linkColor: 'rgba(124, 77, 255, 0.25)', // Couleur des liaisons (violet)
        nodeSpeed: 0.5,         // Vitesse de déplacement des nœuds
    };
    
    // Tableau contenant tous les nœuds
    let nodes = [];
    
    /**
     * Crée les nœuds initiaux du réseau
     */
    function createNodes() {
        nodes = [];
        for (let i = 0; i < config.nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                // Vitesse aléatoire entre -speed et +speed
                vx: (Math.random() - 0.5) * config.nodeSpeed,
                vy: (Math.random() - 0.5) * config.nodeSpeed,
            });
        }
    }
    
    /**
     * Dessine les liaisons entre nœuds proches
     */
    function drawConnections() {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Si la distance est inférieure au seuil, tracer une ligne
                if (distance < config.connectionDistance) {
                    // Opacité inversement proportionnelle à la distance (pour l'effet de proximité)
                    const opacity = 1 - (distance / config.connectionDistance);
                    ctx.strokeStyle = `rgba(124, 77, 255, ${opacity * 0.3})`;
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    /**
     * Dessine tous les nœuds
     */
    function drawNodes() {
        for (let node of nodes) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, config.nodeRadius, 0, 2 * Math.PI);
            ctx.fillStyle = config.nodeColor;
            // Effet d'ombre lumineuse
            ctx.shadowColor = 'rgba(29, 233, 182, 0.5)';
            ctx.shadowBlur = 12;
            ctx.fill();
            ctx.shadowBlur = 0; // Réinitialiser l'ombre
        }
    }
    
    /**
     * Met à jour la position des nœuds pour créer le mouvement
     */
    function updateNodes() {
        for (let node of nodes) {
            node.x += node.vx;
            node.y += node.vy;
            
            // Rebondir sur les bords
            if (node.x < 0 || node.x > canvas.width) {
                node.vx *= -1;
                node.x = Math.max(0, Math.min(canvas.width, node.x));
            }
            if (node.y < 0 || node.y > canvas.height) {
                node.vy *= -1;
                node.y = Math.max(0, Math.min(canvas.height, node.y));
            }
        }
    }
    
    /**
     * Fonction d'animation principale (boucle d'animation)
     */
    function animate() {
        // Effacer le canvas
        ctx.fillStyle = 'rgba(15, 20, 25, 0)'; // Transparent
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Dessiner et mettre à jour
        drawConnections();
        drawNodes();
        updateNodes();
        
        // Continuer l'animation
        requestAnimationFrame(animate);
    }
    
    // Initialiser les nœuds et lancer l'animation
    createNodes();
    animate();
}

/**
 * ============================================================================
 * UTILITAIRES
 * ============================================================================
 */

/**
 * Smooth scroll support (bonus)
 * Quelques navigateurs n'ont pas le support du scroll-behavior en CSS
 */
if (!window.CSS || !window.CSS.supports || !window.CSS.supports('scroll-behavior', 'smooth')) {
    // Polyfill pour les anciens navigateurs
    document.documentElement.style.scrollBehavior = 'auto';
}

console.log('✓ Portfolio initialisé avec succès!');
