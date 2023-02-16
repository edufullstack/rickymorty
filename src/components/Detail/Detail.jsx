import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from './Detail.module.css'

function Detail() {
  const { detailId } = useParams()

  const [character, setCharacter] = useState({})

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char)
        } else {
          window.alert('No hay personajes con ese ID')
        }
      })
      .catch((err) => {
        window.alert('No hay personajes con ese ID')
      })
    return setCharacter({})
  }, [detailId])
  return (
    <div className={style.div}>
      <button className={style.button}>
        <Link to='/home'> Home</Link>
      </button>

      <h2 className={style.h2}>{character?.name}</h2>
      <p className={style.p}>{character?.status}</p>
      <p className={style.p}>{character?.specie}</p>
      <p className={style.p}>{character?.gender}</p>
      <p className={style.p}>{character?.origin?.name}</p>
      <img className={style.img} src={character.image} alt={character.name} />
    </div>
  )
}

export default Detail
