var controllerpelicula = require('./controllerpelicula.js');
var controllerAdministrador = require('./controllerAdministrador.js');


module.exports = function(app) {
    
    
    var clasepelicula = new controllerpelicula();
    app.post('/api/nuevapelicula', clasepelicula.Guardar);
    app.post('/api/modificapelicula', clasepelicula.Modificar);
    app.post('/api/eliminapelicula', clasepelicula.Eliminar);
    app.post('/api/seleccionapelicula', clasepelicula.Seleccionartodos);
    app.post('/api/seleccionarpeliculaporfecha', clasepelicula.Seleccionarporfecha);
    app.post('/api/seleccionarpeliculaporid', clasepelicula.Seleccionarporid);

    var claseadm = new controllerAdministrador();

    app.post('/api/nuevoadm', claseadm.Guardar);

    app.post('/api/loginadm', claseadm.Login);
    
    app.post('/api/seleccionarpeliculapornombre', clasepelicula.Seleccionarpornombre);
    
    app.get('*', function(req, res){ //localhost:8080
        res.sendfile('./login.html'); //carga unica visita
    });
};