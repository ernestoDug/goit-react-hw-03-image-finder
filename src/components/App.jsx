import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// npm i react-toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import { fetchIMG } from '../helpers/fetchIMG';

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
    // console.log(this.state.responseIMG, "Є");
  };
  // давай ще
  givMeMore = () => {
    this.setState(prevState => {
      return { curPg: prevState.curPg + 1 };
    });
  };

  // запитувач
  async componentDidUpdate(_, prevState) {
    // console.log('prVpr', this.state.curPg);
    const { curPg, inputSearch } = this.state;
    if (inputSearch !== prevState.inputSearch || curPg !== prevState.curPg) {
      //  вмикання  лодеря...
      this.setState({ loading: true });
      // запит
      try {
        const respImg = await fetchIMG(inputSearch, curPg).then(respImg => {
          // якщо пагінація
          curPg > 1 && respImg.request.status === 200
            ? // this.setState({responseIMG: [...this.state.responseIMG, ...respImg.data.hits]})
              this.setState(prevState => ({
                responseIMG: [...prevState.responseIMG, ...respImg.data.hits],
              }))
            : // якщо вперше
              this.setState({ responseIMG: respImg.data.hits });
          // що знайшли
          if (
            respImg.request.status === 200 &&
            respImg.data.hits.length !== 0 &&
            this.state.curPg === 1
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
        this.setState({ error });
        toast.warn(`🐒Отакої! ${error} 🐒`);
      } finally {
        // вимикання лодеря
        this.setState({ loading: false });
      }
    }
    // console.log(responseIMG, "'є'");
    // console.log(prevState.responseIMG, "було");
  }
  render() {
    const { responseIMG, loading } = this.state;
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
        {loading === true && <Loader />}

        {responseIMG.length !== 0 && (
          <>
            <ImageGallery
              // метод пропс для галерії
              imageForGalery={responseIMG}
            />
          </>
        )}

        {/* кнопка */}
        {responseIMG.length !== 0 && loading === false && (
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
