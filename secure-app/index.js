const express = require('express');
const _ = require('lodash');
const minimist = require('minimist');

const app = express();

app.get('/', (req, res) => {
    const args = minimist(process.argv.slice(2));
    const message = _.join(['Secure', 'App'], ' ');

    res.send({
        message,
        args
    });
});

app.listen(3002, () => {
    console.log('Secure app running on port 3002');
});
