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



// Exo Class COMPTES BANCAIRES.

class CompteBancaire{
    constructor(titulaire, solde, decouvertAutorise = false){
        this.titulaire = titulaire;
        this.solde = solde;
        this.decouvertAutorise = decouvertAutorise;
   }

   retrait(montant) {
    if (montant <= this.solde) {
        this.solde -= montant;
        console.log(`Bonjour ${this.titulaire} ! Vous avez retiré ${montant}, nouveau solde : ${this.solde}`);
    } else {
        console.log(`Bonjour ${this.titulaire} ! Sorry, vous n'avez pas assez d'argent !`);
    }
}
    crediter(creditermontant){
        
        if(creditermontant > 0){
            this.solde =  this.solde + creditermontant ; 
            console.log(`Bonjour ${this.titulaire} ! Vous avez crédité ${creditermontant}, nouveau solde : ${this.solde}`);
        
        } else {
            console.log(`Veuillez choisir un montant supérieur à zéro`);
        }
   }

   virement(montant, client ){

    if (montant <= this.solde) {
        this.solde -= montant;
        CompteBancaire.solde += montant;
        console.log(`Bonjour ${this.titulaire} ! Vous avez viré ${montant} à ${client.titulaire}, nouveau solde : ${this.solde}`);
   } else {
        console.log(`Veuillez choisir un montant supérieur à zéro`);
        }
    }

    ajouterClient(titulaire){
           this.titulaire.push(titulaire);
        };

    afficherClient(){
        this.ajouterClient.forEach(client=> {
            console.log(`Titulaire: ${client.titulaire}, Solde: ${client.solde}`);
        });
    }
}


 let margot = new CompteBancaire('Margot', 1000, false);
let emilie = new CompteBancaire('Emilie', 2000000, false);

//compteBancaire.afficherClient();


margot.retrait(50);

margot.crediter(20);

emilie.virement(10, margot);

console.log(margot);


//Exercice Gestion d’un Magasin

class Produit{
    constructor(nom, prix, quantite){
        this.nom  = nom;
        this.prix = prix;
        this.quantite  = quantite;
    }

   disponible() {
    if (this.quantite > 0) {
        console.log(`Le produit ${this.nom} est dispo (quantité: ${this.quantite})`);
        return true;
    } else {
        console.log(`Le produit ${this.nom} n'est pas dispo (rupture de stock)`);
        return false;
        }
    }
}

class Magasin{
    constructor(){
        this.produits = []; 
    }

    ajouterProduit(produit){
        if ( produit.nom == this.produits.nom){
            console.log(`Le produit ${produit.nom} existe déjà dans le magasin.`);
        } else {
           this.produits.push(produit);
              console.log(`Le produit ${produit.nom} a été ajouté au magasin.`);
        };
    }

   chercherProduit(nom) {
    const produit = this.produits.find(p => p.nom === nom);
    if (produit) {
        console.log(`Le produit ${nom} a été trouvé dans le magasin :`, produit);
        return produit;
    } else {
        console.log(`Le produit ${nom} n'existe pas dans le magasin.`);
        return null;
    }
}
} 


let magasin = new Magasin();

let produit1 = new Produit('Ordinateur', 1000, 5);
console.log(produit1);


magasin.ajouterProduit(produit1);
magasin.chercherProduit('Ordinateur');
magasin.chercherProduit('Banane');
