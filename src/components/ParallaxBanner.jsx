import React from "react";
import { Parallax } from "react-parallax";

const ParallaxBanner = () => {
  return (
    <div>
      <Parallax
        bgImage="https://t4.ftcdn.net/jpg/02/34/63/07/360_F_234630793_eHKQucxaXftnWrecTJFITmD4cr3TlUgG.jpg"
        strength={300}
      >
        <div className="h-[700px] flex items-center justify-center">
          <div className="bg-[#212121] bg-opacity-500 p-6 rounded text-white text-center">
            <h1 className="text-4xl font-bold">Welcome to Coffee</h1>
            <p className="mt-2 text-lg">Taste the refinement in every cup.</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxBanner;
