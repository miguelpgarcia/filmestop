import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GenreList from './components/GenreList'
import SearchMovie from './components/SearchMovie'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchMovie />
    <GenreList />
  </React.StrictMode>,
)
