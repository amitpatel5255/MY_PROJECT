import React, { useContext, useState, useEffect } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { removeFromCart, cartItems } = useContext(ShopContext);

  // Define state to manage quantity for each item in the cart
  const [itemQuantities, setItemQuantities] = useState({});

  // Function to handle incrementing quantity for a specific item

  const incrementQuantity = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
        // const prod = cartItems.FindOne(cartItems.itemId)

    //get perticula]r product from cart and add or update attribute from it           
  };

  // Function to handle decrementing quantity for a specific item
  const decrementQuantity = (itemId) => {
    if (itemQuantities[itemId] > 0) {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  // Calculate subtotal of all items in the cart
  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.new_price * (itemQuantities[item.id] || 0);
    });
    return subtotal;
  };
  

  useEffect(() => {
    // If cart items change, reset quantities for particular items
    const newQuantities = {};
    cartItems.forEach((item) => {
      // Check if the item exists in the current quantities state
      // If it does, keep the quantity the same, otherwise default to 1
      newQuantities[item.id] = itemQuantities[item.id] || 1;
    });
    setItemQuantities(newQuantities);
  }, [cartItems, itemQuantities]); // Add itemQuantities to the dependencies
  

  return (
    <div className="CartItems">
      <div className="caritems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartItems.reduce((uniqueItems, item) => {
        if (!uniqueItems.some((uniqueItem) => uniqueItem.id === item.id)) {
          uniqueItems.push(item);
        }
        return uniqueItems;
      }, []).map((item) => (
        <div key={item.id}>
          <div className="caritems-format">
            <img src={item.image} alt="" className="carticon-product-icon" />
            <p>{item.name}</p>
            <p>${item.new_price}</p>
            <div className="denis">
              <h1>{itemQuantities[item.id]}</h1>
              <div>
                <button
                  className="cartitem-quantity"
                  onClick={() => incrementQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="cartitem-quantity"
                  onClick={() => decrementQuantity(item.id)}
                >
                  -
                </button>
              </div>
            </div>
            <p>${item.new_price * itemQuantities[item.id]}</p>
            <img
              className="cartitems-remove-icon"
              src={remove_icon}
              onClick={() => removeFromCart(item.id)}
              alt=""
            />
          </div>
          <hr />
        </div>
      ))}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>${calculateSubtotal()}</p> {/* Subtotal Calculation */}
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>${calculateSubtotal()}</h3> {/* Subtotal Used for Total */}
            </div>
          </div>
          <button>PROCED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have promocode, Enter here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
