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
    <div className={style.cardContainer} ket={detailId}>
      <button onClick={onClose}>X</button>
      <Link to={`/detail/${detailId}`}>
        <h2 className={style.h2}>Name: {name}</h2>
      </Link>
      <h2 className={style.h2}>Specie: {species}</h2>
      <h2 className={style.h2}>Gender: {gender}</h2>
      <img src={image} alt='' />
    </div>
  )
}
