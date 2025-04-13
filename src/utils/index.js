import { toast } from "react-toastify";

const getFavoriteCoffees = () => {
  return JSON.parse(localStorage.getItem("favoriteCoffees")) || [];
};

const favoriteCoffees = (coffee) => {
  const storedCoffees =
    JSON.parse(localStorage.getItem("favoriteCoffees")) || [];

  const alreadyExists = storedCoffees.some((item) => item.id === coffee.id);

  if (!alreadyExists) {
    storedCoffees.push(coffee);

    localStorage.setItem("favoriteCoffees", JSON.stringify(storedCoffees));

    toast.success(`${coffee.name}  Added to localStorage!`);
  } else {
    toast.error(`${coffee.name} Already added to localStorage!`);
  }
};

const removeFavoriteCoffees = (id) => {
  const storedCoffees = getFavoriteCoffees();

  const updatedCoffees = storedCoffees.filter((item) => item.id != id);

  localStorage.setItem("favoriteCoffees", JSON.stringify(updatedCoffees));

  toast.success(" Removed from localStorage!");
};

export { favoriteCoffees, getFavoriteCoffees, removeFavoriteCoffees };
