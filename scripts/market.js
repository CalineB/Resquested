// Fonction pour récupérer les données du Bitcoin
async function fetchBitcoinData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();

        // Met à jour le prix et le pourcentage
        const price = data.bitcoin.usd.toFixed(2);
        const change = data.bitcoin.usd_24h_change.toFixed(2);

        // Retirer l'animation avant de mettre à jour les éléments du DOM
        const btcPriceElement = document.getElementById('btc-price');
        const btcChangeElement = document.getElementById('btc-change');

        // Ajouter la classe 'loaded' pour arrêter l'animation
        btcPriceElement.classList.add('loaded');
        btcChangeElement.classList.add('loaded');

        console.log('BTC Price Element Classes:', btcPriceElement.classList);
        console.log('BTC Change Element Classes:', btcChangeElement.classList);

        // Mettre à jour les éléments du DOM avec le prix et le changement
        btcPriceElement.textContent = `$${price}`;
        btcChangeElement.textContent = `${change}%`;

        // Change la couleur en fonction de la hausse/baisse
        if (change >= 0) {
            btcChangeElement.classList.add('positive');
            btcChangeElement.classList.remove('negative');
        } else {
            btcChangeElement.classList.add('negative');
            btcChangeElement.classList.remove('positive');
        }
    } catch (error) {
        console.error('Error fetching BTC data :', error);
    }
}

// Mettre à jour toutes les 3 secondes pour Bitcoin
setInterval(fetchBitcoinData, 3000);
fetchBitcoinData();


// Fonction pour récupérer les données de Solana
async function fetchSolanaData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();

        // Met à jour le prix et le pourcentage de changement
        const price = data.solana.usd.toFixed(2);
        const change = data.solana.usd_24h_change.toFixed(2);

        // Retirer l'animation avant de mettre à jour les éléments du DOM
        const solPriceElement = document.getElementById('sol-price');
        const solChangeElement = document.getElementById('sol-change');

        // Ajouter la classe 'loaded' pour arrêter l'animation
        solPriceElement.classList.add('loaded');
        solChangeElement.classList.add('loaded');

        // Mettre à jour les éléments du DOM avec le prix et le changement
        solPriceElement.textContent = `$${price}`;
        solChangeElement.textContent = `${change}%`;

        // Change la couleur en fonction de la hausse/baisse
        if (change >= 0) {
            solChangeElement.classList.add('positive');
            solChangeElement.classList.remove('negative');
        } else {
            solChangeElement.classList.add('negative');
            solChangeElement.classList.remove('positive');
        }
    } catch (error) {
        console.error('Error fetching Solana data :', error);
    }
}

// Mettre à jour toutes les 3 secondes pour Solana
setInterval(fetchSolanaData, 3000);
fetchSolanaData();
