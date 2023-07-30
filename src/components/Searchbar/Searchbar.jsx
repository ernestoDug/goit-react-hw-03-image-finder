import { Component } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// npm i react-toastify

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    findImages: '',
  };

  // шукач
  changer = event => {
    this.setState({ findImages: event.target.value.toLowerCase() });
  };

  // відпрвник
  submiter = event => {
    const { findImages } = this.state;
    event.preventDefault();
    // умова заборони пустого рядка
    if (findImages.trim() === '') {
      toast.info('🙊Треба почати пошук🙊');
      return;
    }
    // пропсик від апп для отримання

    this.props.onSubmit(findImages);

    // очищувач форми
    this.setState({ findImages: '' });
  };

  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form onSubmit={this.submiter} className={css.form}>
            <button type="submit" className={css.button}>
              <span className={css.buttonLab}>Шукати</span>
            </button>

            <input
              className={css.input}
              type="text"
              // autocomplete="off"
              // autofocus
              placeholder="Почніть пошук..."
              value={this.state.findImages}
              onChange={this.changer}
            />
          </form>
        </header>
      </>
    );
  }
}

// проптайпи
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
