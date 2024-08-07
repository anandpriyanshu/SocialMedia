import { createContext, useContext } from "react"
import Card from "./Card"
import { PostList } from "../store/post-list-store"

const CardList = () => {

    const { postList } = useContext(PostList)
    console.log(postList)
    return (
        <>

            {
                postList.map((post) => (
                    <Card key={post.id} card={post} />
                ))
            }


        </>
    )
}

export default CardList