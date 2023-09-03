const amount = 12;

if (amount < 10) {
    console.log("small number");
} else {
    console.log("large number");
}

console.log(`Hey it's my first node app`);

console.log(__dirname);
console.log(__filename);

let counter = 0;
const interval = setInterval(() => {
    console.log("hello js");
    counter++;
    if (counter === 5) {
        clearInterval(interval);
    }
}, 1000);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executeWithInterval() {
    for (let i = 0; i < 5; i++) {
        console.log('Helloooo JS');
        await delay(1000);
    }
}

executeWithInterval();