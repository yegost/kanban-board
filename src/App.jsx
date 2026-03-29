import { useState } from 'react';
import Column from "./components/Column";

const COLUMNS = ["To Do", "In Progress", "Done"];

function App() {
  const [cards, setCards] = useState([
    { id: 1, text: "Buy groceries", column: "To Do" },
    { id: 2, text: "Fix bug", column: "In Progress" },
    { id: 3, text: "Read a book", column: "Done" },
  ]);

  function addCard(columnTitle, text) {
    const newCard = {
      id: Date.now(),
      text,
      column: columnTitle,
    };
    setCards([...cards, newCard]);
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
            onAddCard={addCard} />
        ))}
      </div>
    </div>
  );
}

export default App;