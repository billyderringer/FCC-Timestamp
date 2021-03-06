// server.js
// where your node app starts

// init project
var express = require('express')
var app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors')
app.use(cors({optionSuccessStatus: 200}))// some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html')
})


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
    res.json({greeting: 'hello API'})
})

// timestamp microservice
app.get('/api/timestamp/:date_string?',(req,res) => {
    let param = decodeURI(req.params.date_string)
    let makeUnix
    let makeString
    if(!isNaN){
        let time = new Date(parseInt(param))
        makeUnix = param
        makeString = time.toUTCString()
    } else {
        makeString= Date.parse(param) ? param : 'null'
        makeUnix = Date.parse(param) || 'null'
    }
    res.json({ unix: makeUnix, natural: makeString })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port)
})