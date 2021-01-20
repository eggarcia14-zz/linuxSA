const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');
const app = express();
// importando rutas
const customerRoutes = require('./routes/servidor');
// Configurando puertos de Servidor Web y vistas de la pagina web
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Configuración de middleware (Conexión a la DB)
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '753357',
  port: 3306,
  database: 'linux'
}));
app.use(express.urlencoded({extended: false}));
// Se establece el modulo inical que 
// se ejecutará al recibir un request del cliente
app.use('/', customerRoutes);
// static files
app.use(express.static(path.join(__dirname, 'public')));
// Levanatando server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
