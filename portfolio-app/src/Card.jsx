

function Card({ profilePic, name, description }) {
    return (
        <div className='card'>
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Card;