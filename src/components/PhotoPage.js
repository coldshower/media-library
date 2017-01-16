import React from 'react';

export default ({ images, onHandleSelectImage, selectedImage }) => {
  return (
    <div className="col-md-6">
      <h2> Images </h2>
      <div className="selected-image">
        <div id={selectedImage.id}>
          <h6>{selectedImage.title}</h6>
          <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
        </div>
      </div>

      <div className="image-thumbnail">
        { 
          images.map((image, i) => {
            return (
              <div key={i} onClick={onHandleSelectImage.bind(this, image)}>
                <img src={image.mediaUrl} alt={image.title} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}