import React, { useState } from 'react';
import './App.css'; 
import RestaurantList from './Components/RestaurantList';
import RestaurantForm from './Components/RestaurantForm';

function App() {
const [restaurants, setRestaurants] = useState([  {
  id: 1,
  name: "Fried Chicken",
  location: "Baghdad",
  rating: 4.5,
},
{
  id: 2,
  name: "Shamsani",
  location: "Baghdad",
  rating: 4.7,
}
]);

// const restaurantData = [
//   {
//     id: 1,
//     name: "Fried Chicken",
//     location: "Baghdad",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     name: "Shamsani",
//     location: "Baghdad",
//     rating: 4.7,
//   },
// ];


const addRestaurant = (newRestaurant) => {
setRestaurants([...restaurants, newRestaurant]);
};

const deleteRestaurant = (index) => {
setRestaurants(restaurants.filter((_, i) => i !== index));
};


// const changeRating = (id) => {
//   const updatedRestaurants = restaurants.map((restaurant) => {
//     if (restaurant.id === id) {
//       return { ...restaurant, rating: restaurant.rating + 0.1 }; // Increment rating
//     }
//     return restaurant;
//   });
//   setRestaurants(updatedRestaurants);
// };

return (
<div className="App">
<header className="App-header">
<h1>Fried Chicken Guide Web App</h1>
</header>
<div className="App-content">
{/* Add Restaurant Form /}
<RestaurantForm addRestaurant={addRestaurant} >
{/ Restaurant List */}
<RestaurantForm addRestaurant={addRestaurant} />
{/* <RestaurantList restaurants={restaurantData} onDelete={deleteRestaurantData} /> */}
<RestaurantList restaurants={restaurants} onDelete={deleteRestaurant} />
</div>
</div>
);
}



export default App;