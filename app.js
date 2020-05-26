const express = require('express')
const request = require('request')
const app = express()
app.use(express.static('dice'));
app.use(express.static('images'))
app.get('/',(req,res)=>{
res.sendFile(__dirname+"/dice.html")
})

app.listen(process.env.PORT ||5000,()=>{
    console.log('Server started on the port 5000')
})