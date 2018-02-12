import React from 'react'
import PropTypes from 'prop-types'
import Logo from './logo'

const Hero = ({title}) => <section className='hero is-info'>
  <div className='hero-body'>
    <div className='container'>
      <Logo />
      <h1 className='title'>
        Single Page Web App
      </h1>
      <h2 className='subtitle'>{title}</h2>
    </div>
  </div>
</section>

Hero.propTypes = {
  title: PropTypes.string.isRequired
}

export default Hero