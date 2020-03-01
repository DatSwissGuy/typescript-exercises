/***
 * 
 * Given a phrase, count the occurrences of each word in that phrase.
 * 
 * For example for the input "olly olly in come free"
 * olly: 2
 * in: 1
 * come: 1
 * free: 1
 */

// This is not my code! Found @ https://github.com/exercism/typescript/blob/master/exercises/word-count/word-count.example.ts
/*
class Words {
    count(input: string): Map<string, number> {
        const inputArray = input.toLowerCase().replace(/\n/m, " ").replace(/\t/m, " ").split(" ")
        const inputMap = new Map<string, number>()

        for (const each of inputArray) {
            if (each === "") {continue}
            const value = inputMap.get(each) || 0

           inputMap.set(each.trim(), value + 1)
        }
        return inputMap
    }
}

export default Words
*/
class Words {
    count(input: string) {
        const regexNonWords = /\W+/g;
        const formattedInput = input.toLowerCase().replace(regexNonWords, " ").trim();
        if (formattedInput === "") {
            return {};
        }

        const splitInput = formattedInput.split(" ");
        let wordObj: any = {};
        splitInput.forEach(word => {
            if (!wordObj[word]) {
                wordObj[word] = 1;
            } else {
                wordObj[word]++;
            }
        });
        return wordObj;
    }
}
export default Words;


    // !wordObj[word] ? wordObj[word] = 1 : wordObj[word]++;
    // wordObj[word] = !wordObj[word] ? 1 : wordObj[word]+1;
    // wordObj[word] += 1, wordObj[word]=wordObj[word]+1