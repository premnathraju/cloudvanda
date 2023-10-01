function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');

    const reversedWords = words.map(word => reverseWord(word));

    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    
    return word.split('').reverse().join('');
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", function(inputSentence) {
    const reversedSentence = reverseWordsInSentence(inputSentence);
    console.log("Reversed sentence:", reversedSentence);
    rl.close();
});

//To run this code, you'll need to have Node.js installed on your computer. Save the code to a .js file (e.g., reverseSentence.js) and run it using the command: node reverseSentence.js

