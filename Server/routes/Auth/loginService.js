const express = require('express');
const router = express.Router();
const pool = require('../../db_connection');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {

})

router.get('/:id', (req, res) => {

})

router.post('/', (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    const query = 'SELECT * FROM login WHERE username = ?';
    pool.query(query, [username], (err, rows) => {
      if (err) {
        console.error('Error querying the database', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      if (rows.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const user = rows[0];
      // Compare the provided password with the stored password hash
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.error('Error comparing passwords:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
  
        if (!result) {
          return res.status(401).json({ error: 'Invalid password' });
        }
  
        // Password is correct, login successful
        // You can generate and send a token or session information here
        res.json({ message: 'Login successful' });
      });
    });
  });
  
router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;