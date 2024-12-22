import {useParams} from 'react-router-dom';

function ProductDetails() {
  let { productId } = useParams();

  //This will correctly parse even if productId is something like 'abc.123'
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}

export default ProductDetails;

//In your Route definition:
// <Route path="/products/:productId" element={<ProductDetails/>}/>