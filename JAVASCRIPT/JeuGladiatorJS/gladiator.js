class Combattant {
    constructor(nom) {
        this.vie = Math.floor(Math.random() * 80) + 80;  
        this.precision = Math.random() * 0.5 + 0.5;
        this.nom = nom; 
        this.attaque = Math.floor(Math.random() * 10) + 10;
    }

    attaquer(adversaire) {
        if (this.testprecision()) {
            const degats = this.attaque ;
            adversaire.vie -= degats;
            console.log(
                this.nom + " attaque " + adversaire.nom + " et inflige " + degats + " points de dégâts ."
            );
        } else {
            console.log(this.nom + " a échoué son attque contre " + adversaire.nom + " .");
        }
    }

    testprecision() {
        return Math.random() < this.precision;
    }
}

const combattant1 = new Combattant("Le Lion");
const combattant2 = new Combattant("Le Gladiateur");

console.log("Stats des combattants :");
console.log(
    combattant1.nom +
        ", Attaque : " +
        combattant1.attaque +
        " Points de vie : " +
        combattant1.vie +
        ", Précision : " +
        combattant1.precision
);
console.log(
    combattant2.nom +
        ", Attaque : " +
        combattant2.attaque +
        " Points de vie : " +
        combattant2.vie +
        ", Précision : " +
        combattant2.precision
);

console.log("\nLE COMBAT COMMENCE !");
while (combattant1.vie > 0 && combattant2.vie > 0) {

    combattant1.attaquer(combattant2);

    if (combattant2.vie <= 0) {
        console.log(combattant2.nom + " s'est fait dévorer ! " + combattant1.nom + " a gagné !");
        break;
    }

    combattant2.attaquer(combattant1);

    if (combattant1.vie <= 0) {
        console.log(combattant1.nom + " est mort ! " + combattant2.nom + " a gagné !");
        break;
    }

    console.log(
        "Points de vie restants : " +
        combattant1.nom +
        " (" +
        combattant1.vie +
        ") - " +
        combattant2.nom +
        " (" +
        combattant2.vie +
        ")"
    );
}

console.log("LE COMBAT PREND FIN !");