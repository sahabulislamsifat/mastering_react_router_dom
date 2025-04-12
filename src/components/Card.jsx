import React from "react";

const Card = ({ coffee }) => {
  const { name, image, category, id, origin, type, rating, popularity } =
    coffee || {};

  return (
    <div className="max-w-sm  rounded-sm shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-slate-200">
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
        <button
          onClick={() => alert(`Details of ${name}`)}
          className="mt-4 w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200 cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
