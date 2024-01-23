const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.listen(4004, () => console.log('Server listening on port 4004'));

const ctrl = require('./controllers/controller.js');
const { default: axios } = require('axios');

//ROUTES 
app.get("/api/houses", ctrl.getHouses); 
app.post("/api/houses", ctrl.createHouse);
app.put("/api/houses/:id", ctrl.updateHouse); 
app.delete("/api/houses/:id", ctrl.deleteHouse);  
app.get("/api/houses/:id", ctrl.getHouseByID);

