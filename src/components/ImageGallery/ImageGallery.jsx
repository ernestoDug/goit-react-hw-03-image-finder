import ImageGalleryItem from '../ImageGalleryItem';

import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';

const ImageGallery = ({ searchWord, imageFromGalery, responseIMG }) => {
  return (
    <>
      <ul className={css.gallery}>
        <ImageGalleryItem
          // перекидаю
          searchWord={searchWord}
          // переидаю
          imageFromGalery={imageFromGalery}
          responseIMG={responseIMG}
        />
      </ul>
    </>
  );
};

// проптайпи
ImageGallery.propTypes = {
  searchWord: PropTypes.string.isRequired,
  imageFromGalery: PropTypes.func.isRequired,
  responseIMG: PropTypes.array.isRequired,
};

export default ImageGallery;
