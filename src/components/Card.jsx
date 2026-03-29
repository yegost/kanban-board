function Card({ id, text, onDragStart, onDelete }) {
    return(
        <div 
            className="card"
            draggable
            onDragStart={() => onDragStart(id)}
        >
            <p>{text}</p>
            <button className="btn-delete" onClick={() => onDelete(id)}>✕</button>
        </div>
    );
}

export default Card;