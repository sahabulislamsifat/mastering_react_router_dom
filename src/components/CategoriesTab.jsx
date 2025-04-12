import React from "react";
import { Link, useLocation } from "react-router-dom";

const CategoriesTab = ({ categories }) => {
  const location = useLocation();

  return (
    <div className="tabs tabs-lifted justify-center font-medium">
      {categories.map((category) => {
        const path = `/category/${category.category}`;
        const isActive = location.pathname === path;

        return (
          <Link
            key={category.category}
            to={path}
            className={`tab ${isActive ? "text-yellow-500 font-bold" : ""}`}
          >
            {category.category}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoriesTab;
