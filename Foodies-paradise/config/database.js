const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
})

