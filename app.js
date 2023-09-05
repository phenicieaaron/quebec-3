const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = (process.env.PORT || 3000)

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let myVariableServer = 'soft coded data'

app.get('/aaron', function (req, res) {
  res.render('index', {'myVariableClient' : myVariableServer} );
})

app.post('/postClientData', function (req, res) {
 
  console.log("body: ", req.body);
  console.log("user name:" , req.body.userName);
  // console.log("params: ", req.params['userName']);
  
  // myVariableServer = "now!!! new we\'ve got new stuff"
  myVariableServer = req.body.userName

  res.render('index', {'myVariableClient' : myVariableServer} );
})

app.get('/', function (req, res) {
  res.send('Hello World From Express!')
})

// app.get('/whatever', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// })




// app.listen(3000)

app.listen(port, () => console.log(`Server is running... on ${port}`));