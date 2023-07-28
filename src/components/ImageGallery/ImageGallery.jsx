
import ImageGalleryItem from '../ImageGalleryItem';

import css from './ImageGallery.module.css';



const ImageGallery = ({ searchWord, responseIMG }) => {
  return (
    <>
    <ul className={css.gallery}>
      <ImageGalleryItem 
      // перекидаю
      searchWord={searchWord} 
      // переидаю 
      responseIMG={responseIMG}
      
      />
    </ul>
 
  </>
  );
};

export default ImageGallery;
