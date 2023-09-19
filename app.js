const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = (process.env.PORT || 3000)



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://phenicieaaron:R2NBjUket2vJbIFp@cluster0.prtnxyo.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




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