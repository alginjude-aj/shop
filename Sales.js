import React, { useState, useEffect } from 'react';

function CreateSale() {
  const [customerId, setCustomerId] = useState('');
  const [items, setItems] = useState([{ productId: '', quantity: '' }]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/products')
      
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setProducts(data);
      } else {
              console.error("Error fetching data")
            }
        } catch(error){
             console.error('Error fetching Data:', error);
            }   
 };
  const getProductById = (productId) => {
    return products.find((product) => product.productId === productId);
  };

  const handleCustomerIdChange = (event) => {
    setCustomerId(event.target.value);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { productId: '', quantity: '' }]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      customerId,
      items,
    };

    try {
      const response = await fetch('http://localhost:3001/api/sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Sale transaction created successfully');
        // Reset the form or perform any other necessary actions
      } else {
        console.error('Failed to create sale transaction');
        // Handle the error or display an error message
      }
    } catch (error) {
      console.error('Error creating sale transaction:', error);
      // Handle the error or display an error message
    }
  };

  const calculateTotalPrice = (productId, quantity) => {
    const product = getProductById(productId);
    return product ? product.price * quantity : 0;
  };

  return (
    <div>
      <h2>Create Sale</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customerId">Customer ID:</label>
          <input
            type="text"
            id="customerId"
            value={customerId}
            onChange={handleCustomerIdChange}
          />
        </div>
        <h3>Items:</h3>
        {items.map((item, index) => (
          <div key={index}>
            <label htmlFor={`productId-${index}`}>Product ID:</label>
            <input
              type="text"
              id={`productId-${index}`}
              value={item.productId}
              onChange={(event) =>
                handleItemChange(index, 'productId', event.target.value)
              }
            />
            <label htmlFor={`quantity-${index}`}>Quantity:</label>
            <input
              type="number"
              id={`quantity-${index}`}
              value={item.quantity}
              onChange={(event) =>
                handleItemChange(index, 'quantity', event.target.value)
              }
            />
            <span>Total Price: {calculateTotalPrice(item.productId, item.quantity)}</span>
            {index !== 0 && (
              <button type="button" onClick={() => removeItem(index)}>
                Remove Item
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addItem}>
          Add Item
        </button>
        <button type="submit">Create Sale</button>
      </form>

      <div className="wrapper">
        <div className="content-wrapper ml-0">
          {/* Main content */}
          <section className="content mt-3">
            {/* Default box */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Products</h3>
              </div>
              <div className="card-body p-0">
                <table className="table table-striped projects">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ProductId</th>
                      <th>Product</th>
                      <th>Unit</th>
                      <th>per.unit</th>
                      <th>Total Price</th>
                      <th className="text-center">Actions</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.productId}>
                        <td>{product.Id}</td>
                        <td>{product.productName}</td>
                        <td>{product.unit}</td>
                        <td>{product.price}</td>
                        <td>{product.totalPrice}</td>
                        <td className="text-center">
                          {/* Add action buttons here */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </section>
          {/* /.content */}
        </div>
      </div>
    </div>
  );
}

export default CreateSale;
