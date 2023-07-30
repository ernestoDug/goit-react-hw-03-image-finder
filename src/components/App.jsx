import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// npm i react-toastify

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
// import { fetchIMG } from './helpers/fetchIMG';

class App extends Component {
  state = {
    inputSearch: '',
    responseIMG: [],
    isLoading: false,
  };

  // отримувач з форми запиту і запис у стейт
  submiterFromForm = inputSearch => {
    this.setState({ inputSearch });
    // console.log('введено - ', inputSearch);
  };

  // метод-пропс айтемам для галереї
  imageFromGalery = responseIMG => {
    this.setState({ responseIMG });
  };

  // метод для пропсу завантажити ще
  imageFromGaleryPag = pagImages => {
    this.setState(prevState => {
      // console.log(pagImages, 'pagBum');
      // console.log(this.state.inputSearch, 'inp');
      return { responseIMG: [...prevState.responseIMG, ...pagImages] };
    });
  };

  render() {
    const { responseIMG, inputSearch } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.submiterFromForm} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <ImageGallery
          searchWord={inputSearch}
          // метод пропс для галерії
          imageFromGalery={this.imageFromGalery}
          responseIMG={responseIMG}
        />
        {/* кнопка */}
        {responseIMG.length !== 0 && (
          <Button
            inputSearchPr={inputSearch}
            // метод пропс попвнення галереї
            imageFromGaleryPag={this.imageFromGaleryPag}
          />
        )}
      </div>
    );
  }
}
export default App;
