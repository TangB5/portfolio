
  // Loader
  window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
  });

  // Dark mode toggle
  function toggleDarkMode() {
    const body = document.getElementById("body");
    if (body.classList.contains("bg-gray-900")) {
      body.classList.remove("bg-gray-900", "text-white");
      body.classList.add("bg-white", "text-gray-900");
    } else {
      body.classList.add("bg-gray-900", "text-white");
      body.classList.remove("bg-white", "text-gray-900");
    }
  }

  // Newsletter with EmailJS
  emailjs.init("TON_USER_ID_EMAILJS"); // Remplace ça par ton vrai User ID
  document.getElementById("newsletter-form").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("TON_SERVICE_ID", "TON_TEMPLATE_ID", this).then(function() {
      alert("Merci pour ton inscription !");
    }, function(error) {
      alert("Erreur : " + JSON.stringify(error));
    });
  });

// Fonction pour ouvrir le post dans un modal
function openPost(postId) {
    // Mettre à jour le contenu du modal avec le contenu correspondant
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = postContent[postId];
  
    // Afficher le modal
    document.getElementById("modal").classList.remove("hidden");
  
    // Animation GSAP
    gsap.from(".modal-content", { opacity: 0, y: 50, duration: 1 });
  }
  
  // Fonction pour fermer le modal
  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
  }
  

const postContent = {
    figma: `
      <h2 class="mb-4 text-2xl font-bold text-blue-400">Créer une maquette Figma comme un pro</h2>
      <p class="mb-4 text-gray-300">Découvre les bonnes pratiques pour structurer une maquette efficace :</p>
      <ul class="mb-4 text-gray-400 list-disc list-inside">
        <li>Utilise des grilles pour l’alignement</li>
        <li>Crée des composants pour les boutons, cartes, etc.</li>
        <li>Respecte une hiérarchie visuelle claire</li>
      </ul>
      <div class="p-4 bg-white rounded-lg shadow text-gray-800">
        <p><strong>Exercice :</strong> Crée une carte utilisateur avec photo, nom et bouton “Voir profil”.</p>
      </div>
      <script>
        gsap.from(".modal-content", { opacity: 0, y: 50, duration: 1 });
      </script>
    `,
    tailwind: `
      <h2 class="mb-4 text-2xl font-bold text-blue-400">Introduction à Tailwind CSS</h2>
      <p class="mb-4 text-gray-300">Tailwind CSS te permet de construire des interfaces sans écrire de CSS personnalisé :</p>
      <pre class="p-4 overflow-auto text-sm text-white bg-gray-900 rounded-lg">
  &lt;button class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"&gt;Clique-moi&lt;/button&gt;
      </pre>
      <p class="mt-4 text-gray-400">Chaque classe décrit une seule propriété. Cela permet de garder le HTML clair et rapide à ajuster.</p>
      <script>
        gsap.from(".modal-content", { opacity: 0, scale: 0.9, duration: 0.8 });
      </script>
    `,
    gsap: `
      <h2 class="mb-4 text-2xl font-bold text-blue-400">Animations Web avec GSAP</h2>
      <p class="text-gray-300 mb-2">GSAP permet d’animer facilement des éléments avec fluidité.</p>
      <button class="px-4 py-2 mb-4 text-white bg-green-500 rounded hover:bg-green-600" onclick="animateBox()">Animer la boîte</button>
      <div class="w-24 h-24 mb-4 bg-pink-500 rounded shadow-lg box"></div>
      <script>
        function animateBox() {
          gsap.to(".box", { y: -100, duration: 1, ease: "bounce.out" });
        }
        gsap.from(".modal-content", { opacity: 0, y: 50, duration: 1 });
      </script>
    `
  };
  