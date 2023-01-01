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
      {props.content.isActive == true ? <SignInForm setNoActive={props.setNoActive} /> : null}
      <div className="MainHeader">
        <Logo />
        <div className="buttonWrap">
          <Language />
          <SignIn setActive={props.setActive} setEventClick={props.setEventClick} setEventNotClick={props.setEventNotClick} content={props.content} />
        </div>
      </div>

      <div className="MainFooter">
        <SocialLinks />
      </div>

    </div>
  );
}

export default App;
