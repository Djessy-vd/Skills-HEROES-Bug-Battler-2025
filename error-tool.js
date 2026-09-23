//require
const readline = require('node:readline');
const fs = require('fs');

console.log('\x1b[33mde error tool is succesvol opgestart\x1b[0m');


//hier declare ik alvast alle variable
let errors = [];


//hier maak ik de functie die kijkt of eer al een json bestand is en zo ja of hij correct is en als hij nog niet bestaad dat hij dan word gemaakt 
function json (){
    const filePath = "./data.json";
    const content = '{}'
    if (fs.existsSync(filePath)) {
        console.log('\x1b[32mdata File exists.\x1b[0m');    
    } else {
        console.log('\x1b[31mdata File does not exist.\x1b[0m');
        fs.writeFileSync(filePath, content);
        console.log('\x1b[32mde log file is aangemaakt voor je\x1b[0m');
    }
};
// functie uitvoen om te controleren of het data bestand bestaad
console.log(json())

function add_error (){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
        rl.question(`What's your name?`, name => {
        console.log(`Hi ${name}!`);
        rl.close();
    });
}

add_error();