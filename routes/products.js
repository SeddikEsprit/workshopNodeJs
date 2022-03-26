var express = require('express');
var router = express.Router();
var products=require('./prducts.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(products);
});
router.get('/:id', function (req, res, next) {
    res.json(products[req.params.id])
    // res.send(req.params.id)
});
/*router.get('/:id/:qt', function (req, res, next) {
    var id=req.params.id
    var qt=req.params.qt
    res.json({
         "id": id,
        "quantite" :qt,
        "unit_price":products[id].price,
        "total_price":products[id].price*qt,
    });
});*/
router.get('/instock/:qt', function (req, res, next) {
    var qt=req.params.qt

    var filtredProds={}
    Object.keys(products).forEach((key)=>{
        var prod=products[key]
        if(prod.stock>=qt){
            filtredProds[key]=prod
        }
    })
    res.json(filtredProds)
});
module.exports = router;
