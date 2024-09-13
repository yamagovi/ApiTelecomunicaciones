const mongoose = require('mongoose');
const userModel = new mongoose.Schema(
    {
        cc:{
            type: Number
        },
        
        nombre:{
            type: String
        },
        
        apellido:{
            type: String
        },
        
        direccion:{
            type: String
        },

        telefono:{
            type: Number
        },

        servicio_solicitado:{
            type: String
        },

        num_contrato:{
            type: Number
        },

        tecnico_asignado:{
            type: String
        },
        
        estado:{
            type: String
        }
    },
    {
        //para monitorear cuando se hacen cambios en la bd
        timestamps:true,
        versionkey:false, //es para la versión de la bd, se deja false indicando q está desactivado
    }
)

const ModelUser = mongoose.model("ordenes", userModel); //ordenes es el nombre de la colección en la bd
module.exports = ModelUser;