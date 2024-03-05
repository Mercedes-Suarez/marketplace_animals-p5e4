import { useLocation } from 'react-router-dom';

import Breadcrumbs from '../ProductDetail/Breadcrumbs.jsx';

import './productDetail.css';
import '../../index.css';

function ProductDetail() {
  const location = useLocation();
  const product = location.state.product;
  console.log(product);

  let productNameLowerCase = product.productName.toLowerCase();

  return (
    <>
      <div className='product-detail-container'>
        <section className='product-detail'>
          <section className="product-detail-image">
            <img
              src={product.productImage}
              alt={product.productName}
            />
          </section>
          <section className="product-detail-info">
            <Breadcrumbs />
            <h2>{productNameLowerCase}</h2>
            <p>{product.productPrice.monto} {product.productPrice.moneda}</p>
            <hr></hr>
            <p>{product.productDescription}</p>
            <section className="buttons">
              <button className="add-to-cart-btn">añadir al carrito</button>
              <button className='stock-btn'>{product.productStock} {product.productStock === 1 ? "ud en stock" : "uds en stock"}</button>

            </section>
          </section>
        </section>
      </div>
    </>
  );
}

export default ProductDetail;
