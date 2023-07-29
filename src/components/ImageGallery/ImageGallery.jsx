import ImageGalleryItem from '../ImageGalleryItem';

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

export default ImageGallery;
