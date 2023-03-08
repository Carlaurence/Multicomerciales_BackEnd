const mongoose = require("mongoose");

// Funcion de mongoose para crear una tabla llamada ProductsSchema
const ProductsSchema = mongoose.Schema ({
    vinCode: {type: String, required: true, trim: true, unique:true},//Garantizar que no se repita
    make: {type: String, required: true, trim: true},//
    model: {type: String, required: false, trim: true},
    year: {type: String, required: true, trim: true},
    color: {type: String, required: true, trim: true},
    mileage: {type: String, required: true, trim: true},
    capacity: {type: String, required: true, trim: true},
    price: {type: Number, required: true, trim: true},
    image1: {type: String, required: true, trim: true},
    image2: {type: String, required: false, trim: true, default: null},
    image3: {type: String, required: false, trim: true},
    image4: {type: String, required: false, trim: true},
    image5: {type: String, required: false, trim: true},
    image6: {type: String, required: false, trim: true},
    image7: {type: String, required: false, trim: true},
    image8: {type: String, required: false, trim: true},
    image9: {type: String, required: false, trim: true},
    image10: {type: String, required: false, trim: true},
    image11: {type: String, required: false, trim: true},
    image12: {type: String, required: false, trim: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "Users"},//id del creador del registro
    registerDate: {type: Date, default: Date.now()},
    status: {type: Boolean, default: 1},//1 = En venta / 0 = Vendido
    soldDate: {type: Date, default: null},//La fecha de venta unicamente la puede insertar el admin y el master 
    soldBy: {type: String, default: null},//La fecha de venta unicamente la puede insertar el admin y el master
    statusModifiedBy: {type: String, default:null}//Pendiente definir el "type" 
});
/*****************PROPIEDADES******************/
//trim: true es una propiedad para eliminar espacios en la informacion recibida y almacenar en la BD sin espacios
//required: true es una propiedad para que no manden nullos o vacios. igual que el NOT NULL
//unique: true. propiedad para evitar que se repita esa informacion. ejemplo: un correo electronico no se puede repetir
//MongoDB nos crea ID automaticamente
//Todas estas propiedades se encuentran en https://mongoosejs.com/docs/guide.html

/*********DEFINIR NOMBRE DEL MODELO "Usuario" Y LO EXPORTA**********/
module.exports = mongoose.model("Products", ProductsSchema)//La funcion ProductsSchema() se va a invocar con "Products"