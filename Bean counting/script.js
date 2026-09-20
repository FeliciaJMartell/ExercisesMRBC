
// I denna funktion vill jag veta hur många B som finns i BOB, i console log så har jag skrivit BOB som kommer användas som min string. 
// i function countBs så har jag skrivit ut string och att anropar därefter countChar.
// min funktion countChar så har jag string (BOB) och char (B).
// Jag ber funktionen börja på 0 och fortsätta tills han gått igenom alla bokstäver i BOB. Om bokstaven B finns i ordet. Räkna plus. 
// sedan kör loopen köra 3 varv eftersom BOB är tre bokstäver & när den sedan är klar, skickar den till console log att skriva ut hur många B som fanns. 

function countChar(string, char) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) {
            count = count + 1;
        }
    }
    return count;
}

function countBs(string) {
    return countChar(string, "b");
}

console.log(countBs("BOB"));
