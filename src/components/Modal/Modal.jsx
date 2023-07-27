import css from "./Modal.module.css"


const Modal = ({largeImageURL, tag}) =>
{

     
return(
<> 
<div className={css.overlay}>
  <div className={css.modal}>
    <img src={largeImageURL} alt={tag}/>
  </div>
</div>
</>
)
}

export default Modal