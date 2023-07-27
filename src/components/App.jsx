import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// npm i react-toastify


import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchIMG from 'components/helpers/fenchIMG';


class App extends Component {

  state = {
    inputSearch: ''
  }

  componentDidUpdate( prevState) {
    // fetchIMG(inputValue).then( findImage => this.setState({findImage}))
    // перевірка для запиту
    if(prevState.inputSearch !== this.state.inputSearch) {
// console.log("стало:", this.state.inputSearch, );
// console.log("було:",  prevState.inputSearch);
      fetchIMG(this.state.inputSearch);
       console.log("pec:",  this.props.fetchIMG());


    }
  }

  // отримувач з форми запиту і запис у стейт апп
  submiterFromForm = inputSearch => {
    this.setState({ inputSearch });
    // console.log("введено - ", inputSearch)
  }


  render (){

   return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 20,
      //   color: '#010101'
      // }}
    >
    <Searchbar
    
    onSubmit  = {this.submiterFromForm}
    />  
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

    <ImageGallery/>
    
      </div>
  );
};
}
export default App