import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(){

    const productList = useSelector(state =>state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();
    useEffect (()=>{

      dispatch(listProducts());
      return ()=>{

      };
    }, []);

    return loading ? <div>loading..</div> : error ? <div>{error}</div>:
    <ul className="products">
    {products.map(product=>
              <li key={product._id}>
              <div className="product">
              <Link to={"/product/"+product._id}><img className="product-image" src={product.image} alt="product" />
                <div className="product-name">
                  {product.name}
                </div>
                </Link>
                <div className="product-brand">{product.name}</div>
                <div className="product-price">{product.brand}</div>
                <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
              </div>
            </li>
      )};
  </ul>  
    
}

export default HomeScreen;