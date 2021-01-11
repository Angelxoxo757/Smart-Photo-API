const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/',(request, response) => {
    response.send('this is working');
})

app.listen(3000, () => {
    console.log('app is running');
})