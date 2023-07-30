import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// npm i react-toastify
import PropTypes from 'prop-types';
import { Component } from 'react';

import { fetchIMG } from '../helpers/fetchIMG';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
// import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    findImage: [],
    loading: false,
    error: null,
    showMod: false,
    closMod: true,
    modalURL: '',
  };
  // відкривач модалу
  modalOpen = largeImageURL => {
    this.setState({ showMod: true, modalURL: largeImageURL });
  };
  // закривач модалу
  modalClos = () => {
    this.setState({ showMod: false });
    // console.log('cls');
  };
  // запит
  async componentDidUpdate(prevprops) {
    // console.log('prVpr', this.props);
    if (prevprops.searchWord !== this.props.searchWord) {
      //  вмикання  лодеря...
      this.setState({ loading: true });

      // запит
      try {
        const respImg = await fetchIMG(this.props.searchWord, 1).then(
          respImg => {
            // якщо прийшло без помилки
            if (respImg.request.status === 200) {
              // виклик методу пропсу для передачі галерії
              this.setState({ findImage: respImg.data.hits });
              this.props.imageFromGalery(respImg.data.hits);

              // що знайшли
              if (
                respImg.request.status === 200 &&
                respImg.data.hits.length !== 0
              )
                toast.success(
                  `🐒Ми знайшли ${respImg.data.totalHits} 🍌..., світлин 🐒`
                );
            }
            // нічого не знайшли
            if (respImg.data.hits.length === 0) {
              toast.warn(`🐒 Ми нічого не знайшли 🐒`);
            }
          }
        );
        return respImg;
      } catch (error) {
        // console.log(respImg.statusText,"txt")
        this.setState({ error });
        toast.warn(`🐒Отакої! ${error} 🐒`);
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
        {/* лоадер умова */}
        {loading &&
          findImage.map(({ id }) => {
            return (
              <li key={id}>
                <Loader />
              </li>
            );
          })}
        {/* галерея умова */}
        {this.props.responseIMG &&
          this.props.responseIMG.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return (
                <li key={id} className={css.galleryItem}>
                  <img
                    // адреса великого з
                    onClick={() => {
                      this.modalOpen(largeImageURL);
                    }}
                    className={css.imageGalleryItemImage}
                    src={webformatURL}
                    alt={tags}
                  />
                  {/* поява модалки */}
                  {this.state.showMod && (
                    <Modal
                      largeImageURL={this.state.modalURL}
                      tag={tags}
                      modalCloser={this.modalClos}
                    />
                  )}
                </li>
              );
            }
          )}
      </>
    );
  }
}

// протайпи
ImageGalleryItem.propTypes = {
  searchWord: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
