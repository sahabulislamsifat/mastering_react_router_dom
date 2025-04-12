import { useLoaderData } from "react-router-dom";
import Card from "../components/card";
import { useState } from "react";

const Coffees = () => {
  const data = useLoaderData();
  const [coffee, setCoffee] = useState(data);

  const handleSort = (sortType) => {
    if (sortType === "popularity") {
      const sortedData = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffee(sortedData);
    } else if (sortType === "rating") {
      const sortedData = [...data].sort((a, b) => b.rating - a.rating);
      setCoffee(sortedData);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center my-10">
        <div>
          <h1 className="text-3xl font-thin">
            Sort Coffee&apos;s by Popularity & Ratings -&gt;
          </h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning"
          >
            Sort by Popularity (DSC)
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning"
          >
            Sort by Rating (ASC)
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center mt-10">
        {coffee.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffees;
