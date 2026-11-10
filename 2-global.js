// Global - no windows !!!

// __dirname  - path to current directory
// __filename - file name
// reqiure    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed 

console.log(__filename)
setInterval(() => {
    console.log('hello world')
}, 1000);