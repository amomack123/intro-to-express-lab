const express = require('express')
const app = express();

app.listen(3000, () => {

})

// app.get('/greetings/:usernameparameter', (req, res) => {
//     const usernameparameter = req.params.usernameparameter;
//     res.send(`<h1>Hello ${usernameparameter}!</h1>`);
// });

app.get('./roll/<:number>', (req, res) => {
    const number = req.params.number;
    if(isNaN(number)) {
        res.send('You must respond with a number');
    }
    const newNumber = Math.floor(Math.random() * number);
    res.send(`<h2>You rolled a ${newNumber}</h2>`);
})

// app.get('./collectibles/<index-parameter'>, () => {

// })