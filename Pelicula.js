var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var pelicula = new Schema({
    
    nombre: String,
    DuracionEnMinutos: Number,
    Genero: String,
    IdiomaAudio: String,
    IdiomaSub: String,
    Sinopsis: String,
    Clasificacion: String,
    Precio: Number,
    HoraInicio: Number,
    Fecha: Date,
    MinutoInicio: Number,
    Asientos: {
        A1:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        A2:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        A3:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        A4:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        A5:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        A6:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        
        B1:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        B2:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        B3:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        B4:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        B5:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        B6:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        
        C1:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        C2:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        C3:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        C4:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        C5:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        C6:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        
        D1:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        D2:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        D3:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        D4:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        D5:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        
        E1:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        E2:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        E3:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        E4:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        
        F1:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        F2:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        F3:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        F4:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        
        G1:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        G2:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        G3:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        G4:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        
        H1:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        H2:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        H3:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
        
        H4:{
            NombreEstudiante: String,
            Seccion: String,
            Carnet: Number
        },
    },
    Imagen: String,
    Estado: Number
});

module.exports = mongoose.model('Pelicula',pelicula);