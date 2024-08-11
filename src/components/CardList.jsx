import { useContext } from "react"
import Card from "./Card"
import { PostList } from "../store/post-list-store"
import WelcomeMessage from "./WelcomeMessage"
import Loading from "./Loading"

const CardList = () => {

    const { postList, fetching } = useContext(PostList)




    return (
        <>

            {fetching && <Loading />}

            {!fetching && postList.length === 0 && <WelcomeMessage />}

            <center>
                <div className="cardslot">
                    {!fetching && postList.map((post) => (<Card key={post.id} card={post} />))}
                </div>
            </center>


        </>
    )
}

export default CardList