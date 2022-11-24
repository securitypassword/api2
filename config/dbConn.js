//Hacer la conexion de base de datos aqui con firebase
//Yo no saber pero segui el tutorial con mongo xdxd
//Si ya no se puede cmabiar pues son con mongo :v

const mongoose = require('mongoose');

const connectDB = async function (){
    try {
         mongoose.connect( process.env.DATABASE_URI , {
           useUnifiedTopology: true,
           useNewUrlParser: true
        }
        );
    } catch (err) {
        console.error(err);
    }
}

module.exports.connectDB = connectDB;
