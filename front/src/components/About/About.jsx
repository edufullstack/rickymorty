import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.h2}>
        Hello my name is Jose Eduardo Ramirez Hernandez
      </h2>
      <p>
        This Single Page Application was created with HTML, CSS, JavaScript,
        React and Redux. You can find my linkedin and my repositories clicking
        the buttons below.
      </p>
      <a
        href='https://www.linkedin.com/in/joseeduardoramirezhernandez/'
        target='_blank'
        rel='noreferrer'
      >
        <button className={styles.cardButton}>Linkedin</button>
      </a>
      <a
        href='https://github.com/edufullstack'
        target='_blank'
        rel='noreferrer'
      >
        <button className={styles.cardButton}>Github</button>
      </a>
    </div>
  )
}

export default About
