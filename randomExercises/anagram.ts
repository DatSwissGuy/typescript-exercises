class Anagram{
    inputWord: string;
    constructor(inputWord: string) {
        this.inputWord = inputWord;
    }
    
    matches(listOfWords: string[]) {
        // declare our results array
        const matchedWords: string[] = [];
        const sortedInputWord = this.inputWord.split("").sort().join("");
        listOfWords.forEach((word:string) => {
            // take apart the strings/arrays, sort and join them again
            const sortedWord = word.split("").sort().join("");
            // compare the two strings, negation works also with !==
            if (sortedWord === sortedInputWord && this.inputWord !== word) {
                matchedWords.push(word);
            }
        });
        return matchedWords;
    }
    
    matches2(listOfWords: string[]): string[] {
        const sortedInputWord = this.inputWord.split("").sort().join("");
        // filter((parameter, what we're looking for) => {function body})
        // returns a new array with our filtered results
        return listOfWords.filter((word: string) => {
          const sortedWord = word.split("").sort().join("");
          return sortedWord === sortedInputWord && this.inputWord !== word;
        });
    }
 }
 export default Anagram;