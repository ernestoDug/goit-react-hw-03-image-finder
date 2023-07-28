import css from './Button.module.css'

const Button = ({loadClick})=> {

    return <button className={css.button}
    onClick={loadClick}
    >
Завантажити ще 🐵
    </button>
}


export default Button