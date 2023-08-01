import ImageGalleryItem from '../ImageGalleryItem';

// import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';

const ImageGallery = ({ imageForGalery }) => {
  return (
    <>
      <ul className={css.gallery}>
        <ImageGalleryItem
                    // переидаю
                    imageForGalery={imageForGalery}
        />
      </ul>
    </>
  );
};

// проптайпи
// ImageGallery.propTypes = {
//   searchWord: PropTypes.string.isRequired,
//   imageFromGalery: PropTypes.array.isRequired,
//   responseIMG: PropTypes.array,
// };

export default ImageGallery;
