let currentIndex = 0;

function showCard(index) {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    if (index >= totalCards) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalCards - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 103; // Ajuster selon la largeur de la carte
    cards.forEach(card => {
        card.style.transform = `translateX(${offset}%) rotateY(${currentIndex * 1.5}deg)`;
    });
}

// Prochaine carte

function nextCard() {
    showCard(currentIndex + 1);
}

//Carte précèdente

function prevCard() {
    showCard(currentIndex - 1);
}

// Affichage
showCard(currentIndex);