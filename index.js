require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const {User, Blog, Tag, Finance } = require('./sequelize');
const { QueryTypes } = require('sequelize');

const app = express();
app.use(bodyParser.json());

app.post('/api/user', (req, res) => {
    User.create(req.body)
        .then(user => res.json(user));
});

app.get('/api/users', (req, res) => {
    User.findAll().then(users => res.json(users));
});

app.get('/api/user/:id', (req, res) => {
    User.findOne({ where: {id: req.params.id}}).then(user => res.json(user));
});

app.put('/api/user', async (req, res) => {
    const [user, created] = await User.findOrCreate({ where: {name: req.body.name}, defaults: {name: req.body.name}});
    console.log(user);
    console.log(created);
    res.json(user);
});

app.put('/api/user/:id', async (req, res) => {
    let user = await User.findOne({ where: {id: req.params.id}});
    if(user) {
        user.name = 'Bayu';
        user.save();
        res.json(user);
    } else {
        res.json({message: `userId: ${req.params.id} not found`});
    }
});

app.post('/api/finance', (req, res) => {
    Finance.create(req.body)
        .then(finance => res.json(finance));
});

app.get('/api/finance/:date', async (req, res) => {
    let finance = await Finance.findOne({ where: {tanggal: req.params.date}});
    if(finance) res.json(finance);
    else res.json({message: `data ${req.params.date} not found`});
});

const port = process.env.PORT_SERVER;
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);

    let fields = [];

    fields.push('a');
    fields.push('b','c','d');
    console.log(fields);

});