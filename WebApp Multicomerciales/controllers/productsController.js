/********************************************************************************************************/
/***************************************CRUD - TABLA: PRODUCTS*******************************************/
/************EL MODULO productsController, CONTIENE EL CRUD REPOSITORY DE LA TABLA Products.js***********/
/*************************MEDIANTE EL MODELO Pproducts.js SE HACE USO DEL CRUD **************************/
const { response } = require("express");/*IMPORTAR EL FRAMEWORK DE NODE.JS**********************************/
const Products = require("../models/Products");//IMPORTAMOS LA TABLA Products PARA HACER USO DEL CRUD REPOSITORY

//POST
exports.createProducts = async (req, res) => {

    const { vinCode } = req.body;

    try {
        //let nos permite variar el tipo de dato de la variable, mientras que const no lo permite
        let product = await Products.findOne({ vinCode });//confirmar si el {vinCode} del new product ya existe en la bbdd

        if (product) {
            return res.status(406).json({ msg: "producto ya existe" });
        } else {
            //se crea un objeto derivado de la tabla (Product) con los datos traidos del body
            product = new Products(req.body);
            product.createdBy = req.users.id;
            await product.save();//Se guarda en la BBDD de Mongo
            console.log(product);//Se verifica el product en la consola
            res.status(201).json({ msg: "se creo correctamente" });//Se envia el mensaje.json (201) al front/postman
        }
    } catch (error) {
        /**Este Catch, atrapara todos los errores de sintaxis o de campos vacios que son obligatorios, 
        los cuales impiden que el producto se cree en la BBDD*****************************************/
        console.log(error);
        return res.status(401).json({ msg: "producto no fue creado" });//Se envia el mensaje.json (201) al front/postman
    }
};

//GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
    /***EL USUARIO PUEDE INICIAR EL REQUEST [GET] INGRESANDO LA EXTENCION => ************************* 
     * "http://localhost:4000/api/products" EN LA URL*************************************************/
    try {
        const getAllProductos = await Products.find();/*GET TODOS LOS PRODUCTOS EXISTENTES******************/
        if (!getAllProductos) {/*SI RETORNA FALSO => ENTONCES NO HAY PRODUCTOS REGISTRADOS EN LA BBDD*********/
            return res.status(400).json({ msg: "No hay productos" });
        } else {
            return res.status(200).json({ products: getAllProductos });/*ENVIA Al POSTMAN O AL FRONT UN JSON{} CON TODOS LOS PRODUCTOS EXISTENTES*/
        }
    } catch (error) {/****/
        res.json(error);
    }/************************************FIN PETICION GET ALL*********************************************/
}/*********************************************************************************************************/

//GET PRODUCTS BY ID
exports.getProductsById = async (req, res) => {
    /***EL USUARIO PUEDE INICIAR EL REQUEST [GET] INGRESANDO LA EXTENCION => ******************************* 
     * "http://localhost:4000/api/products/NUMERO DE ID" *** EN LA URL**************************************/

    const { id } = req.params;/**REQUERIMOS EL ID DE /URL PARA BUSCARLO EN LA BBDD***************************/
    try {
        const productsById = await Products.findById(id);/*GET TODOS LOS PRODUCTOS EXISTENTES******************/
        /********************CONDICION IF:****************************************************************/
        if (!productsById) {/******SI producto RETORNA VACIA/NULL => ENTONCES =>******************************/
            /**********ENTONCES QUIERE DECIR QUE NO HAY CATEGORIAS EN LA BDD CON ESE ID*******************/
            return res.status(400).json({ products: "WARNING: El Producto no existe en la BBDD" });/************/
        } else {/********PERO SI producto RETORNA UN OBJETO  => ENTONCES =>********************************/
            return res.status(200).json({ products: productsById});/*ENVIA A POSTMAN UN JSON{} CON EL PRODUCTO*/
        }
    } catch (error) {/****/
        res.json(error);
    }/************************************FIN PETICION GET PRODUCTS BY ID *********************************/
}/*********************************************************************************************************/