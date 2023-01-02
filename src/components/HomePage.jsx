import SignIn from './SignIn';
import Language from './Language';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import Modal from './Modal';


const HomePage = (props) => {
    return (
    <div className="MainContainer">
      <div className="MainToning"></div>
      <Modal {...props}/>
        <div className="MainHeader">
            <Logo />
            <div className="buttonWrap">
                <Language />
                <SignIn setActive={props.setActive} />
            </div>
        </div>

      <div className="MainFooter">
        <SocialLinks />
      </div>

    </div>
    )
}

export default HomePage;