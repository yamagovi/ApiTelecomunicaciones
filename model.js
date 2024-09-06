const mongoose = require('mongoose');
const userModel = new mongoose.Schema(
    {
        nomuser:{
            type: String
        },
        password:{
            type: String
        }        
    },
    {
        //para monitorear cuando se hacen cambios en la bd
        timestamps:true,
        versionkey:false, //es para la versión de la bd, se deja false indicando q está desactivado
    }
)

const ModelUser = mongoose.model("usuarios", userModel); //usuarios es el nombre de la colección en la bd
module.exports = ModelUser;