import { act, createContext, useReducer } from "react";




export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
})


const postListReducer = (currPostList, action) => {
    let newPostList = currPostList

    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter((card) => card.id !== action.payload.postId)
    }
    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList]
    }

    return newPostList
}

const PostListProvider = ({ children }) => {


    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST)

    const addPost = (userId, postTitle, postBody, reactions, tags) => {

        // console.log(`${userId}  ${postTitle} ${postBody} ${reactions} ${tags} `)

        dispatchPostList({
            type: 'ADD_POST',
            payload: {

                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags

            }
        })
    }

    const deletePost = (postId) => {
        // console.log(`deleted ${postId} `)

        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId
            }
        })
    }


    return (
        // <PostList.Provider value={{ postList: postList, addPost: addPost, deletePost: deletePost }}>
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    )
}


const DEFAULT_POST_LIST = [
    {

        id: '1',
        title: 'Visiting Delhi',
        body: 'Hi there, I am going to Delhi for my vacation. Hope enjoying a lot. Peace out!',
        reactions: 2,
        userId: 'user-5',
        tags: ['Vacation', 'Mumbai', 'Enjoy']

    },
    {

        id: '2',
        title: 'Pass ho gye bhai',
        body: '4 saal naa padh ke bhi pass ho gye. Chilll out!',
        reactions: 10,
        userId: 'user-4',
        tags: ['Graduating', 'Unbelievable']

    }
]

export default PostListProvider