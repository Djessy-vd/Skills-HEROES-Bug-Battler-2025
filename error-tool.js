//require
const fs = require('fs');

console.log('\x1b[33mde error tool is succesvol opgestart\x1b[0m');

//hier declare ik alvast alle variable
const filePath = './data.json';
let errors = [];

function load_errors () {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function save () {
    fs.writeFileSync(filePath, JSON.stringify(errors, null, 2));
}

function add (title, description, priority, status) {
    if (!title || !priority || !status) {
        console.log('gebruik: add-report titel description priority status');
        return;
    }

    if (!['low', 'medium', 'high'].includes(priority)) {
        console.log('priority moet low, medium of high zijn');
        return;
    }

    if (!['open', 'in_progress', 'closed'].includes(status)) {
        console.log('status moet open, in_progress of closed zijn');
        return;
    }

    errors.push({ id: errors.length + 1, title, description: description || 'geen beschrijving', priority, status });
    save();
    console.log('\x1b[35mer is een bug aangemaakt\x1b[0m');
}

function list (status, priority) {
    const found_errors = errors.filter((error) => error.status === status && (!priority || error.priority === priority));

    found_errors.forEach((error) => {
        console.log('ID: ' + error.id);
        console.log('title: ' + error.title);
        console.log('description: ' + error.description);
        console.log('priority: ' + error.priority);
        console.log('status: ' + error.status);
        console.log('----------------');
    });

    if (found_errors.length === 0) {
        console.log('geen bugreports gevonden');
    }
}

errors = load_errors();

const command = process.argv[2];
const values = process.argv.slice(3);

if (command === 'list-reports') {
    list(values[0], values[1]);
} else if (command === 'help') {
    console.log('node error-tool.js titel description priority status');
    console.log('node error-tool.js list-reports status priority');
} else if (command === 'add-report') {
    add(values[0], values[1], values[2], values[3]);
} else {
    add(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);
}
