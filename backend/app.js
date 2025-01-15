const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000
const uri = "mongodb+srv://admin:aloui53001152@cluster0.anhmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



app.use(express.json());

async function connect(){
    try {
        await mongoose.connect(uri);
        console.log("connected to mongodb");
        
    } catch (error) {
        console.error(error);
        
    }
}
connect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})