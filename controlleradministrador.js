var Item = require('./administrador');
    let administradorinstanciado = new Item(); 
module.exports = class _Administrador {
   constructor( ) {}
    
    
Guardar(req,res) {
    console.log(req.body.Clave);
    var claveysaltlocal = administradorinstanciado.setPassword(req.body.Clave);
    console.log(claveysaltlocal[0]);
   console.log(req.body.Clave);
	Item.create(
			{
   nombre: req.body.nombre,
    Clave: claveysaltlocal[0],
email: req.body.email,
    Imagen: req.body.Imagen,
    Estado: req.body.Estado,
             SALT: claveysaltlocal[1]   
            }, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
          else{    Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});}}); }   
 Modificar(req,res) {
		Item.update( {_id : req.body.id},
					{$set:
			{
  nombre: req.body.nombre,
    Clave: req.body.Clave,
email:req.body.email,
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
    Login(req,res) {
        console.log(req.body);
    	Item.find({email:req.body.email}, function(err, item) {
      
			if (err){
				res.send(err)
            }
        else{console.log(item[0].Clave);
             
            if(administradorinstanciado.validPassword(req.body.Clave,item[0].Clave,item[0].SALT))
                {
                    item[0].SALT="NO F..ING WAY";
					res.json(item); // devuelve todas las Personas en JSON	
                }
            else
                {
                    res.status(400).send({ 
                    message : "Datos incorrectos"
                }); 
                }}});}}