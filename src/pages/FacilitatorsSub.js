import React from 'react'

const FacilitatorsSub = (props) => {
    return (
        <div className="facilitators-sub">
            <div className="image" style={{backgroundImage: `url(${props.image})`, backgroundSize:`cover`}} >
            </div>
            
            <h1>{props.name}</h1>

            <div className="text">
                <span className="subhead">Topic</span>
                <p>{props.topic}</p>
                <hr />
                <span className="subhead">Profile</span>
                <p>{props.topic}</p>
            </div>
        </div>
    )
}

export default FacilitatorsSub
