import express from 'express';

const app = express();

app.use(express.static('public'));

const port = process.env.PORT ?? 8080; // node har miljø variabler sat i processen. Hvis undefined, brug 8080.

const server =app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server", error);
        return;
    }
    console.log('Server is running on port', server.address().port);
});

import path from 'path';

import { indexPage, aboutPage, selectPage} from './public/pages/pages.js';

console.log(path.resolve());

//opdater node.js

//Serve index
app.get('/', (req, res) => {
    res.send(indexPage);
});

//Serve about
app.get('/about', (req, res) => {
    res.send(aboutPage);
});

//Serve pages
app.get('/pages/:pageId', (req, res) => {
    res.send(selectPage(req.params.pageId, {
        tabTitle: `Page ${req.params.pageId}`
    }));
});

//------API--------//