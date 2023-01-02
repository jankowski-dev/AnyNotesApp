


const withModalWindow = (Componet) => {
    let Component = (props) => {
        return (
            <div className={props.content.isActive === false ? "PopUp" : "PopUp PopUpActive"} onClick={() => props.setActive(false)}>
                <Component/>
            </div>
        )
    }
}