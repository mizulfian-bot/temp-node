// CommonJS, every file is module (by deafault)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
// console.log(names)

console.log(data);
sayHi("fifi");
sayHi(names.fian);
sayHi(names.fani);
