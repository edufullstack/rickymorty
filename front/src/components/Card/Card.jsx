import { Link } from 'react-router-dom'
import style from './Card.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { addFavorite, deleteFavorite } from '../redux/actions'

export default function Card({ onClose, id, name, gender, species, image }) {
  const [isFav, setIsFav] = useState(false)
  const myFavorites = useSelector((state) => state.myFavorites)
  const dispatch = useDispatch()

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true)
      }
    })
  }, [myFavorites, id])

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false)
      dispatch(deleteFavorite(id))
    } else {
      setIsFav(true)
      dispatch(addFavorite({ onClose, id, name, gender, species, image }))
    }
  }

  return (
    <div className={style.cardContainer} key={id}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={onClose}>X</button>
      <Link to={`/detail/${id}`}>
        <h2 className={style.h2}>Name: {name}</h2>
      </Link>
      <h2 className={style.h2}>Specie: {species}</h2>
      <h2 className={style.h2}>Gender: {gender}</h2>
      <img src={image} alt='' />
    </div>
  )
}
