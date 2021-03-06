import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-remarkable'
import {Link} from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faBook, faDownload} from '@fortawesome/fontawesome-free-solid'
import {faQuestionCircle} from '@fortawesome/fontawesome-free-regular'
import styles from './styles'

const ContentTabs = ({about, aboutLink, exercises, exercisesLink, filesLink}) => <div className={`panel-tabs ${styles.panelTabs()}`}>
  <div className={`tabs is-boxed ${styles.tabs()}`}>
    <ul>
      <li className={`is-${about}`}>
        <Link to={aboutLink} className={styles.tab()}>
          <span className='icon is-small'>
            <FontAwesomeIcon icon={faBook} />
          </span>
          <span>About</span>
        </Link>
      </li>
      <li className={`is-${exercises}`}>
        <Link to={exercisesLink} className={styles.tab()}>
          <span className='icon is-small'>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </span>
          <span>Exercises</span>
        </Link>
      </li>
      <li>
        <a href={filesLink} className={styles.tab()} download>
          <span className='icon is-small'>
            <FontAwesomeIcon icon={faDownload} />
          </span>
          <span>Files</span>
        </a>
      </li>
    </ul>
  </div>
</div>

ContentTabs.propTypes = {
  about: PropTypes.string.isRequired,
  aboutLink: PropTypes.string.isRequired,
  exercises: PropTypes.string.isRequired,
  exercisesLink: PropTypes.string.isRequired,
  filesLink: PropTypes.string.isRequired
}

const Content = ({label, tabs, markdown}) => <nav className='panel'>
  <p className='panel-heading'>{label}</p>
  <ContentTabs {...tabs} />
  <div className='panel-block'>
    <div className={`content ${styles.content()}`}>
      <Markdown>{markdown}</Markdown>
    </div>
  </div>
</nav>

Content.propTypes = {
  label: PropTypes.string.isRequired,
  tabs: PropTypes.object.isRequired,
  markdown: PropTypes.string.isRequired
}

export default Content
