import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["wolverine"]);

  /*
   const handleAdd = () => {
      //Primera forma
     //setCategories([...categories, 'Hunter']);

     //Segunda forma
     setCategories(cats => [...cats, 'Hunter'])
   } */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />

      <hr></hr>

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
