/***************************************************************************************/
/*******************************VERIFICACION DE TOKEN***********************************/
/********************FUNCION MIDDLEWARE - VERIFICACION DE TOKEN*************************/
/********************LOS MIDDLEWARE SON FUNCIONES DE ENTRADA POR SALIDA*****************/
/****EL MODULO "authMiddleware.js" ES EL ENCARGADO LA VERIFICACION DEL TOKEN*************/
/************LA VERIFICACION DEL TOKEN SE REALIZA CON JWT.VERIFY************************/
/***************************************************************************************/
/***************************************************************************************/

const jwt = require("jsonwebtoken");

module.exports = function(req, res, next){
    //leer el token del header 
    const token = req.header("x-auth-token");
    //console.log(token);

    //revisar si no hay token
    if(!token){
        return res.status(400).json({msg: "No hay token"});
    }
    //validar token
    try{
        const validatedToken = jwt.verify(token,process.env.SECRET);
        //console.log(JSON.stringify(cifrado));
        req.users = validatedToken.users;
        //console.log(cifrado.usuario);
        next();

    }catch(error){
        res.status(400).json({msg: "token no valido"});
    }
}