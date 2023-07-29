
import ImageGalleryItem from '../ImageGalleryItem';

import css from './ImageGallery.module.css';



const ImageGallery = ({ searchWord, imageFromGalery }) => {
  return (
    <>
    <ul className={css.gallery}>
      <ImageGalleryItem 
      // перекидаю
      searchWord={searchWord} 
      // переидаю 
      imageFromGalery={imageFromGalery}
  
   
      />
    </ul>
 
  </>
  );
};

export default ImageGallery;
