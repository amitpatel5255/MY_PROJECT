import React, { useContext } from "react";
import "./ProductDisplay.css";
// import Product from '../../Pages/Product';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { Link, useParams } from "react-router-dom";
import all_product from "../Assets/all_product";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = () => {
  const { addToCart  } = useContext(ShopContext);
  const { id } = useParams();
  const product = all_product.find((e) => e.id === Number(id));
 

  return (
    <>
      <div className="ProductDisplay">
        <div className="ProductDisplay-left">
          <div className="ProductDisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="ProductDisplay-img">
            <img
              className="ProductDisplay-main-img"
              src={product.image}
              alt=""
            />
          </div>
        </div>
        <div className="ProductDisplay-right">
          <h1>{product.name}</h1>
          <div className="ProductDisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="ProductDisplay-right-prices ">
            <div className="ProductDisplay-right-price-old">
              ${product.old_price}
            </div>
            <div className="ProductDisplay-right-price-new">
              ${product.new_price}
            </div>
          </div>
          <div className="ProductDisplay-right-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            beatae neque nisi exercitationem asperiores nobis, nemo cum omnis
            laudantium sequi!
          </div>
          <div className="ProductDisplay-right-size">
            <p>Select Size</p>
            <div className="ProductDisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          
            <button onClick={()=>addToCart(product)}>ADD TO CART</button>
          
          <p className="ProductDisplay-right-category">
            <span>Category:</span>Women , T-shirt Crop-top
          </p>
          <p className="ProductDisplay-right-category">
            <span>Tags:</span>Morden Letest
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
