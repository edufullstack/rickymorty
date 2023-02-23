import React from 'react'
import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = React.useState('')

  const handleChange = (event) => {
    const input = event.target.value
    setCharacter(input)
  }

  return (
    <div>
      <input
        className={style.inp}
        type='search'
        value={character}
        onChange={handleChange}
      />
      <button
        className={style.btn}
        onClick={() => {
          onSearch(character)
        }}
      >
        Agregar
      </button>
    </div>
  )
}
