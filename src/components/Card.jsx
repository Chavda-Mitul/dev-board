import '../styles/Card.css';

function Card(props){
    return (
     <div className="card">
        <img src={props.img} alt="Keybord" />
        <h3>{props.name}</h3>
        <p>card discription</p>
    </div>
    );
}

export default Card;