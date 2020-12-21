let express = require('express')
let myApp = express()

myApp.use(express.urlencoded({extended:false}))    // boiler plate  is available on the express web page is just inables the input so that is easely accesable from 'req.body.skyColor' 

myApp.get('/', function(req, res) {
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a clear sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
})

myApp.post('/answer', function(req, res) {
    // res.send('Thank you for submitting the form.')
    if (req.body.skyColor.toUpperCase() == 'BLUE') {
        res.send(`<h3>Congrats!</h3><p>Answer is spot on!</p>
        <a href="/">Back to homepage</a>
        `)
    } else {
        res.send(`<h3>Wrong!</h3><p>Answer is incorrect!</p>
        <a href="/">Back to homepage</a>
        `)
    }
})

myApp.get('/answer', function(req, res) {
    res.send('Are you lost? nothing here!') // altough simillar '/answer' the server response is different if is POST request || GET request and that is the difference between the two.
})

myApp.listen(3000)
