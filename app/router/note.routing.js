const {Router} = require('express')
const router = Router()

const Note = require('../models/index.models')

router.get('/', function (req, res) {
    res.render('index');
})

router.get('/add', function (req, res){
    res.render('addNote')
})

router.post('/add', async function(req, res){

    const {title, description} = req.body
    const note = new Note({
        title,
        description
    })
    await note.save()
    res.redirect('/notes')

})

router.get('/notes', async function(req, res){
    
    const notes = await Note.find()
    
    res.render('showNotes', {notes})
})

router.get('/delete/:id', async function(req, res){

    const { id } = req.params
    await Note.findByIdAndDelete(id)
    res.redirect('/notes')

})

router.get('/edit/:id', async function(req, res){
    const { id } = req.params
    const note = await Note.findById(id)
    res.render('editNote', {note})
})

router.post('/edit/:id', async function(req, res){
    const { id } = req.params
    await Note.findByIdAndUpdate(id, req.body)
    res.redirect('/notes')
})

module.exports = router