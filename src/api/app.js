const Controllers = require('./Controllers');
const express = require('express');

const app = express();
app.use(express.json());

const { bestRouter } = Controllers();

app.get('/best_route/:route', bestRouter);

const PORT = 3000;
app.listen(PORT);