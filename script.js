var classe1 = [
{ nom: 'Pierre', age: 40, sexe: 'M' },
{ nom: 'Marie', age: 18, sexe: 'F' },
{ nom: 'Louise', age: 16 , sexe: 'F' },
{ nom: 'Damien', age: 55, sexe: 'M' },
{ nom: 'Louis', age: 19, sexe: 'M' }
];

var classe2 = [
{ nom: 'Elodie', age: 27, sexe: 'F' },
{ nom: 'Christophe', age: 48, sexe: 'M' },
{ nom: 'Aurelie', age: 32, sexe: 'F' },
{ nom: 'Jeanne', age: 15, sexe: 'F' },
{ nom: 'Martin', age: 77, sexe: 'M' },
{ nom: 'Eric', age: 18, sexe: 'M' },
{ nom: 'Jacques', age: 35, sexe: 'M' },
{ nom: 'Eric', age: 47, sexe: 'M' }
];

//1.2. Définissez une fonction nombreHomme( classe )
// qui retourne le nombre d'homme puis testez la en ligne de commande ( node script.js )
function nombreHomme(tableau){
	var homme = 0;
	for (var i = 0; i < tableau.length; i++) {
		if ("M" === tableau[i].sexe){
			homme ++;
		}
	}
	return parseInt(homme, 10);
}
console.log("dans le tableau classe1 il y a : " + nombreHomme(classe1) + " Hommes")
console.log("dans le tableau classe2 il y a : " + nombreHomme(classe2) + " Hommes")


//1.3. Définissez une fonction proportionHomme( classe ) qui renvoie le pourcentage d'homme dans la classe.
// Utiliser la fonction précédente

function proportionHomme(tableau){
	var nombrePersonne = tableau.length;
	var homme = nombreHomme(tableau)
	return 100 * parseInt(homme, 10) / parseInt(nombrePersonne, 10);
}
console.log("dans le tableau classe1 il y a : " + proportionHomme(classe1) + " % d'hommes");
console.log("dans le tableau classe2 il y a : " + proportionHomme(classe2) + " % d'hommes");


//1.4. Définissez une fonction proportionFemme( classe ) en vous servant de la fonction proportionHomme.

function proportionFemme(tableau){
	var homme = proportionHomme(tableau);
	return 100 - homme;
}
console.log("dans le tableau classe1 il y a : " + proportionFemme(classe1) + " % de femmes");
console.log("dans le tableau classe2 il y a : " + proportionFemme(classe2) + " % de femmes");

// 1.5. Définissez une fonction moyenneAge( classe ) 
// qui renvoie la moyenne d'age de la classe en tenant compte du sexe.

// function moyenneAge(tableau){
// 	//age homme
// 	var nbPersonne = tableau.length
// 	var nbHomme = nombreHomme(tableau)
// 	var nbFemme = nbPersonne - nbHomme
// 	var ageFemme = 0;
// 	var ageHomme = 0;
// 	var age = [];
// 	//boucle pour le calcule des age en fonction du sexe
// 	for (var i = 0; i < tableau.length; i++) {
// 		//Addition des ages des hommes dans la var ageHomme	
// 		if ("M" === tableau[i].sexe ){
// 			ageHomme += parseInt(tableau[i].age);
// 		}
// 		//Addition des ages des femme dans la var ageFemme
// 		else if ("F" === tableau[i].sexe ){
// 			ageFemme += parseInt(tableau[i].age);
// 		}
// 	}
// 	// age moyen des hommes dans l'index 0 du talbeau age
// 	 age.push(ageHomme / nbHomme);
// 	 // age moyen des femmes dans l'index 1 du talbeau age
// 	 age.push(ageFemme / nbFemme);
// 	 return age;
// }

// console.log("L'age moyen des hommes de la classe 1 et de : " + moyenneAge(classe1)[0] + " ans, et l'age moyen des femmes et de : " + moyenneAge(classe1)[1] + " ans")
// console.log("L'age moyen des hommes de la classe 2 et de : " + moyenneAge(classe2)[0] + " ans, et l'age moyen des femmes et de : " + moyenneAge(classe2)[1] + " ans")

// 1.5.BIS Définissez une fonction moyenneAge( classe ) 
// function moyenneAge(tableau){
// 	var age = 0;
// 	var nbPersonne = tableau.length
// 	for (var i = 0; i < tableau.length; i++) {
// 			age += parseInt(tableau[i].age);
// 	}
// 	return age / nbPersonne
// }
// console.log("L'age moyen de la classe 1 et de : " + moyenneAge(classe1) + " ans")
// console.log("L'age moyen de la classe 2 et de : " + moyenneAge(classe2) + " ans")

// 1.6. Modifiez la fonction précédente pour quelle puisse prendre en compte le sexe: 
// moyenneAge( classe, sexe = 'T'). L'argument sexe aura une valeur par défaut 'T' (pour Tous) 
// ainsi si l'argument est omis lors de l'appel de la fonction nous ferons une moyenne d'age sur tous 
// si non sur le sexe précisé. 
// Prévoyé un message d'erreur si la valeur passé à l'argument sexe est différente de T,M,F.

function moyenneAge(tableau, sexe){
	var nbPersonne = tableau.length
	var nbHomme = nombreHomme(tableau)
	var nbFemme = nbPersonne - nbHomme
	var ageFemme = 0;
	var ageHomme = 0;
	//boucle pour le calcule des age en fonction du sexe
	for (var i = 0; i < tableau.length; i++) {
		//Addition des ages des hommes dans la var ageHomme	
		if ("M" === tableau[i].sexe ){
			ageHomme += parseInt(tableau[i].age);
		}
		//Addition des ages des femme dans la var ageFemme
		if ("F" === tableau[i].sexe ){
			ageFemme += parseInt(tableau[i].age);
		}
	}
	// retourne age homme
	if (sexe === "M") {
		return ageHomme / nbHomme
	}
	// retourne age femme
	else if (sexe === "F") {
		return ageFemme / nbFemme
	}
	// retourne age globale
	else {
		return (ageHomme + ageFemme) / nbPersonne
	}


}
console.log("L'age moyen des hommes de la classe 1 et de : " + moyenneAge(classe1, "M") + " ans")
console.log("L'age moyen des femmes de la classe 1 et de : " + moyenneAge(classe1, "F") + " ans")
console.log("L'age moyen de la classe 1 et de : " + moyenneAge(classe1) + " ans")

console.log("L'age moyen des hommes de la classe 2 et de : " + moyenneAge(classe2, "M") + " ans")
console.log("L'age moyen des femmes de la classe 2 et de : " + moyenneAge(classe2, "F") + " ans")
console.log("L'age moyen de la classe 2 et de : " + moyenneAge(classe2) + " ans")

// 1.7. Définissez une fonction plusVieux( classe ) qui renvoie l'objet associé à la personne la plus vielle 
//  On part du principe que toutes les personnes ont un age différent)

function plusVieux(tableau){
	var age = [];
	for (var i = 0; i < tableau.length; i++) {
		age.push(parseInt(tableau[i].age));
	}

	return Math.max.apply(null, age);
}

console.log("le plus vieux de la classe 1 est : " + plusVieux(classe1))
console.log("le plus vieux de la classe 2 est : " + plusVieux(classe2))