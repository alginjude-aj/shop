const express = require('express');
const router = express.Router();
const pool = require('../../db_connection');

router.get('/', (req, res) => {

})

router.get('/:billNumber', (req, res) => {
    const {billNumber} = req.params;
    const query = `SELECT sale.billNumber, sale.saleTotal, customer.name AS customerName , product.name AS productName ,
                    product.price , sale_item.unit, sale_item.total 
                    FROM sale
                    JOIN sale_item ON sale.id = sale_item.saleId
                    JOIN product ON sale_item.productId = product.id
                    JOIN customer ON sale.customerId = customer.id
                    WHERE sale.billNumber = ? `;
        pool.query(query, [billNumber], (err, results) => {
            console.log(results);
            if (err) {
              console.error('Error executing the query:', err);
              return res.status(500).json({ error: 'Internal server error' });
            }
            if (results.length === 0) {
              return res.status(404).json({ error: 'Sale not found' });
            }
            res.send(results);
          });
})

router.post('/', (req, res) => {
    const { customerId, productId, quantity, price } = req.body;
    const total = quantity * price;

    const query = 'INSERT INTO sale_item ( saleId, productId, unit, perUnit, total) VALUES (?,?,?,?,?)';
    pool.query(query, [customerId, productId, quantity, price, total], (error, result)=>{
        if(error){
            console.error("error inserting data", error);
            res.status(500).json({error: "error occured"});
        } else {
            res.send(result);
        }
    })
})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;