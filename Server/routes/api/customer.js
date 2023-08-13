const express = require('express');
const router = express.Router();
const pool = require('../../db_connection');

router.get('/', (req, res) => {
    let query = 'SELECT  *, name as label  FROM customer where 1=1';
  
    if (req.query && req.query.q && req.query.q !== '') {
      query = query + ' AND name LIKE "%' + req.query.q + '%"';
    }
  
    pool.query(query, (err, results) => {
      if (err) {
        console.error("Error Fetching Data:", err);
        res.status(500).json({ error: "An error occurred" });
        return;
      }
  
      if (results.length === 0) {
        res.status(404).json({ error: "Data not found" });
      } else {
        res.send(results);
      }
    });
  });

  router.get('/all', (req, res) => {
    const query = 'SELECT *, customer.id as customerID  FROM customer ';
    pool.query(query, (error, result)=>{
        if(error){
            console.error("Error fetching customer", error);
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

})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;