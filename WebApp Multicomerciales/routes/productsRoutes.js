/*******************************************************************************************************/
/*******************************************************************************************************/
/**************************RUTAS URL - ENDPOINT PARA PETICIONES DE LA TABLA Products********************/
/*******************************************************************************************************/
/*******************************************************************************************************/

const express = require("express");// Importar Framework express para Node Js
const router = express.Router(); //Importar libreria Router, de express, para establecer las rutas (enrutadora)
const productsController = require("../controllers/productsController"); // Importar archivo productsController de la carpeta controllers
const authMiddleware = require("../middleware/authMiddleware");

/*****************************************POST PRODUCTS***************************************************/
/**********PARA CREAR NUEVOS REGISTROS SE REQUIERE AUTORIZACION DE USUARIO - AUTHMIDDLEWARE***************/
router.post("/", authMiddleware, productsController.createProducts);

/*****************************************GET ALL PRODUCTS************************************************/
/*****ESTE GET NO PUEDE TENER AUTHMIDD PARA QUE CLIENTES PUEDAN ACCEDER AL HOME SIN AUTORIZACION**********/
router.get("/", productsController.getAllProducts);

/*****************************************GET PRODUCTS BY ID**********************************************/
router.get("/:id", productsController.getProductsById)

/*********DEFINIR LAS RUTAS Y EXPORTARLAS**********/
module.exports = router;