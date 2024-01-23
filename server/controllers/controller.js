module.exports = {
    'getHouses' : (req, res) => {
        res.status(200).send(dbjson);
    },
    'getHouseByID' : (req, res) => {
        dbjson.filter((element, index, arr) => {
            if (element.id === +req.params.id) {
                res.status(200).send(element);
            } 
        })
    },
    'deleteHouse' : (req, res) => {
        console.log(req.params.id - 1);
        dbjson.filter((element, index, arr) => {
            if (element.id === +req.params.id) {
                arr.splice(req.params.id - 1, 1);
                res.status(200).send(dbjson);
            }
        })
        res.status(400).send("Not found house with id " + id);
    },
    'createHouse' : (req, res) => {
        const {address, price, imageURL} = req.body;
        if (!address || !price || !imageURL) {
            res.status(400).send('Form field can not be empty!');
        }
        let newHouse = {
            id: houseID,
            address,
            price,
            imageURL
        }
        dbjson.push(newHouse); 
        res.status(200).send(dbjson); 
        houseID++; 
    }, 
    'updateHouse' : (req, res) => {
        const {type} = req.body;
        dbjson.filter((element, index, arr) => {
            if (element.id === +req.params.id) {
                if (type === 'minus') {
                    element.price = element.price - 10000;
                }
                else if (type === 'plus') {
                    element.price += 10000;
                }
            }
            res.status(200).send(dbjson);
        })
    }
}

const dbjson = require('../db.json');
let houseID = 4;



