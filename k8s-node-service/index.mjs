import express from 'express';
import os from 'os';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const message = `Hello from Kubernetes Node Service running on ${os.hostname()}`;
    res.send(message);
});

app.listen(PORT, () => {
    console.log(`Kubernetes Node Service is running on port ${PORT}`);
    console.log(`Hostname: ${os.hostname()}`);
});
