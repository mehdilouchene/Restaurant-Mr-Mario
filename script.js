// Attendre que le DOM soit prêt
$(document).ready(function () {
    // Fonction pour basculer la visibilité du menu
    function toggleMenu() {
        $("#navbar ul").toggleClass("show");
        $(".header .content").toggleClass("hide");
    }

    // Basculer le menu mobile lors du clic sur l'icône de menu
    $("#menu-icon").click(function () {
        toggleMenu();
    });

    // Défilement fluide pour les liens d'ancrage
    $("#navbar ul li a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                    // Masquer le menu sur mobile après avoir cliqué sur un lien
                    toggleMenu();
                    // Afficher la présentation après avoir masqué le menu
                    $(".header .content").removeClass("hide");
                }
            );
        }
    });
});

//-----------------------------------le menu ------------------//

// Fonction pour basculer la visibilité du menu
function basculerMenu() {
    $("#navbar ul").toggleClass("show");
    $(".header .content").toggleClass("hide");
}

// Fonction pour gérer la navigation responsive
function gestionNavigationResponsive() {
    if ($(window).width() <= 768) { 
        $("#navbar ul").addClass("show");
    } else {
        $("#navbar ul").removeClass("show");
    }
}

// Basculez le menu mobile lorsque l'icône du menu est cliquée
$("#menu-icon").click(function () {
    basculerMenu();
});

// Défilement fluide pour les liens d'ancrage
$("#navbar ul li a").on("click", function (event) {
});

// Gérer la navigation responsive lors du redimensionnement de la fenêtre
$(window).resize(function () {
    gestionNavigationResponsive();
});

// Gestion initiale de la navigation responsive au chargement de la page
$(document).ready(function () {
    gestionNavigationResponsive();
});

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll('.menu-item button');
    var panierTotal = document.getElementById('panier-total');
    var viderPanierButton = document.getElementById('vider-panier');
    var panier = [];

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var itemPrice = parseFloat(this.parentNode.querySelector('.prix').innerText.replace('$', ''));

            // Ajouter le prix de l'article au panier
            panier.push(itemPrice);

            // Mettre à jour le total du panier
            calculerTotal();
        });
    });

    // Fonction pour calculer et mettre à jour le total du panier
    function calculerTotal() {
        var total = panier.reduce(function (acc, itemPrice) {
            return acc + itemPrice;
        }, 0);

        panierTotal.textContent = total.toFixed(2) + '$';
    }

    // Ajouter un gestionnaire d'événements pour vider le panier
    viderPanierButton.addEventListener('click', function () {
        // Vider le panier
        panier = [];

        // Réinitialiser le total du panier
        calculerTotal();
    });
});


//------------------------------ contact----------------//
$(document).ready(function() {
    // Fonction de validation du formulaire
    $("form").submit(function(e) {
        e.preventDefault();

        // Récupération des valeurs des champs
        var nom = $("input[name='nom']").val();
        var email = $("input[name='email']").val();
        var sujet = $("input[placeholder='Votre Sujet']").val();
        var message = $("textarea[name='message']").val();

        // Expression régulière pour vérifier le nom (pas de chiffres ni de lettres)
        var nomRegex = /^[^\d]+$/;

        // Expression régulière pour vérifier le format de l'email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation du nom
        if (!nomRegex.test(nom)) {
            alert("Veuillez entrer un nom valide (pas de chiffres ni de lettres).");
            return;
        }

        // Validation de l'email
        if (!emailRegex.test(email)) {
            alert("Veuillez entrer une adresse e-mail valide.");
            return;
        }

        // Validation du sujet
        if (sujet.trim() === "") {
            alert("Veuillez entrer un sujet.");
            return;
        }

        // Validation du message
        if (message.trim() === "") {
            alert("Veuillez entrer un message.");
            return;
        }

        // Si toutes les validations sont réussies, afficher un message de confirmation
        alert("Formulaire envoyé avec succès !");

        // Réinitialiser le formulaire
        this.reset();
    });
});





//-------------------------Inscription-------------------//

$(document).ready(function () {

    $("form").submit(function (event) {
        event.preventDefault();

        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var email = $("#email").val();
        var motDePasse = $("#mot-de-passe").val();
        var confirmMotDePasse = $("#confirm-mot-de-passe").val();
        var genre = $("input[name='genre']:checked").val();

        // Validation des champs
        if (nom === "" || prenom === "" || email === "" || motDePasse === "" || confirmMotDePasse === "" || !genre) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        // Validation de l'email avec une expression régulière simple
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Veuillez entrer une adresse e-mail valide.");
            return;
        }

        // Validation du nom et du prénom (pas de chiffres ni de symboles)
        var nameRegex = /^[a-zA-Z]+$/;
        if (!nameRegex.test(nom) || !nameRegex.test(prenom)) {
            alert("Le nom et le prénom ne doivent contenir que des lettres.");
            return;
        }

        // Validation du mot de passe (au moins une majuscule, une minuscule et un symbole)
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!passwordRegex.test(motDePasse)) {
            alert("Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un symbole, et doit avoir une longueur minimale de 8 caractères.");
            return;
        }

        if (motDePasse !== confirmMotDePasse) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }
        else{
            alert("Votre inscription a été réussie !");
        }


        console.log("Nom: " + nom);
        console.log("Prénom: " + prenom);
        console.log("Email: " + email);
        console.log("Mot de passe: " + motDePasse);
        console.log("Genre: " + genre);


        $("form")[0].reset();
    });
});
