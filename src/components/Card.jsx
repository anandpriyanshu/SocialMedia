import { MdDelete } from "react-icons/md";
const Card = ({ card }) => {
    return (

        <div className="card post-card" style={{ width: "30rem" }}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body ">
                <h5 className="card-title" > {card.title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        <MdDelete />
                    </span>

                </h5>
                <p className="card-text">{card.body}</p>

                {card.tags.map((tag) => (
                    <span className="badge text-bg-primary hashtag">{tag}</span>
                ))}

                <div className="alert alert-success reactions" role="alert">
                    This post has been reacted by {card.reactions} people
                </div>
            </div>
        </div>

    )
}

export default Card