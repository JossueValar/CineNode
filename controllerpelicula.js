var Item = require('./pelicula');
module.exports = class _Pelicula {
   constructor( ) {

   }
Guardar(req,res) {
	Item.create(//crea la id de mongo
			{
    nombre: req.body.nombre,
    DuracionMinutos: req.body.DuracionMinutos,
    Genero: req.body.Genero,
    IdiomaAudio: req.body.IdiomaAudio,
    IdiomaSub: req.body.IdiomaSub,
    Sinopsis: req.body.Sinopsis,
    Clasificacion: req.body.Clasificacion,
    Precio: req.body.Precio,
    HoraInicio: req.body.HoraInicio,
    Fecha: req.body.Fecha,
    MinutoInicio: req.body.MinutoInicio,
    Asientos: req.body.Asientos,
    Imagen: req.body.Imagen,
    Estado: req.body.Estado
            }, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
    
 Modificar(req,res) {
		Item.update( {_id : req.body._id},
					{$set:
			{
    nombre: req.body.nombre,
    DuracionMinutos: req.body.DuracionMinutos,
    Genero: req.body.Genero,
    IdiomaAudio: req.body.IdiomaAudio,
    IdiomaSub: req.body.IdiomaSub,
    Sinopsis: req.body.Sinopsis,
    Clasificacion: req.body.Clasificacion,
    Precio: req.body.Precio,
    HoraInicio: req.body.HoraInicio,
    FECHA: req.body.FECHA,
    MinutoInicio: req.body.MinutoInicio,
    Asientos: req.body.Asientos,
    Imagen: req.body.Imagen,
    Estado: req.body.Estado
            }}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}   
    
    Eliminar(req,res) {
	Item.remove({_id : req.body.id}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
Seleccionartodos(req,res) {
		Item.find(
		function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
                
                
					res.json(item); // devuelve todas las Personas en JSON	
                    	 
                }
				}
			);
    
    
    
}
    
    Seleccionarporfecha(req,res) {
	Item.find({Fecha:req.body.Fecha}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
    
    Seleccionarporid(req,res) {
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
}
    
    Seleccionarpornombre(req,res) {
	Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
}