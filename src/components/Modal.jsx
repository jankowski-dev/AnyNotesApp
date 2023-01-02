import './../scss/main.scss';
import './../scss/media.scss';
import SignInForm from './SignInForm';


const Modal = (props) => {
    return (
        <div className={props.content.isActive === false ? "PopUp" : "PopUp PopUpActive"} onClick={() => props.setActive(false)}>
            <SignInForm/>
        </div>
    )
}

export default Modal;