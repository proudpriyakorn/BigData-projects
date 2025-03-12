require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let notes = []; // Temporary storage

app.get('/', (req, res) => {
    res.render('index', { notes });
});

app.post('/add-note', (req, res) => {
    const { text, color } = req.body;
    notes.push({ text, color });
    res.redirect('/');
});

app.post('/delete-note', (req, res) => {
    const index = req.body.index;
    notes.splice(index, 1);
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));