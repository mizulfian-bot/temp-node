const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to our page')
    }
    else if(req.url === '/about'){
        res.end('this our short story about us')
    }
    else { 
        res.end(
            `<h1>Oopss!!</h1>
            <h3>this page never exist</h3>
            Go back <a href='/'> home page</a>`
        )
    }
})

server.listen(5000)