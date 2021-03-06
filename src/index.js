const express = require('express');
require('./db/mongoose');
const User = require('./models/user');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000

//creating end points or routes
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then( () => {
        res.send(user);
    }).catch( (error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log('Server is up on PORT' + port);
})