import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import './Shimmer.css'

const Example = () => {
  return (
    <>
      
      <ShimmerSimpleGallery card imageHeight={100} caption col={4}  className="custom-card" />
      <ShimmerSimpleGallery card imageHeight={100} caption col={4}  className="custom-card" />
      <ShimmerSimpleGallery card imageHeight={100} caption col={4}  className="custom-card" />
      
      
    </>
  );
};



export default Example;
