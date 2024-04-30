/*
    Original:
    Write a function, `countVowels(word)`, that takes in a string word and
    returns the number of vowels in the word.

    New:
    Write a function, `countConsonants(word)`, that takes in a string word and
    returns the number of consonants in the word.
*/
function countConsonants(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i])) {
            if (word[i] !== ' ') {
                count++;
            }
        }
    }
    return count;
}

console.log(countConsonants("Jorge De La Rosa"));
