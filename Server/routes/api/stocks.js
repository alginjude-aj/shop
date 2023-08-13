const express = require('express');
const router = express.Router();
const pool = require('../../db_connection');

router.get('/', (req, res) => {
    const query = 'SELECT * FROM stock';
    pool.query(query, (error, result)=>{
        if(error){
            console.error("Error fetching stocks", error);
            res.status(500).json({error: "an error occured"});
            return;
        }
        if(result.length === 0){
            res.status(404).json({error: "Data not found"});
        }else{
            res.send(result);
        }
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM stock WHERE id = ?', [id], (error, result) =>{
        if(error){
            console.error("Error Getting stock", error);
            res.status(500).json({error: "An error occured"});
        }
        if(result.length === 0){
            res.status(404).json({error: "Data not Found"});
        }else{
            res.send(result);
        }
    })

})

router.post('/', (req, res) => {
    const {product_id, stock , stock_price} = req.body;

    const query = 'INSERT INTO stock ( product_id, stock, stock_price ) VALUES (?, ?, ?)';
    pool.query(query, [product_id, stock, stock_price], (error, result) =>{
        if(error){
            console.error("error entering stock:" , error);
            res.status(500).json({error: "An error occured"});
            
        }else{
            res.status(200).json({result: "stock entered successfully!!"})
        }
    })
})

router.put('/:id', (req, res) => {
    const { product_id, stock, stock_price, id} = req.body;
    
    const query = 'UPDATE stock SET product_id = ?, stock = ?, stock_price = ? WHERE id = ?';
    pool.query(query, [product_id, stock, stock_price, id], (error, result)=>{
        if (error){
            console.error("Error updating Stock", error);
            res.status(500).json({error: "An error occured"});
        }else{
            res.send(result);
        }
    })
})

router.delete('/:id', (req, res) => {

})

module.exports = router;