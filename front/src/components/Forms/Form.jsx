import React from 'react'
import validation from './Validation'
import style from './Form.module.css'

const Form = (props) => {
  const [userData, setUserData] = React.useState({ username: '', password: '' })
  const [errors, setErrors] = React.useState({ username: '', password: '' })

  const handleInputChange = (input) => {
    setUserData({ ...userData, [input.target.name]: input.target.value })
    setErrors(
      validation({ ...userData, [input.target.name]: input.target.value })
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.login(userData)
  }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          className={style.formInput}
          autoComplete='off'
          type='text'
          name='username'
          value={userData.username}
          onChange={handleInputChange}
        />
        {errors.username && <p>{errors.username}</p>}
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={userData.password}
          onChange={handleInputChange}
        />
        {errors.username && <p>{errors.password}</p>}
        <button className={style.btn} onChange={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
