import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
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
  modalClos = (event) => {
    if(event.target === event.currentTarget )
    this.setState({ showMod: false });
  };

  render() {
    return (
      <>
        {/* галерея умова */}
       
            
                <li  className={css.galleryItem}>
                  <img
                    // адреса великого urla
                    onClick={() => {
                      this.modalOpen(this.props.largeImageURL);
                    }}
                    className={css.imageGalleryItemImage}
                    src={this.props.webformatURL}
                    alt={this.props.tags}
                  />
                  {/* поява модалки */}
                  {this.state.showMod && (
                    <Modal
                      largeImageURL={this.state.modalURL}
                      tag={this.props.tags}
                      modalCloser={this.modalClos}
                    />
                  )}
                </li>
                      </>
    );
  }
}

// протайпи
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
largeImageURL: PropTypes.string.isRequired,
tags: PropTypes.string.isRequired
};

export default ImageGalleryItem;
