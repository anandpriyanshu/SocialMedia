import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    addInitialPosts: () => { },
    deletePost: () => { }
})


const postListReducer = (currPostList, action) => {
    let newPostList = currPostList

    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter((card) => card.id !== action.payload.postId)
    }
    else if (action.type === 'ADD_INITIAL_POSTS') {
        newPostList = action.payload.posts
    }
    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList]
    }

    return newPostList
}

const PostListProvider = ({ children }) => {


    const [postList, dispatchPostList] = useReducer(postListReducer, [])

    const addPost = (post) => {

        // console.log(`${userId}  ${postTitle} ${postBody} ${reactions} ${tags} `)

        dispatchPostList({
            type: 'ADD_POST',
            payload: post
        })
    }





    const addInitialPosts = (posts) => {

        dispatchPostList({
            type: 'ADD_INITIAL_POSTS',
            payload: {
                posts
            }
        })
    }

    const deletePost = useCallback((postId) => {
        // console.log(`deleted ${postId} `)

        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId
            }
        }), [dispatchPostList]
    }

    )
    // const deletePost = (postId) => {
    //     // console.log(`deleted ${postId} `)

    //     dispatchPostList({
    //         type: 'DELETE_POST',
    //         payload: {
    //             postId
    //         }
    //     })
    // }


    return (
        // <PostList.Provider value={{ postList: postList, addPost: addPost, deletePost: deletePost }}>
        <PostList.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>
            {children}
        </PostList.Provider>
    )
}




export default PostListProvider