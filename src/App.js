import React, { Component } from 'react'
import Movie from './Movie'
import './App.css'
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Movie
          title="The Fellowship of the Ring"
          hours="2"
          minutes="58"
          />
          <Movie
          title="The Two Towers"
          hours="2"
          minutes="59"
          />
          <Movie
          title="The Return of the King"
          hours="3"
          minutes="21"
          />
        </header>
      </div>
    )
  }
}

export default App
