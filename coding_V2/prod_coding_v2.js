document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le bouton par son ID
    const stmgButton = document.getElementById("STMG");

    // Ajouter un événement de clic sur le bouton
    stmgButton.addEventListener("click", function() {
        // Redirection vers une autre page
        window.location.href = "../Vienne_Select_screen/Vienne/loading/STMG/loading_stmg.html"; // Remplace "STMG.html" par ton propre fichier
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le bouton par son ID
    const btsButton = document.getElementById("BTSSIO");

    // Ajouter un événement de clic sur le bouton
    btsButton.addEventListener("click", function() {
        // Redirection vers une autre page
        window.location.href = "../Vienne_Select_screen/Vienne/loading/BTS SIO/loading_bts.html"; // Remplace "STMG.html" par ton propre fichier
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le bouton par son ID
    const stagesButton = document.getElementById("stages");

    // Ajouter un événement de clic sur le bouton
    stagesButton.addEventListener("click", function() {
        // Redirection vers une autre page
        window.location.href = "../STAGE_CV.html"; // Remplace "STMG.html" par ton propre fichier
    });
});

let TxtRotate = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = "";
	this.tick();
	this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function () {
	let i = this.loopNum % this.toRotate.length;
	let fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  
	let that = this;
	let delta = 300 - Math.random() * 100;
  
	if (this.isDeleting) {
	  delta /= 2;
	}
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === "") {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 500;
	}
  
	setTimeout(function () {
	  that.tick();
	}, delta);
  };
  
  window.onload = function () {
	let elements = document.getElementsByClassName("txt-rotate");
	for (let i = 0; i < elements.length; i++) {
	  let toRotate = elements[i].getAttribute("data-rotate");
	  let period = elements[i].getAttribute("data-period");
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }
	}
  };

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    
    const sections = gsap.utils.toArray('.container_timeline');

    sections.forEach((section) => {
        // Configuration initiale
        gsap.set(section.querySelector('.timeline-content'), {
            opacity: 0,
            y: 50
        });

        // Animation au scroll
        gsap.to(section.querySelector('.timeline-content'), {
            scrollTrigger: {
                trigger: section,
                start: "top center",
                end: "center center",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        });
    });
});
