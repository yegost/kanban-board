import { useState, useRef } from "react";

function Card({ id, text, color, onDragStart, onDelete, onUpdateCard }) {
    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState(text);
    const [editColor, setEditColor] = useState(color);
    const colorRef = useRef(null);

    function handleSave() {
        if (editText.trim() === "") return;
        onUpdateCard(id, editText.trim(), editColor);
        setEditing(false);
    }

    function handleCancel() {
        setEditText(text)
        setEditColor(color)
        setEditing(false)
    }

    if (editing) {
        return (
            <div className="card editing" style={{ borderLeftColor: editColor }}>
                <input
                    className="card-input"
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSave()}
                    autoFocus
                />
                <div className="add-card-actions">
                <input
                    ref={colorRef}
                    type="color"
                    value={editColor}
                    onChange={(e) => setEditColor(e.target.value)}
                    style={{ display: "none" }}
                />
                <button
                    className="btn-color"
                    onClick={() => colorRef.current.click()}
                    style={{ borderColor: editColor, color: editColor}}
                >
                    Change color
                </button>
                <button className="btn-confirm" onClick={handleSave}>Save</button>
                <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        )
    }
    return(
        <div 
            className="card"
            draggable
            onDragStart={() => onDragStart(id)}
            style={{ borderLeftColor: color }}
        >
            <p>{text}</p>
            <div className="card-actions">
                <button className="btn-edit" onClick={() => setEditing(true)}>✏️</button>
                <button className="btn-delete" onClick={() => onDelete(id)}>✕</button>
            </div>
        </div>
    );
}

export default Card;