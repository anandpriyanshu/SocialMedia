import React from 'react'

const Card = ({ card }) => {
    return (

        <div className="card post-card" style={{ width: "18rem" }}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body ">
                <h5 className="card-title" > {card.title}
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {card.reactions}
                    </span>

                </h5>
                <p className="card-text">{card.body}</p>

                {card.tags.map((tag) => (
                    <span class="badge text-bg-primary hashtag">{tag}</span>
                ))}
            </div>
        </div>

    )
}

export default Card