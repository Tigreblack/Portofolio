// loading.js

document.addEventListener('DOMContentLoaded', function () {
    let progressBar = document.querySelector('.progress');
    let width = 0;
    let interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            window.location.href = 'Site.html';
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 60); // Ajustez la vitesse de l'intervalle si nécessaire
});