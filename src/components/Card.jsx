import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Card = ({ coffee, handleRemove }) => {
  const { name, image, category, id, origin, type, rating, popularity } =
    coffee || {};

  const { pathname } = useLocation();

  return (
    <div className="max-w-sm relative rounded-sm shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-slate-200">
      <img
        src={image}
        alt={name}
        className="w-80 p-4 rounded h-56 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Category:</span> {category}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Origin:</span> {origin}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Type:</span> {type}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Rating:</span> {rating} ⭐
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Popularity:</span> {popularity}
        </p>

        {/* Button */}
        <Link
          to={`/coffee_details/${id}`}
          className="mt-4 btn w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200 cursor-pointer inline-block text-center"
        >
          View Details
        </Link>
      </div>

      {pathname === "/dashboard" && (
        <button
          onClick={() => handleRemove(id)}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition duration-200 cursor-pointer"
        >
          <FaTrash />
        </button>
      )}
    </div>
  );
};

export default Card;
