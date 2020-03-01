/*
Requirements / Auftrag:
Schreibe eine Klasse mit einer Funktion die alle Primzahlen bis zu einer 
gegebenen Zahl n als flat array zurückgibt; Schreibe dazu tests die die 
Zahlen 1, 2, 10, 13 & 1000 testen. Beachte dabei die edge cases, mehr infos unter:
https://de.wikipedia.org/wiki/Primzahl
*/

/**
 * A class for calculating / testing prime numbers
 */
class PrimeNumber {
    /**
     * Method to list all prime numbers up to a given n
     * @param input integer >= 0
     * @returns array with prime numbers
     */ 
    calcPrimeArray(input: number): number[] {
        let primeNumberArray: number[] = [];
        for (let i: number = 2; i <= input; i++) {
            if (this.isPrime(i)) {
                primeNumberArray.push(i);
            }
        }
        return primeNumberArray;
    }    
    /**
     * Method for testing if a given number n is prime.
     * @returns boolean
     */
    isPrime(i: number): boolean {
        for (let y = 2; y < i; y++) {
            if (i % y === 0) {
                return false;
            }
        }
        return true;
    }  
}
export default PrimeNumber;