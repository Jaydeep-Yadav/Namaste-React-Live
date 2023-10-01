import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://play-lh.googleusercontent.com/dSUXS56GXcH_cXbOoJmC5JwBNfhOJcoWJ-R_P1LIipbY7zmPYEYpSAcMcxSNqZ-yGDg=w240-h480-rw"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantList = [
  {
    name: "Kalam Hot",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xirbc6v3zscmyj1tfc04",
    cuisine: ["North", "Indian"],
    rating: "4.2",
  },
  {
    name: "SRM Chicken",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fca093fa246fbccd7b3074d71b11ab0f",
    cuisine: ["South", "Indian"],
    rating: "4",
  },
  {
    name: "Madurai Chicken",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/neanqktmq0cjlqnsm4pg",
    cuisine: ["Chinese", "Biryani"],
    rating: "3.9",
  },
  {
    name: "A2B Hotel",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/203b221988ce52724674f77db2382119",
    cuisine: ["Chinese", "Juices"],
    rating: "4.2",
  },
];

// const RestaurantCard = (props) => {
//   return (
//     <div className="card">
//       <img src={props.restaurant.image} alt="image" />
//       <h2>{props.restaurant.name}</h2>
//       <h3>{props.restaurant.cuisine.join(", ")}</h3>
//       <h4>{props.restaurant.rating} stars</h4>
//     </div>
//   );
// };

const RestaurantCard = ({ restaurant }) => {

    const { image, name, cuisine, rating } = restaurant;
  return (
    <div className="card">
      <img src={image} alt="image" />
      <h2>{name}</h2>
      <h3>{cuisine.join(", ")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
     {
        RestaurantList.map((restaurantItem, index) =>{
            return <RestaurantCard restaurant={restaurantItem} key={index} />
        })
     }
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
