const express = require('express')
const app = express()

app.get('/',(req,res) =>{
    res.send('Hello Bro!!!')
})

app.get('*',(req,res)=>{
    res.send('Error : 404 Page Not Found')
})

app.listen(3000, ()=>{
    console.log("Start Sever at Port [3000]")
})