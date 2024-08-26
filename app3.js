const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const words = content.split(' ');

// console.log('Palabras: ', wordCount);

// let reactWordCount = 0;

// words.map((item) => {
//     if (item.toLowerCase() === 'react') reactWordCount++
// });

// const reactWordCount = words.filter( word => word.toLowerCase().includes('react')).length

const reactWordCount = content.match(/react/gi ?? []).length;

console.log('Palabras React:', reactWordCount)