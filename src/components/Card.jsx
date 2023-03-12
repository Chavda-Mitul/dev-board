import '../styles/Card.css';

function Card(props){
    return (
     <div className="card">
        <h3>{props.name}</h3>
        <img src={props.img} alt="Keybord" />
    </div>
    );
}

export default Card;