let http = require('http')

let myApp = http.createServer((req, res) => {
   if(req.url == '/') {                                  // this is a response
    res.end('Hello, and welcome to our website.')
   }   
   if (req.url == '/about') {                   // once the '/about' is addet we can change the response
    res.end('Thank you for visiting!')
   }

   res.end('We cannot find the page you are looking for')
})
myApp.listen(3000) 

// after all the above once we type 'node script' in the console will see that the server is up and running on port 3000, and we go to the browser and start typing: "localhost:3000" and the web browser will display our response:"Hello, and welcome to our website."
// Ctrl + C will shut the server and we type in the brouser /about and this will show in the VS terminal once we restrt the server.