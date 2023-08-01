import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';

import css from './Button.module.css';

const Button = ({ givMeMore }) => {
  return (
    <button className={css.button} onClick={() => givMeMore()}>
      Завантажити ще 🐵
    </button>
  );
};

// проптапи
// Button.propTypes = {
//   inputSearchPr: PropTypes.string.isRequired,
//   imageFromGaleryPag: PropTypes.func.isRequired,
// };

export default Button;
