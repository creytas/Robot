
const Card = ({id, name, email}) => {
    return (
        <div className="card card--color">
            <img src={"https://robohash.org/"+id} alt={name} className= "robot"/>
            <div>
                <h2 className="card-centered-text">{name}</h2>
                <p  className="card-centered-text">{email}</p>
            </div>
        </div>
    );
}

export default Card;
