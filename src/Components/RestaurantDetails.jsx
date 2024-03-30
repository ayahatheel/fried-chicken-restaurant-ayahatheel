import React from 'react';
import RestaurantCard from './RestaurantCard';
import RestaurantList from './RestaurantList';

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

// hhhh