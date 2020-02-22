const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/note-add', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(function(db){
        console.log('DateBase is conected')
    })