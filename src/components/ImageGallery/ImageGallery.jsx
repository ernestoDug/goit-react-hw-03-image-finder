
import ImageGalleryItem from '../ImageGalleryItem';

import css from './ImageGallery.module.css';



const ImageGallery = ({ searchWord }) => {
  return (
    <>
    <ul className={css.gallery}>
      <ImageGalleryItem searchWord={searchWord} />
    </ul>
 
  </>
  );
};

export default ImageGallery;
