import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants, onDelete }) => {
 
return (
<div data-testid="restaurants-list">
{restaurants.map((restaurant, index) => (
<RestaurantCard
key={index}
name={restaurant.name}
location={restaurant.location}
rating={restaurant.rating}
onDelete={() => onDelete(index)} 
/>
))}
</div>
);
};

export default RestaurantList;
