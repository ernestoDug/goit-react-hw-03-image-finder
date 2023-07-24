// import index from "./Searchbar/Searchbar";

import { Component } from 'react';

// import PropTypes from 'prop-types';

// import css from './Filter.module.css';

import axios from 'axios';

// const MY_KEY = '28539247-0afb9c376c93f2bc11eaacc3c';

// const BASE_URL = 'https://pixabay.com/api';

class Searchbar extends Component
{
    state ={
        findImage: null,
    }


// функція запиту
async  componentDidMount() {
//   loaderVar.removeAttribute('hidden');
  const responseImg = await axios.get(
"https://pixabay.com/api/?q=cat&page=1&key=28539247-0afb9c376c93f2bc11eaacc3c&image_type=photo&orientation=horizontal&per_page=12",
    {

        // ${currentPage}
      params: {
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 12,
      },
    }
  );
//   для вантажника
 




//   console.log(inputValue, currentPage)
  console.log(Searchbar, responseImg, '*****resp*****');
//   loaderVar.setAttribute('hidden', 'hidden');

  // сповіщення про кількість сторінок
//   if (page === 1 && responseImg.data.hits.length !== 0) {
//     // Notify.info(`🕵️‍♀️ УРА, Ви знайшли ${responseImg.data.totalHits} світлин`);
//   }
//   // сповіщення відсутність
//   if (responseImg.data.hits.length === 0 && page === 1) {
//     Notify.warning(`🥺 Шкода, світлин не знайдено...`);
//   }

  // console.log("page", responseImg.data.total, "88888888", responseImg.data.hits);

//   return [responseImg.data.hits, responseImg.data.totalHits];
}






    render()
    {

     return (
        <> 
        {this.state.findImage && (<div> почекай</div>)}
   

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
            placeholder="Search images and photos"
          />
        </form>
      </header> 
      </>
     )

    }
}

export default Searchbar