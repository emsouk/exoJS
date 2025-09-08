monInput = document.querySelector('.input');
monMdp = document.querySelector('.mdp');
console.log(monMdp);
const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; 
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

document.addEventListener('keyup', () => {
    if (regexMail.test(monInput.value)) {
        console.log('Email valide');
        monInput.style.border = '2px solid green';
    } else {
        console.log('Email non valide');
        monInput.style.border = '2px solid pink';
    }
});

document.addEventListener('keyup', () => {
    if (monMdp.value.length >= 4 && charDecimal.test(monMdp.value) && charSpecial.test(monMdp.value)) {
        console.log('Mot de passe valide');
        monMdp.style.border = '2px solid green';
    } else {
        console.log('Mot de passe non valide');
        monMdp.style.border = '2px solid pink';
    }
});