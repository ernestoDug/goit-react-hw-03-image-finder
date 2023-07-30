import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import { fetchIMG } from 'components/helpers/fetchIMG';
import { Component } from 'react';

import css from './Button.module.css';

class Button extends Component {
  state = {
    curPg: 2,
  };

  // метод для наступного запиту
  paginer = () => {
    const { curPg } = this.state;

    try {
      // перезапит
      fetchIMG(this.props.inputSearchPr, curPg).then(respImg => {
        // якщо прийшло без помилки
        if (respImg.request.status === 200) {
          // метод проп від ап
          this.props.imageFromGaleryPag(respImg.data.hits);

          // console.log(this.props.inputSearchPr, 'inp');
          // console.log(this.state.pagImages, "st")
          // console.log(this.state.curPg, 'curPg');

          // зміна сторінки

          this.setState(prevState => {
            return { curPg: prevState.curPg + 1 };
          });
        }
        // нічого не знайшли
        if (respImg.data.hits.length === 0) {
          toast.warn(`🐒 Ми більше нічого не знайшли 🐒`);
        }
      });
    } catch (error) {
      // console.log(respImg.statusText,"txt")
      this.setState({ error });
      toast.warn(`🐒Отакої! ${error} 🐒`);
    }
  };
  // поверення на початок при новомму слові
  componentDidUpdate(prevprops) {
    if (prevprops.inputSearchPr !== this.props.inputSearchPr) {
      this.setState({ curPg: 2 });
    }
  }
  render() {
    return (
      <button className={css.button} onClick={() => this.paginer()}>
        {' '}
        Завантажити ще 🐵{' '}
      </button>
    );
  }
}

// проптапи
Button.propTypes = {
  inputSearchPr: PropTypes.string.isRequired,
  imageFromGaleryPag: PropTypes.func.isRequired,
};

export default Button;
