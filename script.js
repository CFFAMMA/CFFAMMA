const car = document.querySelector('.anim-car');
const accueilSection = document.querySelector('#accueil');
const screenWidth = window.innerWidth; // Largeur de l'écran

window.addEventListener('scroll', function() {
    const accueilRect = accueilSection.getBoundingClientRect(); // Position de la section Accueil
    const isInView = accueilRect.top < window.innerHeight && accueilRect.bottom > 0; // Vérifie si l'Accueil est visible

    if (isInView) {
        
        car.style.transform = 'translateX(200px)'; // Voiture s'arrête à 200px de son point de départ
    } else if (accueilRect.top < 0) {
       
        car.style.transform = `translateX(${screenWidth}px)`; // Voiture sort de l'écran
    } else {
        
        car.style.transform = 'translateX(0)'; // Revient de la gauche
    }
});


function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return false;
    }

    alert("Message envoyé !");
    return true;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}



let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function updateCards() {
    // Réinitialise toutes les cartes
    cards.forEach((card, index) => {
        card.classList.remove('active'); // Retire la classe active
        if (index >= currentIndex && index < currentIndex + 3) {
            card.classList.add('active'); // Ajoute la classe active aux trois cartes suivantes
        }
    });

    // Met à jour l'index pour la prochaine animation
    currentIndex += 3;
    if (currentIndex >= totalCards) {
        currentIndex = 0; // Réinitialise l'index lorsque toutes les cartes ont été affichées
    }
}

// Change les cartes toutes les 3 secondes
setInterval(updateCards, 3000);

