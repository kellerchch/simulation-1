const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const master_controller = require('./master_controller');

console.log('getting here')
const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

// shelves
// Working
app.get( '/api/shelves/', master_controller.getAllShelves );

// bins
// Working
app.get( '/api/bins/:id', master_controller.getAllBins );

app.get( '/api/bin/:id', master_controller.getOne );
// Edit existing
app.put( '/api/bin/:id', master_controller.update );
app.delete( '/api/bin/:id', master_controller.delete );
// Working and post is to create
app.post( '/api/bin/:id', master_controller.create );



const port = process.env.PORT || 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );