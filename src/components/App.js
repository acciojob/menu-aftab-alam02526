import React, { useState } from "react";
import Menu from "../components/Menu";
import "../styles.css";

function App() {
const menuData = [
    { id: 1, name: "Pancakes", category: "Breakfast", price: "$5", img: "https://via.placeholder.com/100" },
    { id: 2, name: "Burger", category: "Lunch", price: "$8", img: "https://via.placeholder.com/100" },
    { id: 3, name: "Milkshake", category: "Shakes", price: "$4", img: "https://via.placeholder.com/100" },
    { id: 4, name: "Omelette", category: "Breakfast", price: "$6", img: "https://via.placeholder.com/100" },
    { id: 5, name: "Pasta", category: "Lunch", price: "$9", img: "https://via.placeholder.com/100" },
    { id: 6, name: "Chocolate Shake", category: "Shakes", price: "$5", img: "https://via.placeholder.com/100" }, 
];
  const [menuItems, setMenuItems] = useState(menuData);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setMenuItems(menuData);
    } else {
      setMenuItems(menuData.filter((item) => item.category === category));
    }
  };

  return (
    <div id="main">
      <h1>Our Menu</h1>

      <div className="button-container">
        <button id="filter-btn-1" onClick={() => handleFilter("Breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => handleFilter("Lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => handleFilter("Shakes")}>
          Shakes
        </button>
      </div>

      <Menu items={menuItems} />
    </div>
  );
}

export default App;
