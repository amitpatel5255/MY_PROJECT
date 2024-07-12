import React from 'react'
import "./Reletedproducts.css"
import Item from '../item/Item'
import data_product from "../Assets/data"

const Reletedproducts = () => {
  return (
    <div className='Reletedproducts'>
      <h1>Reletedproducts</h1>
      <hr />
      <div className="Reletedproducts-item">
        {data_product.map((item,i)=>{
            return (<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)
        })}
      </div>
    </div>
  )
}

export default Reletedproducts
