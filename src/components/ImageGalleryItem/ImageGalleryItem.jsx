import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

import { nanoid } from 'nanoid';
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
  modalClos = (event) => {
    if(event.target === event.currentTarget || event.key === 'Escape')
    this.setState({ showMod: false });
  };

  render() {
    return (
      <>
        {/* галерея умова */}
        {this.props.imageForGalery &&
          this.props.imageForGalery.map(
            ({ webformatURL, largeImageURL, tags }) => {
              return (
                <li key={nanoid()} className={css.galleryItem}>
                  <img
                    // адреса великого urla
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
  imageForGalery: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
