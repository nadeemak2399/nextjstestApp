'use client';
import React, { useState } from 'react'
const ImageGallery = ({image1, image2, image3}) => {


    const [selectedImage, setselectedImage] = useState(`/assets/${image1}.webp`);

    const changeselectedImage = (e) => {
      setselectedImage(e.target.src);
      console.log(e.target.src)
  };
  return (
    <div className="image-container">
        <img src={selectedImage} alt="selected" className='selected-image' />
        <div className="thumbnail-image-container">
            <img onClick={changeselectedImage} key={0} src={`/assets/${image1}.webp`} alt="custom honey bombs Embroidery patches" />
            <img  onClick={changeselectedImage} key={1} src={`/assets/${image2}.webp`} alt="custom rockford Embroidery patches" />
            <img  onClick={changeselectedImage} key={2} src={`/assets/${image3}.webp`} alt="custom virginia spaceport Embroidery Patches" />
            
        </div>
    </div>
  )
}

export default ImageGallery
