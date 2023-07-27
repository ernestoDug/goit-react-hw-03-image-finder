// import index from "./Searchbar/Searchbar";

import { Component } from 'react';
// import fetchIMG from 'components/helpers/fenchIMG';

// import PropTypes from 'prop-types';

// import css from './Filter.module.css';

class ImageGallery extends Component {
  state = {
    findImage: null,
  };

   componentDidUpdate(prevprops, prevState) {
    console.log('prVpr', this.props)
    // this.setState({ isLoding: true });
    //     fetchIMG(inputValue).then( findImage => this.setState({findImage}))
    // // перевірка для запиту по пропсу від ап
    // if(prevprops.searchWord !== this.props.searchWord) {
    //   try {
    //     const responseIMG = fetchIMG("cat");
    //     this.setState({ responseIMG });
    //   } catch (error) {
    //     this.setState({ error });
    //   } finally {
    //     this.setState({ isLoading: false });
    //   }
    // }
  
  }
  






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
