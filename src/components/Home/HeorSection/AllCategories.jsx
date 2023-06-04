import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../../../hooks/useCategory";

const AllCategories = () => {
  const categories = useCategory();

  return (
    <>
      <div className="menu-widget">
        <p>
          <i className="fa fa-bars"></i>All Categories
        </p>
        <ul className="list-unstyled">
          {categories.map((category, i) => (
            <li key={i}>
              <Link to={`category/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AllCategories;
