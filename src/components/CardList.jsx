import { useContext, useEffect, useState } from "react"
import Card from "./Card"
import { PostList } from "../store/post-list-store"
import WelcomeMessage from "./WelcomeMessage"
import Loading from "./Loading"

const CardList = () => {

    const { postList, addInitialPosts } = useContext(PostList)

    const [fetching, setfetching] = useState(false)

    useEffect(() => {

        setfetching(true)
        const controller = new AbortController()
        const signal = controller.signal
        fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then((data) => {
                addInitialPosts(data.posts)
                setfetching(false)
            })

        return () => {
            console.log('Component killed')
            controller.abort()
        }
    }, [])


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