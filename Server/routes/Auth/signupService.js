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
  
    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    // Check if the username already exists in the database
    const checkQuery = 'SELECT * FROM login WHERE username = ?';
    pool.query(checkQuery, [username], (err, rows) => {
      if (err) {
        console.error('Error querying the database:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      if (rows.length > 0) {
        return res.status(409).json({ error: 'Username already exists' });
      }
  
      // Hash the password
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          console.error('Error hashing password:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
  
        // Insert the user into the database
        const insertQuery = 'INSERT INTO login (username, password) VALUES (?, ?)';
        pool.query(insertQuery, [username, hash], (err) => {
          if (err) {
            console.error('Error inserting user into the database:', err);
            return res.status(500).json({ error: 'Internal server error' });
          }
  
          res.json({ message: 'Signup successful' });
      });
    });
  });
});

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;