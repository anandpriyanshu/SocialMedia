import { createContext, useReducer } from "react";




export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
})


const postListReducer = (currPostList, action) => {
    return currPostList
}

const PostListProvider = ({ children }) => {


    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST)

    const addPost = () => {

    }
    const deletePost = () => {

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