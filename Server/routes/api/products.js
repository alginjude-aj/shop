const express = require('express');
const router = express.Router();
const pool = require('../../db_connection');

router.get('/', (req, res) => {
  let query = 'SELECT  *, name as label  FROM product where 1=1 ';
  if(req.query && req.query.q && req.query.q !== '') {
      query = query+'and name LIKE "%'+req.query.q+'%"';
  }
    pool.query(query, (err, results) =>{
        if(err){
            console.error("Error Fetching Data:", err);
            res.status(500).json({error:"An error occured"});
            return;
        }
        if(results.length === 0){
            res.status(404).json({error: "Data not found"});
        }else{
            res.send(results);
        }
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  
    pool.query('SELECT * FROM product WHERE id = ? ', [id], (error, result) =>{
      if(error){
        console.error("error fetching data:", error);
        res.status(500).json({error: "ann error occured"});
        return;
      }if(result.length === 0){
        res.status(404).json({error: "Data not found"});
      }else{
        res.send(result);
      }
    })
})

router.post('/', (req, res) => {
    const { name, sku, price } = req.body;
  
    const query = 'INSERT INTO product (name, sku, price) VALUES (?, ?, ?)';
    pool.query(query, [name, sku, price], (error, results) => {
      if (error) {
        console.error("Error submitting product:", error);
        res.status(500).json({ error: "Failed to enter product" });
      } else {
        res.status(200).json({ message: "Product entered successfully!" });
      }
    });
  });
  
  
router.put('/:id', (req, res) => {
  const { name, sku, price, id  } = req.body;

  const query = 'UPDATE product SET name = ?, sku = ?, price = ? WHERE id = ? ';
 
  pool.query(query, [name, sku, price, id], (error, results) =>{
    if(error){
      console.error("Error Editing product:", error);
      res.status(500).send({ error: 'Error updating product' });
      return;
    }else{
      res.status(200).send(results);
    }
  })


})

router.delete('/:id', (req, res) => {

})

module.exports = router;