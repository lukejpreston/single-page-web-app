import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-remarkable'
import {Link} from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faBook} from '@fortawesome/fontawesome-free-solid'
import {faQuestionCircle} from '@fortawesome/fontawesome-free-regular'
import styles from './styles'

const ContentTabs = ({about, aboutLink, exercises, exercisesLink}) => <div className={`panel-tabs ${styles.panelTabs()}`}>
  <div className={`tabs is-boxed ${styles.contentTabs()}`}>
    <ul>
      <li className={`is-${about}`}>
        <Link to={aboutLink} className={styles.contentTab()}>
          <span className='icon is-small'>
            <FontAwesomeIcon icon={faBook} />
          </span>
          <span>About</span>
        </Link>
      </li>
      <li className={`is-${exercises}`}>
        <Link to={exercisesLink} className={styles.contentTab()}>
          <span className='icon is-small'>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </span>
          <span>Exercises</span>
        </Link>
      </li>
    </ul>
  </div>
</div>

const Content = ({label, tabs, markdown}) => <nav className='panel'>
  <p className='panel-heading'>{label}</p>
  <ContentTabs {...tabs} />
  <div className='panel-block'>
    <div className='content'>
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
