const express= require('express');
const alunoRoutes = require('./api/alunoRoutes');
const administradorRoutes = require('./api/administradorRoutes');
const config = require('./config/default');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('views', '../views');
app.set('view engine', 'html');


app.use(express.json())
app.use(alunoRoutes)
app.use(administradorRoutes)

const PORT = config.server.port
const HOST = config.server.host


const server = app.listen(PORT,HOST, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on ${HOST}:${server.address().port}`);
});
