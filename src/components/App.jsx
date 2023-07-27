import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// npm i react-toastify


import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import fetchIMG from 'components/helpers/fenchIMG';


class App extends Component {

  state = {
    inputSearch: '',
    responseIMG: [],
    isLoading: false,
    error: null,
  }

  
  // отримувач з форми запиту і запис у стейт апп
  submiterFromForm = inputSearch => {
    this.setState({ inputSearch });
    console.log("введено - ", inputSearch)
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

{/* {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {responseIMG.length > 0 && } */}

        <ImageGallery 

searchWord={this.state.inputSearch} 

/>
      </div>
  );
};
}
export default App