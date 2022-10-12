const http = require('http')

const hostname = '192.168.2.151'
const port = 5000

http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        res.end('home')
    }
    //res.end('agora tudo fez sentido!')
}).listen(port, hostname, () => console.log(`servidor rodando http://${hostname}:${port}`))