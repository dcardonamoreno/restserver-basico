const express = require('express');
const cors = require('cors');


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //middlewares
        this.middlewares();
        //rutas aplicacion
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());
        //Prseo y lectura body
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log('servidor correindo en puerto:', this.port);
        });
    }
          
}


module.exports = Server;