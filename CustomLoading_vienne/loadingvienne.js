// loading.js

document.addEventListener('DOMContentLoaded', function () {
    let progressBar = document.querySelector('.progress');
    let train = document.getElementById('train');
    let progressBarContainer = document.querySelector('.progress-bar').offsetWidth;
    let progressBarWidth = progressBarContainer.offsetWidth;
    let trainWidth = train.offsetWidth;
    let width = 0;
    let interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            window.location.href = 'BAC_BTS.html';
        } else {
            width++;
            progressBar.style.width = width + '%';
            train.style.right = `${89 - width}%`; // Positionner l'avion au bout de la barre
        }
        }
    , 55); // Ajustez la vitesse de l'intervalle si nécessaire
});
