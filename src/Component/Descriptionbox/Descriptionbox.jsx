import React from 'react'
import "./Descriptionbox.css"



const Descriptionbox = () => {
  return (
    <div className='Descriptionbox'>
        <div className="Descriptionbox-navigator">
            <div className="Descriptionbox-nav-box">Descriptionbox</div>
            <div className="Descriptionbox-nav-box  made">Review (122)</div>
        </div>
        <div className="Descriptionbox-description">
            <p>Understanding your customer is the first step to a great product description, as this tells you what information is most important to them. Think about your potential buyer’s age, gender, geographic location and interests. How much knowledge do they already have about your product? What is most important to them? A great product description speaks the language of your ideal customer and addresses them directly as “you.”</p>
            <p>A major job of product descriptions is to educate the customer about your product. Product descriptions need to clearly explain what the product does, how it’s used and other key facts. For example, someone looking at a hiking backpack will want to know things like how much gear it holds, how much it weighs and whether it’s waterproof. For other products, people might need to know about allergens or materials used.</p>
        </div>
    </div>
  )
}

export default Descriptionbox
