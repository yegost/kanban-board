# 📋 Kanban Board

A drag-and-drop Kanban board built with React. Cards can be created, edited, coloured, and moved between columns. Data persists across page refreshes using localStorage.

## Features

- Three columns: **To Do**, **In Progress**, **Done**
- Add cards to any column with a title and custom colour
- Edit a card's title and colour after creation
- Delete cards
- Drag and drop cards between columns
- Data saved to localStorage — survives page refresh

## Tech Stack

- [React](https://react.dev/) with Vite
- Vanilla CSS (no UI libraries)
- Browser Drag and Drop API (no libraries)
- localStorage for persistence

## Project Structure

```
src/
├── components/
│   ├── Card.jsx       # Individual card with edit, delete, drag
│   └── Column.jsx     # Column with card list and add card form
├── styles/
│   ├── global.css     # Reset and body styles
│   ├── layout.css     # App, header, board, column layout
│   ├── card.css       # Card and input styles
│   └── buttons.css    # All button styles
├── App.jsx            # Root component, state management
└── main.jsx           # Entry point
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```
