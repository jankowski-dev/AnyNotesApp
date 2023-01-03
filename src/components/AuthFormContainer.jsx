import AuthForm from "./AuthForm";
import { connect } from "react-redux";
import { setActiveTab } from "./../redux/reducers/authReducer";

const mapStateToProps = (state) => {
  return {
    state: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveTab: (data) => {
      dispatch(setActiveTab(data));
    },
  };
};

const AuthFormContainer = connect(mapStateToProps, mapDispatchToProps)(AuthForm);

export default AuthFormContainer;
