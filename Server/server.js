const express = require('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const sigupRouter = require('./routes/Auth/signupService');
const loginRouter = require('./routes/Auth/loginService');
const Products = require('./routes/api/products');
const Stocks = require('./routes/api/stocks');
const Sales = require('./routes/api/sales');
const SaleItems = require('./routes/api/sale_items');
const Customers = require('./routes/api/customer');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'alginjude',
//     database: 'sample',
// })

app.use('/api/login', loginRouter);
app.use('/api/signup', sigupRouter);
// product
app.use('/api/products', Products);
// stock
app.use('/api/stocks', Stocks);
app.use('/api/sales', Sales);
app.use('/api/saleitems', SaleItems);
app.use('/api/customers', Customers);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });

