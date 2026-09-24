/* reverseArrayInPlace. I min funktion så använder jag en array med värdena banan, äpple, druvor & päron. Jag säger att från vänster börja på 0 (banan) och från 
höger börja på (päron). Anledningen till minus 1 är för att vi har 0-3 i index (4) och 4 element. Så för att komma till index 3 så måste vi ta minus 1 på 
elementsiffran. Det skrivs olika men båda är fyra, element 1 2 3 4 och index 0 1 2 3. 
Sen säger funktionen till så länge vänster är mindre än höger fortsätt loopen. 
Vi sparar värdet längst till vänster i temp. (banan)
Sen säger vi att vänster är nu höger, så banan är nu päron. 
sen höger är nu temp betyder att banan nu har tagit päronets plats
Så nu har vi päron först och banan sist. 
Sen säger vi hoppa ett steg till mot mitten (både höger och vänster) och kör loopen igen. 
Då byter vi plats på äpple och druvor.
Sen är höger mindre än vänster och vi returnerar arrayen in till console log. */

function reverseArrayInPlace(myFruit) {
    let left = 0;
    let right = myFruit.length -1;

    while (left < right) {
        let temp = myFruit[left];

        myFruit[left] = myFruit[right];
        myFruit[right] = temp;

        left++;
        right--;
    }

    return myFruit;

}

console.log(reverseArrayPlace(["Banana", "apple", "grape", "pear"])) 

/* reverseArray. I funktionen så använder jag mina  exempelvärden banan, äpple, druvor och päron. 
Jag skapar en tom array för att det är dit jag vill att den ska skickas. Jag vill alltså inte att funktionen ska skriva över mina värden, jag vill att den skapar
en helt ny array. 
Så jag börjar let i = frutiy.length - 1; detta blir då sista index i min array (päron). 
är 3 större eller lika med 0? Ja kör in i push, första värdet i min nya array blir päron.
Tillbaka till loopen och kör minus på mitt index för att se nästa värdet. 3 - 1 = 2
Är 2 större eller lika med 0? Ja, värde nummer 2 är druvor. 
Sedan körs push. 
Så fortsätter det tills i är mindre än 0 då stannar loopen. 
Anledningen till att man inte alltid ska köra reverseArrayInPlace är för att man ibland vill ha kvar den första arrayen man skrev. Så man kan hämta den ursprunliga arrayen.
Om jag tex vill skriva 1-100 på min första sida och sedan 100-0 på min andra sida och sedan göra så på 10 sidor. Då vill jag kunna hämta min array igen.
Så reverseArray är en pure function vilket betyder att den aldrig skriver över sina argument utan returnerar bara nya resultat. */



function reverseArray(frutiy) {
    let blue = [];

    for (let i = frutiy.length - 1; i >= 0; i--) {
        blue.push(frutiy[i]);
        
    }

    return blue;
}

console.log(reverseArray(["Banana", "apple", "grape", "pear"]))

