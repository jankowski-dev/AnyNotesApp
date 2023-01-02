import { UserSVG } from "./../image/svg/librarySVG";


const SignIn = (props) => {

    return (
        <>
            <div onClick={() => props.setActive(true)}
                className="buttonMain">
                <UserSVG className="buttonIcon" />
                <div className="buttonTitle">Sign in</div>
            </div>
        </>
    )
}

export default SignIn;