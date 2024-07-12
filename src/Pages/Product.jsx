import React from "react";
import all_products from "../Component/Assets/all_product";
// import shopContext from '../Context/ShopContext';
import { useParams } from "react-router-dom";

import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import Descriptionbox from "../Component/Descriptionbox/Descriptionbox";
import Reletedproducts from "../Component/Reletedproducts/Reletedproducts";
const Product = () => {
  const { ID } = useParams();
  const product = all_products.find((e) => e.id === Number(ID));
  return (
    <div>
      <ProductDisplay product={product} />
      <Descriptionbox />
      <Reletedproducts />
    </div>
  );
};

export default Product;
