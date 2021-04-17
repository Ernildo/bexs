const Controllers = require('./Controllers');
const express = require('express');

const app = express();
app.use(express.json());

const { bestRouter, insertRouter } = Controllers();

app.get('/best_route/:route', bestRouter);
app.post('/insert_route', insertRouter);

const PORT = 3000;
app.listen(PORT);