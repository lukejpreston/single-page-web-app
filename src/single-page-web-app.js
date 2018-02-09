import React from 'react'
import PropTypes from 'prop-types'
import Hero from './hero'
import Menu from './menu'
import Content from './content'

const SinglePageWebApp = ({title}) => {
  return <div>
    <header>
      <Hero title={title} />
    </header>
    <main>
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-3'>
              <Menu />
            </div>
            <div className='column'>
              <Content />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
}

SinglePageWebApp.propTypes = {
  title: PropTypes.string.isRequired
}

export default SinglePageWebApp
