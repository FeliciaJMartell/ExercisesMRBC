// jag använder boolean för att datorn ska berätta för mig om det är sant eller falskt, datorn berättar om talet som jag anropar tillslut blir
// 0 eller 1 sant eller falskt, 52 kommer tillslut hamna på bas-fallet 0 och 75 kommer tillslut hamna på bas-fallet 1. 
// Detta eftersom datorn kör -2 på talen tills de hamnar på varsitt bas-fall och då returnerar sant eller falskt.
// eftersom jag hade ett negativt tal så kommer det aldrig hamna på 0 eller 1, så den kommer räkna i all oändlighet. Därav behövde jag göra
// alla negativa tal positiva. Så jag la in om n är mindre än 0, gör om talet till ett positivt tal. 

function isEven(n) {
    if (n < 0) {
        return isEven(-n);
    } else if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        return isEven(n - 2);


    }

}

console.log(isEven(52));
console.log(isEven(75));
console.log(isEven(-50));