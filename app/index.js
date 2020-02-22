require('./db')
const express = require('express')
const app = express()
const path = require('path')

const router = require('./router/note.routing')

app.set('views', path.join(__dirname,'view'))
app.set('view engine', 'pug');


app.use(express.static(path.join(__dirname, 'public')));
app.use('/edit', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)

app.listen(3000, function(){
    console.log(`Server on port 3000 `)
})