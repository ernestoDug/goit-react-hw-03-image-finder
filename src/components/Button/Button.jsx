import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import css from './Button.module.css';

const Button = ({ givMeMore }) => {
  return (
    <button 
    hidden = {givMeMore  !== undefined ? true : false }
    
    className={css.button} 
    
    onClick={() => givMeMore()}>
      Завантажити ще 🐵
    </button>
  );
};

// проптайпи
Button.propTypes = {
  givMeMore: PropTypes.func.isRequired,
};

export default Button;
