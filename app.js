const express = require("express");
const dbconnect = require("./config");
const ModelUser = require("./model");
const app = express();

const router = express.Router();
//create
router.post('/', async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
})

//consultar
router.get('/', async (req, res) => {
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
})

//consultar por id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta)
})

//actualizar
router.put('/:id', async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id},body);
    res.send(respuesta)
})

//eliminar
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta)
})

app.use(express.json());
app.use(router);

app.listen(3005, ()=> {
    console.log("El servidor esta en el puerto 3005")
})

dbconnect();