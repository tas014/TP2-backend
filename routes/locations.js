const crudTest = (app) => {
    const Prueba=require('../models/locations.js');

    //Funciones de endpoints
    //GET - Devuelve todos los elementos de la base de datos

    findAllItems = (req,res) => {
        console.log('Hasta aca funciona');
        Prueba.find((err,astronomy_activator)=>{
            if (!err) {
                console.log('GET /astronomy_activator');
                res.send(astronomy_activator)
            }
        })
    }
    //URLS
    app.get('/astronomy_activator', findAllItems);
}

module.exports = crudTest;