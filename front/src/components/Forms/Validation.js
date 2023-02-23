const validation = (inputs) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  const errors = {}

  if (!regexEmail.test(inputs.username)) {
    errors.username = 'Debe ser un correo electrónico'
  }
  if (!inputs.username) {
    errors.username = 'El username no puede estar vacio'
  }
  if (inputs.username.length > 35) {
    errors.username = 'El username no puede tener mas de 35 caracteres'
  }
  if (!inputs.password.match(/\d/)) {
    errors.password = 'El password debe incluir un numero'
  }
  if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password = 'El password debe tener entre 6 y 10 caracteres'
  }

  return errors
}

export default validation
