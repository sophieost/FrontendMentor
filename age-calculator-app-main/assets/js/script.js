let submit = document.querySelector('#submit');
let inputDays = document.querySelector('#days');
let inputMonths = document.querySelector('#months');
let inputYears = document.querySelector('#years');

let errorDays = document.getElementById('errorDays');
let errorMonths = document.getElementById('errorMonths');
let errorYears = document.getElementById('errorYears');

let regexDays = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
let regexMonths = /^(0[1-9]|1[0-2])$/;
let regexYears = /^(19|20)\d{2}$/;


submit.addEventListener('click', (e) => {
    e.preventDefault();

    // la valeur des champs
    let valueDays = inputDays.value.trim();
    let valueMonths = inputMonths.value.trim();
    let valueYears = inputYears.value.trim();

    let donnees = [valueDays, valueMonths, valueYears];

    if (donnees.includes('')) {
        errorDays.innerHTML += "<p>Tous les champs sont requis</p>";
        errorMonths.innerHTML += "<p>Tous les champs sont requis</p>";
        errorYears.innerHTML += "<p>Tous les champs sont requis</p>";
        errorDays.classList.add('error1');
        errorMonths.classList.add('error2');
        errorYears.classList.add('error3');
    } else {
        errorDays.innerHTML = '';
        errorMonths.innerHTML = '';
        errorYears.innerHTML = '';

    } if (!regexDays.test(valueDays)) {
        // le point d'exclamation pour dire NOT donc si la condition inverse est vérifiée on affiche le message d'erreur
        errorDays.innerHTML += "<p>Entrez une date valide</p>";
        errorDays.classList.add('error1');
    } if (!regexMdp.test(valueMonths)) {
        errorMonths.innerHTML += "<p>Entrez une date valide</p>";
        errorMonths.classList.add('error2');
    } if (!regexMdp.test(valuePassword)) {
        errorYears.innerHTML += "<p>Entrez une date valide</p>";
        errorYears.classList.add('error3');

    }


    // Obtenir la date actuelle
    var date = new Date();
    var jourActuel = date.getDate();
    var moisActuel = date.getMonth() + 1; // Les mois sont indexés à partir de 0
    var anneeActuelle = date.getFullYear();
    
    // Calculer l'âge
    var age = anneeActuelle - annee;
    if (moisActuel < mois || (moisActuel == mois && jourActuel < jour)) {
        age--;
    }

    document.querySelector('.span1').innerHTML = `${age}`;
})

