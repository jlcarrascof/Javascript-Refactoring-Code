/*
    Original:
    Write a function `whisper` that takes in a string and returns a "whispered"
    version of that string. Use the `.toLowerCase()` function on a string to
    see what it does!

    New:
    Write a function `alternatingLetters` that takes in a string and returns a
    version of that string where letters alternate uppercase and lowercase,
    starting with lowercase. Do not make exceptions for spaces within the
    string.

    Strings are immutable, so here are some tools you may find useful. The
    `.split('')` function on strings to make a copy of the string as an array.
    The `.join('')` function joins the elements in an array into a string.
*/
function alternatingLetters(str) {

    // Step 1 - Split str

    const arrSplitted = str.split('');

    console.log(arrSplitted);

    // Step 2 - explore the array and alternate letters.

    const alternateArray = [];

    for (let i=0; i < arrSplitted.length; i++) {
        if (arrSplitted[i] === ' ') {
            alternateArray.push(' ');
        } else {
            if ((i % 2 === 0) || (i === 0)) {
                // Put the first letter as Uppercase
                alternateArray.push(arrSplitted[i].toLowerCase());
            } else {
                alternateArray.push(arrSplitted[i].toUpperCase());
            }
        }
    }

    console.log(alternateArray);

    return alternateArray.join('');
}

console.log(alternatingLetters("Javier Martinez"));
