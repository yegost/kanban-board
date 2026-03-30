function Card({ id, text, color, onDragStart, onDelete, onUpdateColor }) {
    return(
        <div 
            className="card"
            draggable
            onDragStart={() => onDragStart(id)}
            style={{ borderLeftColor: color }}
        >
            <input
                type="color"
                value={color}
                onChange={(e) => onUpdateColor(id, e.target.value)}
                className="card-color-picker"
                title="Change color"
            />
            <p>{text}</p>
            <button className="btn-delete" onClick={() => onDelete(id)}>✕</button>
        </div>
    );
}

export default Card;