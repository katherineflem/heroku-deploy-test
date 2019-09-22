import * as path from 'path';
import * as express from 'express';
import apiRouter from './routes';

const app = express();

let p = path.join(__dirname, '../public');
console.log(p);

app.use(express.static(p));
app.use(apiRouter); //dont really need this for heroku deploy

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

//at bare minimum you have to have a backend server listening on the port we have assigned and serve up a static file