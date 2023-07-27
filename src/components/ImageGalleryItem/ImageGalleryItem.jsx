import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// npm i react-toastify

import { Component } from 'react';
import { fetchIMG } from '../helpers/fenchIMG';
import Loader from 'components/Loader/Loader';

// import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    findImage: [],
    loading: false,
    error: null,
  };

  async componentDidUpdate(prevprops, prevState) {
    console.log('prVpr', this.props);
    if (prevprops.searchWord !== this.props.searchWord) {
      //  вмикання  лодеря...
      this.setState({ loading: true });

      try {
        const respImg = await fetchIMG(this.props.searchWord);
        fetchIMG(this.props.searchWord).then(respImg => {
          // якщо прийшло без помилки
          if (respImg.request.status === 200) {
            this.setState({ findImage: respImg.data.hits });
            // що знайшли
            if(respImg.request.status === 200 && respImg.data.hits.length !== 0)
             toast.success(`🐒Ми знайшли ${respImg.data.totalHits}бана..., світлин🐒`);
          }
          // нічого не знайшли
          if (respImg.data.hits.length === 0) {
            toast.warn(`🐒Ми нічого не знайшли🐒`);
          }
        });
        return respImg;
      } catch (error) {
        // console.log(respImg.statusText,"txt")
        this.setState({ error });
        toast.warn(`🐒Отакої! ${error}🐒`);
      } finally {
        // вимикання лодеря
        this.setState({ loading: false });
      }
      // console.log(respImg, 'відповідь');
    }
  }

  render() {
    const { findImage, loading } = this.state;
    return (
            <>
        {loading && <Loader />}
        {findImage &&
          findImage.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <li key={id} className={css.galleryItem}>
                <img
                  className={css.imageGalleryItemImage}
                  src={webformatURL}
                  alt={tags}
                />
              </li>
            );
          })}
      </>
    );
  }
}

export default ImageGalleryItem;
