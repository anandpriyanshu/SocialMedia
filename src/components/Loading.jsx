import React from 'react'

const Loading = () => {
    return (

        <div className="text-center spinner">
            <div className="spinner-border" style={{ width: '5rem', height: '5rem' }} role="status">
                <span className="visually-hidden">Loading in one...</span>
            </div>
        </div>

    )
}

export default Loading