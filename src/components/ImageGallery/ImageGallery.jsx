// import index from "./Searchbar/Searchbar";

import { Component } from 'react';
// import fetchIMG from 'components/helpers/fenchIMG';

// import PropTypes from 'prop-types';

// import css from './Filter.module.css';

class ImageGallery extends Component {
  state = {
    findImage: null,
  };

  
  
  render() {
    return (
    <> 
        {this.state.findImage && 
 <li class="gallery-item"
//  key = {id}
 >
 <img src="webformatURL" alt="" />
</li>
  }
    </>
    );
  }
}
export  default ImageGallery
