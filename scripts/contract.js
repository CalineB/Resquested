    // Ajout de l'écouteur d'événements au chargement du DOM pour s'assurer que tout est prêt
    document.addEventListener("DOMContentLoaded", function() {
        const contractTextElement = document.getElementById('address');
        
        // Vérification que l'élément existe avant d'ajouter l'événement
        if (contractTextElement) {
            contractTextElement.addEventListener('click', function() {
                const contractAddress = document.getElementById('address').innerText;
                
                // Vérification si l'adresse du contrat existe
                if (contractAddress) {
                    // Utilisation de la Clipboard API pour copier le texte
                    navigator.clipboard.writeText(contractAddress).then(function() {
                        // Message de succès
                        alert('Address copy !');
                    }).catch(function(error) {
                        // Si une erreur se produit lors de la copie
                        console.error('Échec de la copie: ', error);
                        alert('Échec de la copie, veuillez réessayer.');
                    });
                } else {
                    console.error('L\'adresse du contrat est introuvable.');
                }
            });
        } else {
            console.error('L\'élément contract-text n\'a pas été trouvé.');
        }
    });
