import './App.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
// import SearchBar from './components/SearchBar.jsx'
// import style from './components/Nav.module.css'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Forms/Form'
import './index.css'
import Favorites from './components/Favorites/Favorites'

function App() {
  const [characters, setCharacters] = useState([])
  const location = useLocation()
  const [access, setAccess] = useState(false)
  const navigate = useNavigate()

  const username = 'prueba@gmail.com'
  const password = 'password1'

  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true)
      navigate('/home')
    }
  }
  const skip = () => {
    setAccess(true)
    navigate('/home')
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access, navigate])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          for (let character of characters) {
            if (data.id === character.id) {
              return window.alert('Ya tienes ese personaje')
            }
          }
          setCharacters((oldChars) => [...oldChars, data])
        } else {
          window.alert('No hay personajes con ese ID')
        }
      })
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? (
        <Form login={login} skip={skip} />
      ) : (
        <Nav onSearch={onSearch} />
      )}

      <Routes>
        <Route
          path='/home'
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
