'use strict';

const express = require('express');
const speedTest = require('speedtest-net');

async function getCurrentSpeed() {
    return new Promise((resolve, reject) => {
        const test = speedTest({
            maxTime: 5000
        });
        test.on('data', resolve);
        test.on('error', reject);
    });
}

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/speedtest', async (req, res) => {
    const speed = await getCurrentSpeed();
    res.send(speed);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
