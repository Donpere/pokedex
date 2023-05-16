// on importe le module react depuis le module react
import React from 'react';
// on type en App le module react

// puis FC pour Function Components,
// on va ainsi pouvoir ecrire les composants sous forme de fonctions
// c'est le plus recommande, meme si plus limite 
// (mais on pourrait les ecrire sous forme de classe)

// le fait de typer en const, permet de creer des fonctions flechees
// Les fonctions fléchées --SUR 1 LIGNE-- 
// n’ont pas besoin du couple d’accolades
// classique aux fonctions pour fonctionner et 
// n’ont pas besoin non plus d’une expression return 
// puisque celles-ci vont automatiquement évaluer 
// l’expression à droite du signe => et retourner son résultat.

// De plus, la fonction fléchée n’a besoin que d’un argument pour fonctionner, 
// alors on pourra également omettre le couple de parenthèses.

// lorsqu’on écrit une fonction fléchée sur --PLUSIEURS LIGNES--, 
// alors notre fonction va à nouveau avoir besoin du 
// traditionnel couple d’accolades ainsi 
// qu’on précise explicitement une instruction return 
// dans le cas où l’on souhaite que la fonction retourne une valeur
const App: React.FC = () => {
 const name: String = 'React';
	
 return (
  <h1>Hello, {name} !</h1>
 )
}
  
export default App;