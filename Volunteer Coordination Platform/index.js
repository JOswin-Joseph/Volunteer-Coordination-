const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


let volunteers = [];
let events = [];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index', { events });
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    const { name, email } = req.body;
    volunteers.push({ name, email });
    res.redirect('/');
});

app.get('/event', (req, res) => {
    res.render('create_event');
});

app.post('/event', (req, res) => {
    const { title, description, date } = req.body;
    events.push({ title, description, date });
    res.redirect('/');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
