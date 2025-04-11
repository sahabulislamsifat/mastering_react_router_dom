import React from "react";
import ParallaxBanner from "../components/ParallaxBanner";
import ReusableHeading from "../components/ReusableHeading";

const Home = () => {
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
      {/* Dynamic Nested component  */}
    </div>
  );
};

export default Home;
