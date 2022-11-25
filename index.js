/*
 * Complete the 'theLoveLetterMystery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function theLoveLetterMystery(s) {
    let numOperations = 0;
    for(let i = 0; i < Math.floor(s.length/2); i++) {
        //check if palindrome
        if(s[i] !== s[s.length - 1 - i]) {
            numOperations += Math.abs(s[i].charCodeAt(0) - s[s.length - 1 - i].charCodeAt(0))
        }
    }
    console.log(numOperations);
    return numOperations;
}
