
/*document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myPieChart').getContext('2d');
    
    const data = {
        labels: [
            'Liquidity (20%)',
            'Marketing (20%)',
            'Community airdrop (30%)',
            'Futur development(10%)',
            'Team (5%)',
            'DAO Reserve (5%)',
            'Partners (10%)'
        ],
        datasets: [{
            label: 'Distribution des Tokens',
            data: [20, 20, 30, 10, 5, 5, 10], // Valeurs en pourcentage
            backgroundColor: [
                '#FF5733', // Liquidité
                '#33FF57', // Marketing
                '#3357FF', // Communauté
                '#FF33A1', // Développement futur
                '#57FF33', // Équipe
                '#A133FF', // Réserve DAO
                '#FF8C33'  // Partenariats
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },

            }
        }
    };

    // Crée le graphique
    new Chart(ctx, config);
});
*/

/*
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myPieChart').getContext('2d');
    const totalTokens = 1000000000; // 1 milliard de jetons

    // Calculer la quantité de jetons pour chaque section
    const tokenQuantities = [
        totalTokens * 0.20, // Liquidity
        totalTokens * 0.20, // Marketing
        totalTokens * 0.30, // Community airdrop
        totalTokens * 0.10, // Future development
        totalTokens * 0.05, // Team
        totalTokens * 0.05, // DAO Reserve
        totalTokens * 0.10  // Partners
    ];

    // Configurer les labels avec les quantités de jetons
    const data = {
        labels: [
            'Liquidity 20%',
            'Marketing 20%',
            'Community airdrop 30%',
            'Futur development 10%',
            'Team 5%',
            'DAO Reserve 5%',
            'Partners 10%'
        ],
        datasets: [{
            label: 'Token Distribution',
            data: [20, 20, 30, 10, 5, 5, 10], // Pourcentages
            backgroundColor: [
                '#7767b6', // Liquidity -
                '#ff0000', // Marketing -
                '#b754d4', // Community -
                '#ffb2d3', // Future Development -
                '#7f0000', // Team -
                '#ff7da3', // DAO Reserve -
                '#415e9a'  // Partners -
            ],
            hoverBackgroundColor: [
                '#6c0880', // Liquidity
                '#6c0880', // Marketing
                '#6c0880', // Community
                '#6c0880', // Future Development
                '#6c0880', // Team
                '#6c0880', // DAO Reserve
                '#6c0880'  // Partners
            ],
            hoverOffset: 18
        }]
    };

    const config = {
        type: 'pie',  // Nous utilisons un camembert ici
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            // Afficher la quantité de jetons au lieu du pourcentage dans les tooltips
                            const index = tooltipItem.dataIndex;
                            const quantity = tokenQuantities[index].toLocaleString(); // Formatage avec des virgules
                            return `${quantity} tokens`;
                        }
                    }
                },
                datalabels: {
                    color: 'white', // Couleur des pourcentages
                    font: {
                        weight: 'bold',
                        size: 4
                    },
                    formatter: function(value, context) {
                        // Afficher le pourcentage à côté des segments
                        return `${value}%`; // Afficher le pourcentage
                    },
                    anchor: 'center', // Positionner les labels au centre
                    align: 'center'  // Alignement des labels
                }
            }
        }
    };

    // Crée le graphique
    const chart = new Chart(ctx, config);

    const container = document.createElement('div');
    container.className = 'percent';

        // Créer les rectangles sous le graphique
        data.labels.forEach((label, index) => {
            const span = document.createElement('span');
            span.textContent = `${label}`;
            span.style.backgroundColor = data.datasets[0].backgroundColor[index]; // Couleur du rectangle
            span.style.display = 'block';
            span.style.margin = '5px 0';
            span.style.padding = '5px';
            span.style.cursor = 'pointer'; 
            
            span.addEventListener('mouseenter', () => {
                chart.setActiveElements([
                    { datasetIndex: 0, index: index } // Activer le segment correspondant
                ]);
                chart.update(); // Mettre à jour l'effet de hover
            });
    
            span.addEventListener('mouseleave', () => {
                chart.setActiveElements([]); // Désactiver tous les segments
                chart.update();
            });
            
            container.appendChild(span);
        });
    
        // Ajouter au DOM
        document.querySelector('.tokenomics').appendChild(container);
});
*/


document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myPieChart').getContext('2d');
    const totalTokens = 7777777777; // 7 milliard de jetons


    const canvas = document.getElementById('myPieChart');
if (!canvas) {
    console.error('Canvas element not found!');
    return;
}

    const tokenQuantities = [
        totalTokens * 0.15,  // Auto Burn (15%)
        totalTokens * 0.85   // Liquidity (85%)
    ];

    const data = {
        labels: [
            'Auto Burn 15%',
            'Liquidity 85%'
        ],
        datasets: [{
            label: 'Token Distribution',
            data: [15, 85],
            backgroundColor: [
                '#6c0880', // Auto Burn
                '#7767b6'  // Liquidity
            ],
            hoverBackgroundColor: [
                '#4b006b', // Auto Burn (hover)
                '#5e57a3'  // Liquidity (hover)
            ],
            hoverOffset: 18
        }]
    };

    const config = {
        type: 'pie', 
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {

                            const index = tooltipItem.dataIndex;
                            const quantity = tokenQuantities[index].toLocaleString(); // Formatage avec des virgules
                            return `${quantity} tokens`;
                        }
                    }
                },
                datalabels: {
                    color: 'white', 
                    font: {
                        weight: 'bold',
                        size: 16 
                    },
                    formatter: function(value, context) {

                        return `${value}%`; 
                    },
                    anchor: 'center', 
                    align: 'center'  
                }
            }
        }
    };

    const chart = new Chart(ctx, config);

    const container = document.createElement('div');
    container.className = 'percent';

    console.log(typeof Chart); // Devrait retourner "function" si Chart.js est chargé


    data.labels.forEach((label, index) => {
        const span = document.createElement('span');
        span.textContent = `${label}`;
        span.style.backgroundColor = data.datasets[0].backgroundColor[index]; 
        span.style.display = 'block';
        span.style.margin = '5px 0';
        span.style.padding = '5px';
        span.style.cursor = 'pointer'; 
        
        span.addEventListener('mouseenter', () => {
            chart.setActiveElements([
                { datasetIndex: 0, index: index } 
            ]);
            chart.update(); 
        });

        span.addEventListener('mouseleave', () => {
            chart.setActiveElements([]);
            chart.update();
        });
        
        container.appendChild(span);
    });

    // Ajouter au DOM
    document.querySelector('.tokenomics').appendChild(container);
});
