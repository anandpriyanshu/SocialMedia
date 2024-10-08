import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Card = ({ card }) => {

    const { deletePost } = useContext(PostList)
    return (


        <div className="card post-card" style={{ width: "30rem" }}>

            <div className="card-body ">
                <h5 className="card-title" > {card.title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        onClick={() => deletePost(card.id)}>
                        <MdDelete />
                    </span>

                </h5>
                <p className="card-text">{`${card.body.slice(0, 150)}...`} </p>


                {card.tags.map((tag) => (
                    <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
                ))}

                <div className="alert alert-success reactions" role="alert">
                    This post has been reacted by {card.reactions.likes} people
                </div>
            </div>
        </div>

    )
}

export default Card