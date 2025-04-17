// loading V4 (test-prod)
// 10/02/2025 - Test Portofolio V4 (loading)
// DODE Lucas - 2025 - all right deserved

document.addEventListener('DOMContentLoaded', function (){
    let progressBar = document.querySelector('.progress');
    let progressBarContainer = document.querySelector('.progress-bar').offsetWidth;
    let width = 0;
    // settings

    let interval = setInterval(function(){
        if (width >= 100) {
            clearInterval(interval);
            window.location.href = '../orange_caraibes.html'; // set site location here

        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 45); // vitesse d'intervale à modifier in case
});
