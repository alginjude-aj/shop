const express = require('express');
const router = express.Router();
const pool = require('../../db_connection');

router.get('/', (req, res) => {

})

router.get('/:customerId', (req, res) => {
    const {customerId} = req.params;
    const query = `SELECT sale.billNumber, sale.billDate,sale.saleTotal, customer.name as customerName
                    FROM sale
                    join customer on sale.customerId = customer.id
                    
                    WHERE sale.customerId = ? `;
    pool.query(query, [customerId], (err, results) => {
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
    const { customerId, billNumber, total, purchaseDate } = req.body;
    const query = 'INSERT INTO sale ( billNumber, customerId, saleTotal, billDate ) VALUES (?,?,?,?)';

    pool.query(query, [billNumber, customerId, total, purchaseDate], (error, result) =>{
        if (error){
            console.error("an error occured", error);
            res.status(500).json({error: "an error occured"});
            return;
        } 
        const billId = result.insertId;
        console.log('Last inserted ID: ', billId);
        
        const { saleItems } = req.body;
        saleItems.forEach(item => {
            const itemTotal = item.quantity * item.price;
            const saleItemQuery = 'INSERT INTO sale_item (saleId, productId, unit, perUnit, total) VALUES (?, ?, ?, ?, ?)';
            pool.query(saleItemQuery, [billId, item.productId, item.quantity, item.price, itemTotal], (itemError, itemResult) => {
                if (itemError) {
                    console.error("error inserting sale item data", itemError);
                    res.status(500).json({ error: "error occurred" });
                } else {
                    console.log("Sale item data inserted successfully!")
                }
            });

        });

        res.json({ message: "Data inserted successfully!", billId });

    })
})
router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;




// POST endpoint for creating a new sale transaction
// app.post('/sales', async (req, res) => {
//     try {
//       const { customerId, items } = req.body;
  
//       // Validate input data
//       if (!customerId || !Array.isArray(items) || items.length === 0) {
//         return res.status(400).json({ error: 'Invalid input data' });
//       }
  
//       // Create a new sale record
//       const newSale = await Sale.create({
//         customer_id: customerId,
//         sale_date: new Date(),
//       });
  
//       // Create sale items and update stock
//       for (const item of items) {
//         const { productId, quantity } = item;
  
//         // Fetch the product details and stock quantity
//         const product = await Product.findOne({ where: { product_id: productId } });
//         const stock = await Stock.findOne({ where: { product_id: productId } });
  
//         // Validate product and stock availability
//         if (!product || !stock || stock.quantity < quantity) {
//           return res.status(400).json({ error: 'Invalid product or insufficient stock' });
//         }
  
//         // Create a sale item record
//         await Sale_Item.create({
//           sale_id: newSale.sale_id,
//           product_id: productId,
//           quantity,
//           unit_price: product.price,
//         });
  
//         // Update the stock quantity
//         await stock.update({ quantity: stock.quantity - quantity });
//       }
  
//       return res.status(201).json({ message: 'Sale transaction created successfully' });
//     } catch (error) {
//       console.error('Error creating sale transaction:', error);
//       return res.status(500).json({ error: 'Failed to create sale transaction' });
//     }
//   });
  