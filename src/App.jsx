import { useEffect, useState } from 'react';
import Column from "./components/Column";

const COLUMNS = ["To Do", "In Progress", "Done"];

const initialCards = [
  { id: 1, text: "Buy groceries", column: "To Do", color: "#e94560" },
  { id: 2, text: "Fix bug", column: "In Progress", color: "#e94560" },
  { id: 3, text: "Read a book", column: "Done", color: "#e94560" },
]

function App() {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem("kanban-cards");
    return saved ? JSON.parse(saved) : initialCards;
  });
  const [draggedId, setDraggedId] = useState(null);

  useEffect(() => {
    localStorage.setItem("kanban-cards", JSON.stringify(cards));
  }, [cards]);

  function addCard(columnTitle, text, color) {
    const newCard = {
      id: Date.now(),
      text,
      column: columnTitle,
      color,
    };
    setCards([...cards, newCard]);
  }

  function deleteCard(cardId) {
    setCards(cards.filter((card) => card.id !== cardId))
  }

  function moveCard(cardId, toColumn) {
    setCards(cards.map((card) => 
      card.id === cardId ? { ...card, column: toColumn } : card
    ));
  }

  function updateCard(cardId, newText, newColor) {
    setCards(cards.map((card) => 
      card.id === cardId ? { ...card, text: newText, color: newColor } : card
    ));
  }

  return (
    <div className='app'>
      <header className="header">
        <h1>Kanban Board</h1>
      </header>
      <div className='board'>
        {COLUMNS.map((col) => (
          <Column 
            key={col}
            title={col}
            cards={cards.filter((card) => card.column === col)}
            onAddCard={addCard}
            onDeleteCard={deleteCard}
            onUpdateCard={updateCard}
            draggedId={draggedId}
            setDraggedId={setDraggedId}
            onDrop={moveCard} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;