import ImageGalleryItem from '../ImageGalleryItem';

import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';

const ImageGallery = ({ imageForGalery }) => {
  return (
    <>
      <ul className={css.gallery}>
        <ImageGalleryItem
          // перекидаю
          imageForGalery={imageForGalery}
        />
      </ul>
    </>
  );
};

// проптайпи
ImageGallery.propTypes = {
  imageForGalery: PropTypes.array.isRequired,
};

export default ImageGallery;
