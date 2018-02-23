import React from 'react'
import PropTypes from 'prop-types'
import Logo from './logo'

const Hero = ({title, description}) => <section className='hero is-info'>
  <div className='hero-body'>
    <div className='container'>
      <figure className='image is-128x128'>
        <Logo />
      </figure>
      <h1 className='title'>
        Single Page Web App
      </h1>
      <h2 className='subtitle'>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
</section>

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default Hero
