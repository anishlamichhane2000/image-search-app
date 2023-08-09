import React from "react";
import "./ImageList.css"; 

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <div key={image.id} className="image-card">
          <div className="image-container">
            <img src={image.urls.small} alt={image.alt_description} />
            <p className="image-description">{image.description}</p>
          </div>
          <div className="image-info">
            <p className="user-name">{image.user.name}</p>
            <p>{image.likes} Likes</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
