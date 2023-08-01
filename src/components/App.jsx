import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// npm i react-toastify

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Loader from 'components/Loader/Loader';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import { fetchIMG } from './helpers/fetchIMG';

class App extends Component {
  state = {
    inputSearch: '',
    responseIMG: [],
    isLoading: false,
    curPg: '',
    loading: false,
    error: null,
  };

  // отримувач з форми скидач сторінки та галереї
  submiterFromForm = inputSearch => {
    this.setState({ inputSearch, curPg: 1, responseIMG: [] });
    console.log('введено - ', inputSearch, 'fdf', "dfdfdfdfdfdf55", this.state.responseIMG);
     };

  // давай ще
  givMeMore = () => {
    this.setState(prevState => {
          return {
        curPg: prevState.curPg + 1,
        responseIMG: [ ...this.state.responseIMG, ...prevState.responseIMG ],
      };
    });
  };

  // запитувач
  async componentDidUpdate(_, prevState) {
    // console.log('prVpr', this.state.curPg);
    if (
      this.state.inputSearch !== prevState.inputSearch ||
      this.state.curPg !== prevState.curPg 
    ) {
      //  вмикання  лодеря...
      this.setState({ loading: true });
      // запит
      try {
        const respImg = await fetchIMG(
          this.state.inputSearch,
          this.state.curPg
        ).then(respImg => {
          // якщо прийшло без помилки
          if (respImg.request.status === 200 && prevState.responseIMG !== this.state.responseIMG) {
            this.setState({ responseIMG: respImg.data.hits });
            console.log(prevState.responseIMG, 999, this.state.responseIMG, 999,  respImg.data.hits)
          }
            
            // що знайшли
            if (
              respImg.request.status === 200 &&
              respImg.data.hits.length !== 0
            ) {
              toast.success(
                `🐒Ми знайшли ${respImg.data.totalHits} 🍌..., світлин 🐒`
              );
          }
          // нічого не знайшли
          if (respImg.data.hits.length === 0) {
            toast.warn(`🐒 Ми нічого не знайшли 🐒`);
          }
        });
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
        {/* лоадер чи галерея?  */}
        {this.state.loading === true ? (
          <Loader />
        ) : (
          <ImageGallery
            searchWord={inputSearch}
            // метод пропс для галерії
            imageForGalery={this.state.responseIMG}
          />
        )}

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
