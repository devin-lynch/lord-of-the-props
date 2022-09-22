import React, { Component } from 'react'
import Movie from './Movie'
import './App.css'
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers'


const oneArrayToRuleThemAll = [
  {
    title: "The Fellowship of the Ring",
    hours: 2,
    minutes: 58,
  },
  {
    title: "The Two Towers",
    hours: 2,
    minutes: 59,
  },
  {
    title: "The Return of the King",
    hours: 3,
    minutes: 21,
  }
]

class App extends Component {
  render() {
    const movies = oneArrayToRuleThemAll.map((movie, i) => {
      return (
        <Movie
          title={movie.title}
          hours={movie.hours}
          minutes={movie.minutes}
          key={`movie-${i}`}
        />
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lord of the Props</h1>

          {movies}
        </header>
      </div>
    )
  }
}

export default App
