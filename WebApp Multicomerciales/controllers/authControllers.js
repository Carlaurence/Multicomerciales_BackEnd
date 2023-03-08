const Users = require("../models/Users");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path : "variables.env" });


exports.authUsers = async (req, res) => {
    const { userName, password } = req.body;//Requerimiento de la informacion desde el front

    try{
        let users = await Users.findOne({userName});

        if(!users){//Si no hay nada en users => el usuario no existe
            return res.status(404).json({msg:"El usuario no existe"});
        
        }else{//si hay users => verifique si el password es correcto
            
            const verifyPassword = await bcryptjs.compare(password, users.password);
            //password vienen del front
            //user.password viene de la BBDD
            console.log(verifyPassword);

            if(!verifyPassword){// Si verifyPassword = False... Entonces la contrasena es incorrecta
                return res.status(400).json({msg:"La contraseña es incorrecta"});
            
            }else{//Pero si verifyPassword = True, Entonces la contrasena es correcta y procede a generar el token
                const payload = {
                    users: { id: users.id},
                }
                //res.json(payload);
                jwt.sign(
                    payload,
                    process.env.SECRET,
                    {
                        expiresIn: '30d',//30 dias    
                    },
                    (error, token) =>{
                        if (error) throw error;
                        //Mensaje de confirmacion
                        res.json({token});
                    }
        
                );
            }
        // Si todo es correcto : crear  y firmar token
        }
        //revisar el password
    }catch(error){
        console.log(error);
    }
}

exports.authenticatedUsers = async(req, res) =>{
    try{
        console.log(req.users.id)
        const users = await Users.findById(req.users.id);
        res.json({ users });
    }catch(error){
        res.status(500).json({msg: "hubo un error"});
        console.log(error);
    }
}