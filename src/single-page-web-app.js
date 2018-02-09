import React from 'react'
import PropTypes from 'prop-types'
import Hero from './hero'
import Menu from './menu'
import Content from './content'

const SinglePageWebApp = ({title, menu, content}) => {
  return <div>
    <header>
      <Hero title={title} />
    </header>
    <main>
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-3'>
              <Menu {...menu} />
            </div>
            <div className='column'>
              <Content {...content} />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
}

SinglePageWebApp.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired
}

export default SinglePageWebApp
