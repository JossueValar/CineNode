class _Administrador {constructor(_id, 
    nombre,
    Clave,
    email,
    Imagen,
    Estado,
    SALT
    ){
        this._id=_id;
        this.nombre=nombre;
        this.Clave=Clave;
        this.email=email;
        this.Imagen=Imagen;
        this.Estado=Estado;
        this.SALT=SALT;
   }
                 
Guardar() {
   var objetoaenviar = this;
  // Return a new promise.
    return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'http://localhost:8080/api/nuevoadm');
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            }
            else
                {
                reject(xhr); 
                }
          };
          xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
        }
        catch(err) {
            reject(err.message);

        }
    });
}
    
    
Login() {
	
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'https://administrador-cine.herokuapp.com/api/loginadm');
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
            }
            else
                {
                reject(xhr); 
                }
          };
        
          xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
      }
      catch(err) {
        reject(err.message);

      }
  });
    
    
}   
    
    
                }
            
    let imagenenbase64 = "";
      $("#Foto").change(function(){
        readURL(this);
    });
    
    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();
                        
                reader.onload = function (e) {

                    imagenenbase64=e.target.result;

                        
                          
                }

                reader.readAsDataURL(input.files[0]);
        
        }
    }
    
             
            
        function botonguardaradmin(){
            var peliculainstanciada = new _Pelicula(0,
              
                document.getElementById("nombre").value,
                document.getElementById("Clave").value,
              document.getElementById("email").value,
                imagenenbase64,
                
               ""
                );
                                                        
                peliculainstanciada.Guardar().then(function(response) {
                    console.log("Success!", response);
                    alert("Guardado con exito");
              
                }, function(error) {
                    console.error("Failed!", error);
                    alert("Error " + error);
           
                    });                                       
                                                        
}