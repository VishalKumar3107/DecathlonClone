import React from "react";
import "../allCss/RowCategory.css";

function RowCategory({ products, type }) {
  return (
    <div className="RowCategory">
      <p className="RowCategory-title">{type}</p>
      <div className="RowCategoryContainer">
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="RowCategoryProducts"
          >
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RowCategory;
