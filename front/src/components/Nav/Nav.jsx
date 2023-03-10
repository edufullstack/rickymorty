import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

function Nav({ onSearch }) {
  return (
    <div className={style.nav}>
      <Link className={style.btnCartoon} to='/'>
        Logout
      </Link>
      <Link className={style.btnCartoon} to='/home'>
        Home
      </Link>
      <Link className={style.btnCartoon} to='/about'>
        About
      </Link>
      <Link className={style.btnCartoon} to='/favorites'>
        Favorites
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  )
}

export default Nav
