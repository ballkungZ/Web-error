const express = require('express')
const app = express()

app.get('/',(req,res) =>{
    res.send('Hello Bro!!!')
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/Web_error/Work4_Error')
})

app.listen(3000, ()=>{
    console.log("Start Sever at Port [3000]")
})