import { UserSVG } from "../../image/svg/librarySVG";


const SignIn = (props) => {

    return (
        <>
            <div onClick={() => props.setActive(true)} onMouseDown={props.setEventClick} onMouseUp={props.setEventNotClick}
                className={props.content.isClick === true ? "buttonMainClick" : "buttonMain"}>
                <UserSVG className="buttonIcon" />
                <div className="buttonTitle">Sign in</div>
            </div>
        </>
    )
}

export default SignIn;