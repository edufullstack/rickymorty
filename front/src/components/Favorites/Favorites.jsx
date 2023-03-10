import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './favorites.module.css'

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state)

  return (
    <div className={style.container}>
      {myFavorites.map((char) => {
        return (
          <div key={char.id} className={style.cardContainer}>
            <Link to={`/detail/${char.id}`}>
              <h2 className={style.h2}>Name: {char.name}</h2>
            </Link>
            <h2 className={style.h2}>Specie: {char.species}</h2>
            <h2 className={style.h2}>Gender: {char.gender}</h2>
            <img src={char.image} alt='' />
          </div>
        )
      })}
    </div>
  )
}

export default Favorites
