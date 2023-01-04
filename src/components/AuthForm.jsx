import Login from "./Login";
import Register from "./Register";

const AuthForm = (props) => {
  return (
    <div className="form" onClick={(e) => e.stopPropagation()}>
      <div className="form-header">
        <div
          className={props.state.activeTab === "login" ? "header-tab header-tab__active" : "header-tab"}
          onClick={() => props.setActiveTab("login")}>
          Sign In
        </div>
        <div
          className={props.state.activeTab === "register" ? "header-tab header-tab__active" : "header-tab"}
          onClick={() => props.setActiveTab("register")}>
          Sign Up
        </div>
      </div>
      {/* {props.state.activeTab === "login" ? <Login {...props} /> : null}
      {props.state.activeTab === "register" ? <Register {...props} /> : null} */}
      <div className={props.state.activeTab === "login" ? "form-fill form-fill__active" : "form-fill"}>
        <Login {...props} />
      </div>
      <div className={props.state.activeTab === "register" ? "form-fill form-fill__active" : "form-fill"}>
        <Register {...props} />
      </div>
    </div>
  );
};

export default AuthForm;
