gsap.registerPlugin(ScrollTrigger);

// Animation de fondu
gsap.utils.toArray(".container_timeline").forEach((section, index) => {
    gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        { 
            opacity: 1,
            y: 0, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%", 
                //markers: true, // Facultatif pour déboguer
            }
        }
    );
});

gsap.utils.toArray(".veille_container").forEach((section, index) => {
    gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        { 
            opacity: 1,
            y: 0, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 90%", 
                //markers: true, // Facultatif pour déboguer
            }
        }
    );
});

