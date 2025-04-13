import React, { useEffect, useState } from "react";
import ReusableHeading from "../components/ReusableHeading";
import { getFavoriteCoffees, removeFavoriteCoffees } from "../utils";
import Card from "../components/card";

const Dashboard = () => {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    const showDataInTheDashboard = getFavoriteCoffees();
    setCoffee(showDataInTheDashboard);
  }, []);

  const handleRemove = (id) => {
    removeFavoriteCoffees(id);
    const showDataInTheDashboard = getFavoriteCoffees();
    setCoffee(showDataInTheDashboard);
  };

  return (
    <div>
      <ReusableHeading
        title="Welcome to Dashboard"
        subtitle={
          "Manage Coffees that you have perviously added as favorite. You can view and remove item from here."
        }
      ></ReusableHeading>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center mt-10">
        {coffee.map((coffee) => (
          <Card
            handleRemove={handleRemove}
            key={coffee.id}
            coffee={coffee}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
