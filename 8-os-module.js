const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// methood return the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS ={
    nama: os.type(),
    realese: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.totalmem()
}
console.log(currentOS)