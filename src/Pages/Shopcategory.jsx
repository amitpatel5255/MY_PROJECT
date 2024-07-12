import React, { useContext } from 'react'
import './Shopcatagory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Component/item/Item'

const Shopcategory = (props) => {
  console.log(props)
  const {all_product}= useContext(ShopContext)
  return (
    <div className='Shopcatagory'>
      <img className='Shopcatagory-banner' src={props.banner} alt="" />
      
      <div className="shopcatagory-products">
        {all_product.map((item,i)=>{
          console.log(item)
          if(props.category ===item.category){
            return(
              <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              )}
            else{
              return (null)
            }
        
        })}
      </div>
      <div className="shopcatagory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default Shopcategory
