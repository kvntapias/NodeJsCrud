//Programar el servidor 
//Traemos express
const express = require('express');
const app = express();
//Path(unir directorios)
const path = require('path');
//Morgag - Middelware
const morgan = require('morgan');
//Mysql Modulos
const Mysql = require('mysql');
const myConnection = require('express-myconnection');

//Importamos Routes
const customerRoutes = require('./Routes/Customer');

//configurar express
//Toma el puerto que el sistema deje libre o el 3000
app.set('port', process.env.port || 3000);
//Configuramos el view engine(motor de plantillas)
app.set('view engine','ejs');
//Carpetas de las vistas (utilizamos el modulo path para unir directorios)
app.set('views', path.join(__dirname,'Views'));

//--Middlewares-- (funciones que se ejecutan antes de las peticiones de usuarios)
//Registrar peticiones que llegan antes de procesarlas, podemos ver el consola
//todas las peticiones realizadas en el momento ejemplo(GET / 404 12.718 ms - 139)
app.use(morgan('dev'));
app.use(myConnection(Mysql,{
    //Servidor
    host: 'localhost',
    //Usuario de DTB
    user: 'root',
    //Contraseña
    password: 'root',
    //Puerto
    port:3306,
    //Nombre de la BD
    database: 'crudNodejs'
},'single'));
//Permite entender los datos del formulario
app.use(express.urlencoded({extended:false}));

//Routes (rutas que el usuario podra usar en el servidor)
app.use('/', customerRoutes);

//Archivos estaticos(complementos(css,js, etc))
app.use(express.static(path.join(__dirname, 'Public')));

//Iniciar app en puerto asignado
app.listen(app.get('port'), ()=>{
    console.log('SERVER ON PORT 3000');
})