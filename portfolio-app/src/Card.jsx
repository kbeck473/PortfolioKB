import ProfilePic from './assets/pfp.png'
function Card(){

    return(
        <div className='card'>
            <img className='card-image' src= {ProfilePic} alt="profile picture"></img>
            <h2 classname='card-title'>Kyle Beck </h2>
            <p> I am making my website</p>


        </div>
    );
}

export default Card