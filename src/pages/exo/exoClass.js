// Exo Class IMC

class Imc{
    constructor(nom, poids, taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }

    calculImc(){
        return this.poids / (this.taille * this.taille);
    }

    displayImc(){
        const imc = this.calculImc();
        console.log(`L'IMC de ${this.nom} est ${imc}`);
    }
}

let list = [
    new Imc('Jean', 70, 1.75),
    new Imc('Marie', 60, 1.65),
    new Imc('Paul', 80, 1.80)
];

list.forEach(personne => {
    personne.displayImc();
}); 

export { Imc };
// import { Imc } from './exoClass.js';
// let personne1 = new Imc('Jean', 70, 1.75);
// personne1.displayImc();

// Exo Class PME

class Employe{
    constructor(nom, prenom, age, salairemensuel){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salairemensuel = salairemensuel;
    }

    calculSalaireAnnuel(n = 12, charges = 0.90){
        return this.salairemensuel * 12;
    }

   
}


class Pme{ 
    constructor(nom, adresse){
        this.nom = nom;
        this.adresse = adresse;
        this.employes = [];
    }

    ajouterEmploye(employe){
        this.employes.push(employe);
    }

    afficherEmployes(){
        this.employes.forEach(employe => {
            console.log(`${employe.prenom} ${employe.nom}, Age: ${employe.age}, Salaire Annuel: ${employe.calculSalaireAnnuel()}€`);
        });
    }

}

let pme = new Pme('Tech Solutions', '123 Rue de la Paix');

let emp1 = new Employe('Dupont', 'Jean', 30, 4000);
let emp2 = new Employe('Martin', 'Marie', 28, 2000);
let emp3 = new Employe('Durand', 'Paul', 35, 3000);

pme.ajouterEmploye(emp1);
pme.ajouterEmploye(emp2);
pme.ajouterEmploye(emp3);

pme.afficherEmployes();

export { Employe, Pme };