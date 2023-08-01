import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';
import { Component } from 'react';

import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
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

  render() {
    return (
      <>
        {/* галерея умова */}
        {this.props.imageForGalery &&
          this.props.imageForGalery.map(
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

// // протайпи
// ImageGalleryItem.propTypes = {
//   searchWord: PropTypes.string.isRequired,
// };

export default ImageGalleryItem;
