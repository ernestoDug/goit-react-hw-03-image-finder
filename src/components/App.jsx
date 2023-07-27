import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// npm i react-toastify


import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

class App extends Component {

  state = {
    inputSearch: '',
    responseIMG: [],
    isLoading: false,
    
  
  }

  
  // отримувач з форми запиту і запис у стейт апп
  submiterFromForm = (inputSearch) => {
    this.setState({ inputSearch });
    console.log("введено - ", inputSearch)
  }
// отримувач великого Урла
  modalDonor = (largeImageURLProp) => {
this.setState({modalURL: largeImageURLProp})
  }



  render (){
    // const { responseIMG, isLoading, error } = this.state;

   return (
    <div
 
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
        <ImageGallery 
        searchWord={this.state.inputSearch} 
showModProp={this.showMod}

/>


      </div>
  );
};
}
export default App