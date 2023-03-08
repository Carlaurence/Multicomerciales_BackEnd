/****************************************************************************************/
/****************************************************************************************/
/****************INDEX.JS ES LA PUERTA DE ENTRADA A LA EJECUCION DEL BACK****************/
 /***************EL PROGAMA SE EJECUTA SIGUIENDO LA SECUNCIA DE LAS LINEAS***************/
 /***************************************************************************************/
 /***************************************************************************************/

const express = require("express"); //Forma de importar el express para este archivo
const conectarDB = require("./config/db");
const usersRoutes = require("./routes/usersRoutes");// Hacemos el llamado de usuarioRoutes de la misma carpeta routes 
const productsRoutes = require("./routes/productsRoutes");
const authRoutes = require("./routes/authRoutes");

/*************************************CORS************************************************/
/*****PARA CONECTAR EL FRONT CON EL BACK SE DEBE CUMPLIR CON LAS POLITICAS DE CORS********/
/*********TENEMOS QUE DESCARGAR LA DEPENDENCIA CORS CON EL COMANDO **** npm i cors********/
/*********Y LUEGO HABILITARLA CON LA const cors = require("cors");************************/
const cors = require("cors");

const app = express();
app.use(express.json({extended: true}));//Para habilitar las expresiones .json y generar archivo

conectarDB();//Aqui hacemos el llamado A la conexion db.js

app.use(cors());//habilitamos los cors justo AQUI

//Construccion de Ruta primaria /Url's de la tabla Users
/***NOTA: Una url de cada tabla, puede contener varios verbos - peticiones Get. Post, Put o Delete, pero
estos verbos se llaman desde el modulo Routes***********************************************************/
app.use("/api/users", usersRoutes);
//Construccion de Ruta primaria /Url's de la tabla Products
app.use("/api/products", productsRoutes);
//Construccion de Ruta primaria /Url's de la tabla auth
app.use("/api/auth", authRoutes);


app.listen(4000, () => {
    console.log("servidor corriendo en el puerto 4000");
});