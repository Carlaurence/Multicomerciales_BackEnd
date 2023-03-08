/********************************************************************************************************/
/***************************************CRUD - TABLA: USUARIOS*******************************************/
/************EL MODULO userController, CONTIENE EL CRUD REPOSITORY DE LA TABLA Users.js******************/
/********************************************************************************************************/

const Users = require("../models/Users");//IMPORTAMOS LA TABLA Users PARA HACER USO DEL CRUD REPOSITORY
const bcryptjs = require("bcryptjs");//Importar libreria para encriptar contraseñas

exports.createUsers = async (req, res) => {
    
    const {firstName, middleName, lastName, userType, userName, email, password} = req.body;
    
    try{
        //confirmar si el {userName} del new user ya existe en la bbdd
        let user = await Users.findOne({userName});
        if(user){
            return res.status(404).json({msg: "usuario ya existe"});
        }else{
            user = new Users(req.body);//se va a crear un objeto (User)

            //hash: Para hashear o encriptar el password con 10 vueltas 
            user.password = await bcryptjs.hash(password, 10);

            await user.save();
            console.log(user);
            res.status(201).json({msg: "se creo correctamente"});
        }
    }catch(error){
        return res.status(401).json({msg: "El usuario no fue creado"});
    }
};