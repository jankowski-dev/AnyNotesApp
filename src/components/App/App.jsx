import '../../scss/main.scss';
import '../../scss/media.scss';

import SignIn from './SignIn';
import Language from './Language';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import SignInForm from './SignInForm';




const App = (props) => {

  return (
    <div className="MainContainer">
      <div className="MainToning"></div>
      <div className={props.content.isActive === false ? "PopUp" : "PopUp PopUpActive"} onClick={() => props.setActive(false)}>
      <SignInForm isActive={props.content.isActive} setActive={props.setActive}/>
        </div>
      <div className="MainHeader">
        <Logo />
        <div className="buttonWrap">
          <Language />
          <SignIn setActive={props.setActive} isActive={props.content.isActive} content={props.content} />
        </div>
      </div>

      <div className="MainFooter">
        <SocialLinks />
      </div>

    </div>
  );
}

export default App;
