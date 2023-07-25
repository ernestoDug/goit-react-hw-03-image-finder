// import index from "./Searchbar/Searchbar";

import { Component } from 'react';
// import fetchIMG from 'components/helpers/fenchIMG';

// import PropTypes from 'prop-types';

// import css from './Filter.module.css';

class ImageGallery extends Component {
  state = {
    findImage: null,
  };

  
//   componentDidMount() {
//     fetchIMG(inputValue).then( findImage => this.setState({findImage}))
//   }

  render() {
    return (
    <> 
        {this.state.findImage && 
 <li class="gallery-item">
 <img src="" alt="" />
</li>
  }
    </>
    );
  }
}
export  default ImageGallery
