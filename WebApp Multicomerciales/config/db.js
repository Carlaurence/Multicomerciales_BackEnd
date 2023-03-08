const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connectDB = async() => {
    try{
        //Atributos de conexion de MongoDB con Mongoose
        const connection = await mongoose.connect(
            "mongodb+srv://db_multicomerciales:Db_multicomerciales2023@cluster0.qocpxs5.mongodb.net/?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`MongoDB Conectado en :${url}`);

    }catch(error){
        console.log(`error:${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;

