const express = require('express')
const path = require ('path')
const app = express()
const port = 8080
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,"templates/index.html"))
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})