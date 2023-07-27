// import index from "./Searchbar/Searchbar";

import { Component } from 'react';
import {fetchIMG} from '../helpers/fenchIMG';

// import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    findImage: [],
  };

  async  componentDidUpdate(prevprops, prevState) {
    // this.props.searchWord()
    console.log('prVpr', this.props)
    if(prevprops.searchWord !== this.props.searchWord) {
     const respImg = await  fetchIMG(this.props.searchWord)
     fetchIMG(this.props.searchWord).then( respImg => this.setState({findImage: respImg.data.hits}))
     console.log(respImg.data.hits, "відповідь")
    }  
  }
  
  render() {
    const {findImage} = this.state
    return (
    this.state.findImage &&  findImage.map(({ id, webformatURL, largeImageURL, tags})   =>{
        return   <li key={id}
        className={css.galleryItem} 
        >
 <img className={css.imageGalleryItemImage}
 src={webformatURL} alt={tags} />
</li> })
)
  }       
} 
  


export  default ImageGalleryItem
