import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Component } from 'react';


class App extends Component {

  // отримувач з форми
  sumiterFromForm = findImages => {

  }


  render (){

 
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Searchbar
    
    propsFromApp = {this.sumiterFromForm}
    />  

    <ImageGallery/>
    
      </div>
  );
};
}
export default App