// använder denna funktionen för att enkelt kunna be datorn säga vilken som är störst. Är a mindre än b returnera a
// annars returnera b. Jag använder a och b för att det måste vara variabelnamn och inte siffror. 
// det är senare med console log som javascript själv fyller i a och b. Man kan säga att a och b är tommar lådor
// tills jag anropar vad som ska stå i lådorna. 

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(100000, 500));