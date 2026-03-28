import { useState } from 'react'
import Column from "./components/Column"

function App() {
  const COLUMNS = ["To Do", "In Progress", "Done"]

  return (
    <div className='board'>
      {COLUMNS.map((col) => {
        <Column key={col} title={col} />
      })}
      <h1>Kanban Board</h1>
    </div>
  )
}

export default App
