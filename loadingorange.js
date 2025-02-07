// loading.js

document.addEventListener('DOMContentLoaded', function () {
    let progressBar = document.querySelector('.progress');
    let plane = document.getElementById('plane');
    let progressBarContainer = document.querySelector('.progress-bar').offsetWidth;
    let progressBarWidth = progressBarContainer.offsetWidth;
    let planeWidth = plane.offsetWidth;
    let width = 0;
    let interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            window.location.href = 'Orange_Caraibes.html';
        } else {
            width++;
            progressBar.style.width = width + '%';
            plane.style.right = `${87 - width}%`; // Positionner l'avion au bout de la barre
        }
        }
    , 55); // Ajustez la vitesse de l'intervalle si nécessaire
});
