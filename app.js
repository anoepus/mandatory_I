import express from 'express';

const app = express();

const port = 8080;

const dirName = import.meta.dirname; //__dirname in ES6 modules

//Serve index
app.get('/', (req, res) => {
    res.sendFile(dirName + '/public/index/index.html');
});

//Serve pages
app.get('/01', (req, res) => {
    res.sendFile(dirName + '/public/pages/01.html');
});

app.get('/02', (req, res) => {
    res.sendFile(dirName + '/public/pages/02.html');
});

app.get('/03', (req, res) => {
    res.sendFile(dirName + '/public/pages/03.html')
});

app.get('/04', (req, res) => {
    res.sendFile(dirName + '/public/pages/04.html')
});

app.get('/05', (req, res) => {
    res.sendFile(dirName + '/public/pages/05.html')
});

app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server", error);
        return;
    }
    console.log('Server is running on port', port);
});