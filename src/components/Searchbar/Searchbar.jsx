// import index from "./Searchbar/Searchbar";
import { Component } from 'react';


// import fetchIMG from 'components/helpers/fenchIMG';

// import PropTypes from 'prop-types';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// npm i react-toastify
import css from './Searchbar.module.css';


class Searchbar extends Component {
  state = {
    findImages: '',
  };

  // шукач
  changer = event => {
    
    this.setState({findImages: event.target.value.toLowerCase()});
  }

  // відпрвник
submiter = event => {
  event.preventDefault();
  // умова заборони пустого рядка
  if(this.state.findImages.trim()=== '')
  {
    
    toast.info("Треба почати пошук🕵️‍♀️")
    return
  }
  // пропсик від апп для отримання 

this.props.onSubmit(this.state.findImages);

// очищувач форми
  this.setState({findImages: ''});
}


  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form 
          onSubmit={this.submiter}
          className={css.form}>
            <button type="submit" 
            className={css.button}>
              <span className={css.buttonLab}>Шукати</span>
            </button>

            <input
              className={css.input}
              type="text"
              // autocomplete="off"
              // autofocus
              placeholder="Почніть пошук..."
              value={this.state.findImages}
              onChange={this.changer}
            />
          </form>
        </header>
      </>
    );
  }
}
export  default Searchbar





  // запит          
  // componentDidMount() {
  //   //   loaderVar.removeAttribute('hidden');
  //   const responseImg = axios.get(
  //     'https://pixabay.com/api/?q=cat&page=1&key=28539247-0afb9c376c93f2bc11eaacc3c&image_type=photo&orientation=horizontal&per_page=12',
  //     {
  //       // ${currentPage}
  //       params: {
  //         image_type: 'photo',
  //         orientation: 'horizontal',
  //         safesearch: 'true',
  //         per_page: 12,
  //       },
  //     }
  //     // запис у стан
  //     )
  // componentDidMount() {
  //   fetchIMG(inputValue).then( findImage => this.setState({findImage}))
  // }

  