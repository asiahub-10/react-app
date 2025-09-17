import SocialLink from "./SocialLink"
// import "./Card.css"
import Icon from "./assets/react.svg"
const card = {
    border: "1px solid rgba(245, 95, 26, 1)",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    color: "brown"
}

function Card() {
    return (
        <>
            <div id="card" style={card}>
                <img src={Icon} alt="" />
                <img src="https://placehold.co/100x100" alt="" />
                <h3 >New Name</h3>
                <h5>Designation</h5>
                <SocialLink />
            </div>
        </>
    )
}

export default Card
