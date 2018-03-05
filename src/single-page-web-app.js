import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Hero from './hero'
import Menu from './menu'
import Content from './content'
import Chat from './chat'
import styles from './styles'

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
        <Hero title={this.props.title} description={this.props.description} />
      </header>
      <main>
        <section className='section'>
          <Chat active={this.props.chat} toggleChat={this.props.toggleChat} />
          <div className='container'>
            <div className='columns'>
              <div className={`column is-3 ${styles.menu()}`}>
                <Menu {...this.props.menu} selectModule={this.props.selectModule} selected={this.props.selected} />
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
  description: PropTypes.string,
  menu: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  fetchMarkdown: PropTypes.func.isRequired,
  selectModule: PropTypes.func.isRequired,
  chat: PropTypes.string.isRequired,
  toggleChat: PropTypes.func.isRequired

}

export default SinglePageWebApp
