


const SignInForm = (props) => {
    return (
        <div className="containerForm">
            <div className="form">
                <div className="formHeader">
                <div onClick={props.setNoActive} className="formButtonClose">X</div>
                </div>
                
            </div>
        </div>
    )
}

export default SignInForm;