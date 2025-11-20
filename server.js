const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'index.html')));

const replicaApp = process.env.APP_NAME

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request Served by ${replicaApp}`);
});

app.listen(PORT, () => {
    console.log(`${replicaApp} is running on http://localhost:${PORT}`);
});