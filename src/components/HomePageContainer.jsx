import HomePage from "./HomePage";
import { connect } from "react-redux";
import { setActiveModal } from "./../redux/reducers/modalReducer";



const mapStateToProps = (state) => {
    return {
        content: state.modal,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (data) => {
            dispatch(setActiveModal(data));
        },
    }
}

const HomePageWithModal = (props) => {
    return (
        <HomePage {...props} />
    )
}


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default AppContainer;