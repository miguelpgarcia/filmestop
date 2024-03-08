import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import MovieList from './components/MovieList'
import Header from './components/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <MovieList />
  </React.StrictMode>,
)
