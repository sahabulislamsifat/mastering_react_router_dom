import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
  const { category } = useParams();
  //   console.log(category);
  const data = useLoaderData();
  //   console.log(data);
  const [coffee, setCoffee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const filterDataByCategory = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffee(filterDataByCategory);
    } else {
      setCoffee(data.slice(0, 6));
    }
  }, [data, category]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center mt-10">
        {coffee.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>

      {/* Navigate to view all coffees  */}
      <div className="flex justify-end mt-10">
        <button
          onClick={() => navigate("/coffees")}
          className="btn btn-sm bg-yellow-500 text-white cursor-pointer text-sm font-medium hover:bg-yellow-600 border-none"
        >
          View All Coffees...
        </button>
      </div>
    </>
  );
};

export default CoffeeCard;
