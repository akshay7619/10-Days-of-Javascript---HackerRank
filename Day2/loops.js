'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels=[]; 
    let consonants=[];
    for(let i = 0 ; i <= s.length-1; i++){
        if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u' ){
            vowels.push(s[i]);
        } else {
            consonants.push(s[i]);
        }
    }

    for(let j=0;j<=vowels.length-1; j++){
        console.log(vowels[j]);
    }
    for(let k=0;k<=consonants.length-1; k++){
        console.log(consonants[k]);
    }
    
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}