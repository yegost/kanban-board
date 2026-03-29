function Card({ id, text, onDragStart }) {
    return(
        <div 
            className="card"
            draggable
            onDragStart={() => onDragStart(id)}
        >
            <p>{text}</p>
        </div>
    );
}

export default Card;