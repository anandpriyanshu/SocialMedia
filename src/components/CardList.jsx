import { useContext, useEffect } from "react"
import Card from "./Card"
import { PostList } from "../store/post-list-store"
import WelcomeMessage from "./WelcomeMessage"

const CardList = () => {

    const { postList, addInitialPosts } = useContext(PostList)

    const handleGetPostclick = () => {
        // console.log("data get")
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) => {
                addInitialPosts(data.posts)
            })

    }

    return (
        <>
            {
                postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostclick} />
            }

            <center>

                <div className="cardslot">

                    {
                        postList.map((post) => (
                            <Card key={post.id} card={post} />
                        ))
                    }
                </div>
            </center>


        </>
    )
}

export default CardList