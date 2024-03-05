import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const UserProducts = ({ userId }) => {
 const [products, setProducts] = useState([]);

 useEffect(() => {
    axios.get('/api/products').then((res) => {
       const userProducts = res.data.products.filter(product => product.userId === userId);
       setProducts(userProducts);
    });
   }, [userId]);   

 return (
    <div>
      <h2>Productos del Usuario</h2>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.productImage} alt={product.productName} />
          <h3>{product.productName}</h3>
          <p>{product.productDescription}</p>
          <p>Precio: {product.productPrice.monto} {product.productPrice.moneda}</p>
        </div>
      ))}
    </div>
 );
};

UserProducts.propTypes = {
 userId: PropTypes.string.isRequired,
};

export default UserProducts;
