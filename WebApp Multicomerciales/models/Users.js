const mongoose = require("mongoose");

// Funcion de mongoose para crear una tabla llamada UsersSchema
const UsersSchema = mongoose.Schema ({
    firstName: {type: String, required: true, trim: true},
    middleName: {type: String, required: false, trim: true},
    lastName: {type: String, required: true, trim: true},
    userType: {type: String, required: true, trim: true},
    userName: {type: String, required: true, trim: true, unique:true},
    email: {type: String, required: true, trim: true, unique:true},
    password: {type: String, required: true, trim: true},
    registerDate: {type: Date, default: Date.now()},
    status: {type: Boolean, default: 1}
});
/*****************PROPIEDADES******************/
//trim: true es una propiedad para eliminar espacios en la informacion recibida y almacenar en la BD sin espacios
//required: true es una propiedad para que no manden nullos o vacios. igual que el NOT NULL
//unique: true. propiedad para evitar que se repita esa informacion. ejemplo: un correo electronico no se puede repetir
//MongoDB nos crea ID automaticamente
//Todas estas propiedades se encuentran en https://mongoosejs.com/docs/guide.html

/*********DEFINIR NOMBRE DEL MODELO "Usuario" Y LO EXPORTA**********/
module.exports = mongoose.model("Users", UsersSchema)//La funcion UsersSchema() se va a invocar con "Users"