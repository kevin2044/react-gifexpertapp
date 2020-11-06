import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  /* console.log(data);
  console.log(loading); */

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {
        <div className="card-grid">
          {loading && (
            <p className="animate__animated animate__flash">Loading</p>
          )}
          {images.map((image) => {
            return <GifGridItem key={image.id} {...image} />;
          })}
        </div>
      }
    </>
  );
};

export default GifGrid;
