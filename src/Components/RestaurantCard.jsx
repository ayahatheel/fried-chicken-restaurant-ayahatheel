import React from 'react';
import { useState } from 'react';

const RestaurantCard = ({ name, location, onDelete, rating, initialRating }) => {
    // const [rating, setRating] = useState(initialRating);

    // const changeRating = () => {
    //     setRating(rating + 0.1); 
    //   };
    

return (
<div className="card custom-card">
<div className="card-body">
<h5 className="card-title" data-testid="restaurant-name">{name}</h5>
<p className="card-text" data-testid="restaurant-location">Location: {location}</p>
<p className="card-text" data-testid="restaurant-rating">Rating: {rating}</p>
<button className="btn" >Change Rate</button>
<button className="btn" onClick={onDelete}>Delete</button>
</div>
</div>
);
};

export default RestaurantCard;
