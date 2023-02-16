import { Link } from 'react-router-dom'
import style from './Card.module.css'

export default function Card({
  onClose,
  detailId,
  name,
  gender,
  species,
  image,
}) {
  return (
    <div className={style.cardContainer}>
      <button onClick={onClose}>X</button>
      <Link to={`/detail/${detailId}`}>
        <h2 className={style.h2}>{name}</h2>
      </Link>
      <h2 className={style.h2}>{species}</h2>
      <h2 className={style.h2}>{gender}</h2>
      <img src={image} alt='' />
    </div>
  )
}
