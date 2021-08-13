const express = require('express');

const app = express();

app.use(express.static('public'));

// Routes
app.get('/home', (request, response, next) =>
  response.sendFile(__dirname + '/views/home.html')
);

app.get('/about', (request, response, next) =>
  response.sendFile(__dirname + '/views/about.html')
);

app.get('/works', (request, response, next) =>
  response.sendFile(__dirname + '/views/works.html')
);

app.get('/stylesheets/style.ss', (request, response, next) =>
  response.sendFile(__dirname + '/public/stylesheets/style.css')
);

app.get('*', (request, response, next) =>
  response.sendFile(__dirname + '/views/home.html')
);

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
