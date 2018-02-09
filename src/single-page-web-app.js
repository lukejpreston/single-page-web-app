import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Hero from './hero'
import Menu from './menu'
import Content from './content'

class SinglePageWebApp extends Component {
  markdown () {
    if (this.props.content.status === 'fetch') this.props.fetchMarkdown()
  }
  componentDidMount () {
    this.markdown()
  }
  componentDidUpdate () {
    this.markdown()
  }
  render () {
    return <div>
      <header>
        <Hero title={this.props.title} />
      </header>
      <main>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-3'>
                <Menu {...this.props.menu} />
              </div>
              <div className='column'>
                <Content {...this.props.content} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  }
}
SinglePageWebApp.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  fetchMarkdown: PropTypes.func.isRequired
}

export default SinglePageWebApp
