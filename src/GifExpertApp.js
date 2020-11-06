import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = () => {
  //const categories = ["One punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["Dragon Ball"]);
  /* const handleAdd = () => {
    setCategories([...categories, "BreakingBad"]);
  }; */
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategory={setCategories} />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
