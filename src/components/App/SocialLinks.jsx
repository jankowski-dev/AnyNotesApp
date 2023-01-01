
import { TwitterSVG, DribbbleSVG, GithubSVG } from "../../image/svg/librarySVG";



const SocialLinks = () => {
    return (
        <>
            <div className="buttonMain">
                <GithubSVG className="buttonIcon" />
            </div>
            <div className="buttonMain">
                <DribbbleSVG className="buttonIcon" />
            </div>
            <div className="buttonMain">
                <TwitterSVG className="buttonIcon" />
            </div>
        </>
    )
}

export default SocialLinks;