import React from "react";
import ParallaxBanner from "../components/ParallaxBanner";
import ReusableHeading from "../components/ReusableHeading";
import CategoriesTab from "../components/CategoriesTab";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      {/* Banner  */}
      <ParallaxBanner></ParallaxBanner>
      {/* Reusable Heading */}
      <ReusableHeading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desire coffee category to browse specific coffees that fit it your test."
        }
      ></ReusableHeading>
      {/* Categories tab section  */}
      <CategoriesTab categories={categories}></CategoriesTab>
      {/* Dynamic Nested component  */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
