import './../scss/main.scss';
import './../scss/media.scss';
import AuthForm from './AuthForm';


const Modal = (props) => {
    return (
        <div className={props.content.isActive === false ? "PopUp" : "PopUp PopUpActive"} onClick={() => props.setActive(false)}>
            <AuthForm />
        </div>
    )
}

export default Modal;