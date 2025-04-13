import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { favoriteCoffees, getFavoriteCoffees } from "../utils";

const CoffeeDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [coffee, setCoffee] = useState({});
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const singleData = data.find(
      (coffee) => String(coffee.id) === id || String(coffee._id) === id
    );
    setCoffee(singleData || {});

    const favorite = getFavoriteCoffees();
    const isExists = favorite.find(
      (item) => String(item.id) === String(singleData?.id)
    );
    if (isExists) {
      setIsAdded(true);
    }
  }, [data, id]);

  const handleFavorite = (coffee) => {
    const favorite = getFavoriteCoffees();
    const isExists = favorite.find(
      (item) => String(item.id) === String(coffee.id)
    );
    if (!isExists) {
      favoriteCoffees(coffee);
      setIsAdded(true);
    }
  };

  const {
    name,
    image: coffeeImage,
    ingredients,
    nutrition_info,
    description,
    making_process,
    rating,
    popularity,
    origin,
    type,
    category,
  } = coffee || {};

  if (!coffee || (!coffee.id && !coffee._id)) {
    return (
      <div className="text-center mt-20 text-xl text-red-500">
        Coffee not found!
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 my-10 bg-white rounded-lg shadow-md">
      <img
        src={coffeeImage}
        alt={name}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>

      <div className="grid grid-cols-2 gap-4 mb-4 text-gray-700">
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Type:</span> {type}
        </p>
        <p>
          <span className="font-semibold">Origin:</span> {origin}
        </p>
        <p>
          <span className="font-semibold">Rating:</span> {rating} ⭐
        </p>
        <p>
          <span className="font-semibold">Popularity:</span> {popularity}
        </p>
      </div>

      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Description:</span> {description}
      </p>

      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Making Process:</span> {making_process}
      </p>

      {ingredients?.length > 0 && (
        <div className="mb-4">
          <span className="font-semibold text-gray-800">Ingredients:</span>
          <ul className="list-disc list-inside text-gray-700">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {nutrition_info?.length > 0 && (
        <div className="mb-4">
          <span className="font-semibold text-gray-800">Nutrition Info:</span>
          <ul className="list-disc list-inside text-gray-700">
            {nutrition_info.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-end gap-10 mt-6">
        <button
          onClick={() => window.history.back()}
          className="mt-6 cursor-pointer px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-sm"
        >
          Back
        </button>
        <button
          disabled={isAdded}
          onClick={() => handleFavorite(coffee)}
          className={`mt-6 px-4 py-2 text-white rounded-sm ${
            isAdded
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
        >
          {isAdded ? "Already in Favorite" : "Add Favorite"}
        </button>
      </div>
    </div>
  );
};

export default CoffeeDetails;
