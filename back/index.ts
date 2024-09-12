import { name } from 'ejs';
import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.get('/', function(request: Request, response: Response) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(data => {
        return data.json()
    })    
    .then(data => {
        response.render("index", data);
    });
});

app.get('/detalhar/:name', (request: Request, response: Response) => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + request.params.name)
    .then(response => {
        return response.json();
    })
    .then(data => {
        response.render("detalhar", data);
    });
});

app.listen(3000, () => {
    console.log('Server is running');
});

