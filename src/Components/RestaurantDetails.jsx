import React from 'react';

const RestaurantDetails = ({ restaurant }) => {
return (
<div className="restaurant-details">
<h2>{restaurant.name}</h2>
<p>Location: {restaurant.location}</p>
<p>Rating: {restaurant.rating}</p>
</div>
);
};

export default RestaurantDetails;

