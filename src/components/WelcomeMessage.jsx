

const WelcomeMessage = ({ onGetPostsClick }) => {
    return (

        // <center>

        //     <h3>Hey, there are no posts. Please create your post</h3>
        // </center>
        <>
            <div className="bg-white text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-8 fw-bold text-black">Hey, there are no posts. Please create your post</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">Quickly design Posts and customize in your own way</p>
                    </div>
                    <button onClick={onGetPostsClick} type="button" className="btn btn-primary">Get Posts from server</button>
                </div>
            </div>
        </>
    )
}

export default WelcomeMessage