import React from "react";
import "../allCss/Rowsmallproducts.css";

function Rowsmallproducts({ products, type }) {
  return (
    <div className="Rowsmallproducts">
      <p className="Rowsmallproductstitle">{type}</p>
      <div className="RowsmallproductsContainer">
        {products.map((item) => (
          <div key={item.id} className="RowsmallproductsEach">
            <img
            className="smallrowsimage"
              src={item.image}
              alt={item.name}
            />
            <h3 className="smallrowstitle">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rowsmallproducts;
