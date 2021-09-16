import React from 'react';
import PropTypes from 'prop-types';
import { LiItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL,largeImageURL,alt="",getLargeImageURL}) => {
  
  return (
    <LiItem >
      <img
        className='galleryItemImage'
        src={webformatURL}
        alt={alt}
        onClick={()=>getLargeImageURL(largeImageURL)} 
      />
    </LiItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string,
    getLargeImageURL: PropTypes.func.isRequired,
  }),
};

export default ImageGalleryItem;