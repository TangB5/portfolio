// Animation d'intro
gsap.to("#intro", { opacity: 0, duration: 1.5, delay: 1, onComplete: () => { document.getElementById("intro").remove(); } });
gsap.to(".profile-img", { opacity: 1, duration: 1.5, delay: 1.5 });
gsap.from(".hero h2", { opacity: 0, y: -20, duration: 1.5, delay: 1.8 });
gsap.from(".hero p", { opacity: 0, y: 20, duration: 1.5, delay: 2 });
gsap.from(".hero a", { opacity: 0, scale: 0.8, duration: 1.5, delay: 2.2 });

gsap.from("#intro h1", {
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
  });
  
  gsap.to("#intro", {
    scale: 1.1,
    opacity: 0,
    duration: 2,
    delay: 2,
    ease: "power3.inOut",
    onComplete: () => {
      document.getElementById("intro").remove();
    }
  });
  
var typed = new Typed(".typed-text", {
    strings: ["Developer", "Designer", "Freelancer", "CyberSmartNova237"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
// Animation de constellation
// Effet de particules
particlesJS("particles-js", {
    particles: {
      number: { value: 150 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.8,
        random: false
      },
      size: {
        value: 4,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 0.8
      },
      move: {
        enable: true,
        speed: 2
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
  
  const canvas = document.getElementById("intro-canvas");
    const ctx = canvas.getContext("2d");
    let width, height;
    let shapes = [];

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function createShapes(count) {
      for (let i = 0; i < count; i++) {
        shapes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 30 + 10,
          speedX: (Math.random() - 0.5) * 1.2,
          speedY: (Math.random() - 0.5) * 1.2,
          angle: Math.random() * Math.PI * 2,
          type: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)],
          opacity: Math.random() * 0.5 + 0.3
        });
      }
    }

    function drawShape(shape) {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.angle);
      ctx.globalAlpha = shape.opacity;

      ctx.beginPath();
      if (shape.type === "circle") {
        ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
      } else if (shape.type === "square") {
        ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
      } else if (shape.type === "triangle") {
        ctx.moveTo(0, -shape.size / 2);
        ctx.lineTo(-shape.size / 2, shape.size / 2);
        ctx.lineTo(shape.size / 2, shape.size / 2);
        ctx.closePath();
      }
      ctx.strokeStyle = "#58a6ff";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      shapes.forEach((shape) => {
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.angle += 0.01;

        if (shape.x < 0 || shape.x > width) shape.speedX *= -1;
        if (shape.y < 0 || shape.y > height) shape.speedY *= -1;

        drawShape(shape);
      });

      requestAnimationFrame(animate);
    }

    createShapes(40);
    animate();

    setTimeout(() => {
      document.getElementById("geometric-intro")?.remove();
    }, 5000);


   // Affiche/masque le menu mobile
   const mobileBtn = document.getElementById('mobile-btn');
   const mobileMenu = document.getElementById('mobile-menu');
   const closeBtn = document.getElementById('close-btn');
 
   mobileBtn.addEventListener('click', () => {
     mobileMenu.classList.remove('-translate-x-full');
   });
   closeBtn.addEventListener('click', () => {
     mobileMenu.classList.add('-translate-x-full');
   });
 
  
      // Initialisation EmailJS
  (function(){
    emailjs.init("q6IgDJ3muT3FRhOPu"); // Ton User ID
  })();

  // Gestion de l’envoi du formulaire
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Afficher le spinner et masquer le texte du bouton
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('btn-text').classList.add('hidden');
    document.getElementById('loading-spinner').classList.remove('hidden');

    emailjs.sendForm('service_zaji9l8', 'template_v7q433h', this)
      .then(function() {
        // ✅ Succès : SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Envoyé !',
          text: 'Ton message a bien été envoyé.',
          confirmButtonText: 'OK'
        });
        // Réinitialiser le formulaire si besoin
        document.getElementById('contact-form').reset();
        // Réinitialiser l'état du bouton
        document.getElementById('submit-btn').disabled = false;
        document.getElementById('btn-text').classList.remove('hidden');
        document.getElementById('loading-spinner').classList.add('hidden');
      }, function(error) {
        // ⚠️ Erreur : SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Oups...',
          text: 'Une erreur est survenue. Réessaye plus tard.',
          footer: error.text || JSON.stringify(error)
        });
        // Réinitialiser l'état du bouton
        document.getElementById('submit-btn').disabled = false;
        document.getElementById('btn-text').classList.remove('hidden');
        document.getElementById('loading-spinner').classList.add('hidden');
      });
  });



