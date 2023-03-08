/*******************************************************************************************************/
/*******************************************************************************************************/
/**************************RUTAS URL - ENDPOINT PARA PETICIONES DE LA TABLA USERS***********************/
/*******************************************************************************************************/
/*******************************************************************************************************/

const express = require("express");// Importar Framework express para Node Js
const router = express.Router(); //Importar libreria Router, de express, para establecer las rutas (enrutadora)
const usersController = require("../controllers/usersController") // Importar archivo usersController de la carpeta controllers

/****************************************Importar la funcion createUsers del archivo usersController**************************************************/
/*******************************************************************************************************/
router.post(
    "/",
    usersController.createUsers
);

/*********DEFINIR LAS RUTAS Y EXPORTARLAS**********/
module.exports = router;