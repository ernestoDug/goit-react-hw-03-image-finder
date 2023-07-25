// import index from "./Searchbar/Searchbar";

import { Component } from 'react';
// import fetchIMG from 'components/helpers/fenchIMG';

// import PropTypes from 'prop-types';

// import css from './Filter.module.css';

// let inputValue = "dog";



class Searchbar extends Component {
  state = {
    findImages: null,
  };

  // шукач
  changer = event => {
    this.setState({findImages: event.currentTarget.value.toLowerCase()});
  }

  // відпрвник
submiter = event => {

  event.preventDefault();

  // пропсик від апп
this.props.propsFromApp(this.setState.findImages)
// *********************************************************зупинився на 2018
  this.setState({findImages: ''})
}


  render() {
    return (
      <>
        {this.state.findImages && <div> {this.state.findImages}</div>}

        <header className="searchbar">
          <form className="form">
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
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

  