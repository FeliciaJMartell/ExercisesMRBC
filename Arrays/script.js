/* använder funktionen range, med start, slut och steg. Jag använder let resultat med en tom array som ska fyllas. 
loopen startar på i och i i detta läget är 1. sen rullar loopen tills i är lika med eller mindre än end (10).
1 in i tom array [] (result push)
Så först 1 mindre än 10, lägg på 2 (step värdet).
3 in i array []
3 (som då är nya i eftersom i ökat) är mindre än 10 lägg till 2 (step värdet)
osv tills vi kommer till 11 som då är mer än 10, så då stannar loopen och skickas ut i console log.  
TIDIGARE CONSOLE LOG VÄRDE 1, 10, 3


Jag vill sedan att min funktion ska kunna hantera ett negativt step värde så jag lägger till villkoret step > 0 ? i <= end : i >= end;
där den säger att om step är större än 0 gör i <= end om step är mindre än 0 gör >= end
i detta läget blir det då 5, 4, 3, 2
börjar på 
5
5-1 = 4
4 - 1 = 3
3 - 1 = 2 
2 - 1 = 1 här stannar loopen eftersom i nu blir mindre än 2.
Så min array blir [5, 4, 3, 2]
Så i det stora hela, villkoret kollar om 5 är större än 2, sant skicka till push, gå sedan tillbaka till villkoret och räkna ut nästa i.*/

function range(start, end, step = 1) {
    let result = [];

    for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
        result.push(i);
    }

    return result;
}

console.log(range(5, 2, -1));

/* här vill jag räkna ut summan på min array. i console log anropar jag min range funktion som ligger ovanför för att få ut min array. Detta så att sum vet vilka
värden den ska loopa i koden. 
Funktionen börjar på 0 och lägger sedan + på siffran från arrayen. 
0 + 1 = 1
sedan nästa runda så lägger den till totalen från första varvet med andra värdet från arrayen.
1 + 4 = 5 
tredje rundan lägger den till totalen från andra varvet med tredje värdet från arrayen. 
5 + 7 = 12
sedan
12 + 10 = 22.

Loopen kör 4 varv eftersom arrayens längd är 4, efter 4 varvet i=4 så blir villkoret i < array.lenght falsk eftersom arrayen innehåller 4 värden.  */ 

function sum(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }

    return total;
}

console.log(sum(range(1, 10, 3))); 



