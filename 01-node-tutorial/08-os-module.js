// os module
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)

const totalMemoryBytes = os.totalmem();
const totalMemoryGB = totalMemoryBytes / (1024 * 1024 * 1024);

console.log(`Total memory: ${totalMemoryGB.toFixed(2)} GB`);