import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// npm i react-toastify

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

class App extends Component {
  state = {
    inputSearch: '',
    responseIMG: [],
    isLoading: false,
  };

  // отримувач з форми запиту і запис у стейт апп
  submiterFromForm = inputSearch => {
    this.setState({ inputSearch });
    console.log('введено - ', inputSearch);
  };

  render() {
    const { responseIMG,  inputSearch,  } = this.state;

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
          showModProp={this.showMod}
        />
        {responseIMG.length !==0  && (<Button/>)}
      
      </div>
    );
  }
}
export default App;
