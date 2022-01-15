const express = require('express');
const morgan = require('morgan');
const app = express();

const port = 3000;

// connect to mysql database
require('./database');

// middleware to parse json
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/// routes
app.use("/hotel", require('./routes/hotel.routes'))

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
// El hotel debe tener los siguientes datos
// 1.	HotelID – number.
// 2.	HotelName – string.
// 3.	Categoria – (de 1 a 5 estrellas)
// 4.	Precio – number.
// 5.	3 fotos.
// 6.	Calificaciones de Clientes – Cada calidicación es entre 1 y 5 y puede contener un comentario. 
