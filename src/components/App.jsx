import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// npm i react-toastify

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// import Loader from 'components/Loader/Loader';



import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import { fetchIMG } from './helpers/fetchIMG';

class App extends Component {
  state = {
    inputSearch: '',
    responseIMG: [],
    isLoading: false,
    curPg: 1,
    loading: false,

  };

  // отримувач з форми скидач сторінки та галереї
  submiterFromForm = inputSearch => {
        this.setState({ inputSearch,  curPg: 1, responseIMG: [] });
    console.log('введено - ', inputSearch);
  };

  // давай ще 
  givMeMore = () => { 
    this.setState(prevState => {
            console.log( this.state.curPg); 
  
      return { curPg: prevState.curPg + 1, responseIMG: [...prevState.responseIMG, ...this.state.responseIMG]  };
    });

  }

// запитувач
  async componentDidUpdate(_, prevState) {
    // console.log('prVpr', this.props);
    if (this.state.inputSearch !== prevState.inputSearch || this.state.curPg !== prevState.curPg ) {
      //  вмикання  лодеря...
      // this.setState({ loading: true });

      // запит
      try {
        const respImg = await fetchIMG(this.state.inputSearch, this.state.curPg).then(
          respImg => {
            // якщо прийшло без помилки
            if (respImg.request.status === 200) {
              // виклик методу пропсу для передачі галерії
              this.setState({ responseIMG: respImg.data.hits });
              // що знайшли
              if (
                respImg.request.status === 200 &&
                respImg.data.hits.length !== 0
              )
                toast.success(
                  `🐒Ми знайшли ${respImg.data.totalHits} 🍌..., світлин 🐒`
                );
            }
            // нічого не знайшли
            if (respImg.data.hits.length === 0) {
              toast.warn(`🐒 Ми нічого не знайшли 🐒`);
            }
          }
        );
        return respImg;
      } catch (error) {
        // console.log(respImg.statusText,"txt")
        this.setState({ error });
        toast.warn(`🐒Отакої! ${error} 🐒`);
      } finally {
        // вимикання лодеря
        this.setState({ loading: false });
      }
      // console.log(respImg, 'відповідь');
    }
  }










  // // метод для пропсу завантажити ще
  // imageFromGaleryPag = pagImages => {
  //   this.setState(prevState => {
  //     // console.log(pagImages, 'pagBum');
  //     // console.log(this.state.inputSearch, 'inp');
  //     return { responseIMG: [...prevState.responseIMG, ...pagImages] };
  //   });
  // };

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
          imageForGalery={this.state.responseIMG}
        />
        {/* кнопка */}
        {responseIMG.length !== 0 && (
          <Button
                   // // метод пропс попвнення галереї
            givMeMore={this.givMeMore}
          />
        )}
      </div>
    );
  }
}
export default App;
