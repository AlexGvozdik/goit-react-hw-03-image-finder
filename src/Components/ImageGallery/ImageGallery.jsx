import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { MyList } from './ImageGallery.styled';

const ImageGallery = ({images,onSelect}) => {
  return (
    <MyList >
        {images.map(({webformatURL,largeImageURL,tags,id})=>(
        
        <ImageGalleryItem 
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        alt={tags}
        getLargeImageURL={onSelect}
        />
         
        ))}
    </MyList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};
export default ImageGallery;