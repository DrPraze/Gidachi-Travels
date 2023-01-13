const express = require('express');
const path = require('path');
const app = express();

//------------ EJS Configuration ------------//
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/views'));

//------------ Bodyparser Configuration ------------//
app.use(express.urlencoded({extended: false}))

//------------ Routes ------------//
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Gidachi Server running on 127.0.0.1:${PORT}`);
});
