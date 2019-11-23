var text = 'The quick brown fox jumps over the lazy dog';

var occurance = text.toLowerCase().match(/the/g).length;

document.write(`Text: ${text}<br>`);
document.write(`There are ${occurance} occurance(s) of word 'the'`);

