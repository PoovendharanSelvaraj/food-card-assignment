import "./Navbar.css"
import restaurant from "../data/restaurants.json"



export const Restaurants=()=>{
  return (
    <div className="container divider">
    <div className="cards">
       {restaurant.map((rest)=>
        
        <div className="card">
        <img width="254" height="160px" src={rest.image} />
        <div className="restaurant-details">
            <div className="restaurant-title">{rest.name}</div>
            <div className="restaurant-subtitle">
               {rest.category.join(", ")}
               </div>
        </div>
        <div className="restaurant-info">
            <div className="restaurant-ratings">
                <i className="material-icons star-icon">star</i> {rest.rating}
            </div>
             .<div className="restaurant-delivery-timings"> {rest.deliveryTimings}</div> .
            <div className="restaurant-cost-for-two">{rest.costForTwo}</div>
        </div>
        <div className="offer-banner">
            <span className="material-icons"> local_offer </span>
            <span className="offer-text">{rest.offer}</span>
        </div>
    </div>
        )};
      
    </div>
</div>
  )
}