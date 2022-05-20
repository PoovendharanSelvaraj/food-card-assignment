
import "./Navbar.css"

import images from "../data/offers.json"



export const Offers=()=>{
  return (
    <section className="offers">
        <div className="container">
          {images.map((image)=>
            <img className="offer" src={image} />
            )}; 
        </div>
    </section>
  )
}