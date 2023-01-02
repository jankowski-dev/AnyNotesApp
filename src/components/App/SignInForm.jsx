


const SignInForm = (props) => {
    return (

            <div className="form" onClick={e => e.stopPropagation()}>
                <div className="formHeader">
                <div onClick={() => props.setActive(props.isActive)} className="formButtonClose">X</div>
                </div>
            </div>
    )
}

export default SignInForm;