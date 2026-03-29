import { useState } from "react";
import Card from "./Card";

function Column({ title, cards, onAddCard }) {
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState("");

  function handleSubmit() {
    if (text.trim() === "") return;
    onAddCard(title, text.trim());
    setText("");
    setAdding(false);
  }

  return (
    <div className="column">
      <h2>{title}</h2>
      {cards.map((card) => (
        <Card key={card.id} text={card.text} />
      ))}
      {adding ? (
        <div className="add-card-form">
          <input
            className="card-input"
            type="text"
            placeholder="Enter card title..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            autoFocus
          />
          <div className="add-card-actions">
            <button className="btn-confirm" onClick={handleSubmit}>Add</button>
            <button className="btn-cancel" onClick={() => setAdding(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <button className="btn-add" onClick={() => setAdding(true)}>
          + Add a card
        </button>
      )}
    </div>
  );
}

export default Column;