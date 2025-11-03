import React from "react";

function Menu({ items }) {
  return (
    <div className="menu-container">
      {items.map((dish) => {
        
        let testId = "";
        if (dish.category === "Breakfast") testId = "menu-item-breakfast";
        else if (dish.category === "Lunch") testId = "menu-item-lunch";
        else if (dish.category === "Shakes") testId = "menu-item-shakes";

        return (
          <div key={dish.id} className="menu-item" data-test-id={testId}>
            <img src={dish.img} alt={dish.name} className="dish-img" />
            <h3>{dish.name}</h3>
            <p>{dish.category}</p>
            <p>{dish.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
