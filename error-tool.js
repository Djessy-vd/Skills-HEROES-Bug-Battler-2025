//require
const readline = require('node:readline');
const fs = require('fs');
const { exit, kill, exitCode } = require('node:process');

console.log('\x1b[33mde error tool is succesvol opgestart\x1b[0m');


//hier declare ik alvast alle variable
let errors = [];


//hier maak ik de functie die kijkt of eer al een json bestand is en zo ja of hij correct is en als hij nog niet bestaad dat hij dan word gemaakt 
function json (){
    const filePath = "./data.json";
    const content = '{}'
    if (fs.existsSync(filePath)) {
        console.log('\x1b[32mdata het bestand is er al en is goed\x1b[0m');    
    } else {
        console.log('\x1b[31mdata bestand bestaad niet\x1b[0m');
        fs.writeFileSync(filePath, content);
        console.log('\x1b[32mde data bestand is aangemaakt voor je\x1b[0m');
    }
};
// functie uitvoen om te controleren of het data bestand bestaad
console.log(json())

function add_error (){
        const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // de vragen voor de gebruiker
    rl.question('error-title: ', (title) => {
    console.log(`de error title is ${title}!`);

    // de priority vraag
    rl.question('error priority (low / medium / high) ', (priority) => {
        if (priority === 'low' || priority === 'medium' || priority === 'high') {
            console.log(`de priority is ${priority}`);
        }   else {
            rl.close
            console.log("er is een foutive antwoord gegeven probeer het opniew")
            exit
            add_error();
        }
        
        
        
        // het interface sluiten
        rl.close();
        console.log(title, priority)
    });
    });

    // ff testje
    rl.on('close', () => {
        console.log('Interface closed. Goodbye!');
    });


}

add_error();