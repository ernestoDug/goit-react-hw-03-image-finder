import css from './ImageGallery.module.css';


import ImageGalleryItem from "../ImageGalleryItem"
const ImageGallery = ({searchWord}) =>
{

    return (
    <ul className={css.gallery}>
<ImageGalleryItem
searchWord = {searchWord}
/>

</ul>
    )
}




export default ImageGallery

