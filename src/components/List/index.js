import React from 'react';
import './list.css'

const List = ({ giphs, handleImageClick }) => (
  <div>
    {
      giphs.map(item => 
        <img 
          key = {item.id}
          className = "image_giph"
          onClick   = { handleImageClick(item) }
          src       = {item.images.fixed_height_downsampled.url} 
          alt       = "Smiley face" 
          height    = "200" 
          width     = "200"
        />
      )
    }
  </div>
);

export default List;