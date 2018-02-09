import React from 'react'
import Markdown from 'react-remarkable'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faBook} from '@fortawesome/fontawesome-free-solid'
import {faQuestionCircle} from '@fortawesome/fontawesome-free-regular'
import styles from './styles'

const Content = () => <nav className='panel'>
  <p className='panel-heading'>repositories</p>
  <div className={`panel-tabs ${styles.panelTabs()}`}>
    <div className={`tabs is-boxed ${styles.contentTabs()}`}>
      <ul>
        <li className={`is-active`}>
          <a className={styles.contentTab()}>
            <span className='icon is-small'>
              <FontAwesomeIcon icon={faBook} />
            </span>
            <span>About</span>
          </a>
        </li>
        <li>
          <a className={styles.contentTab()}>
            <span className='icon is-small'>
              <FontAwesomeIcon icon={faQuestionCircle} />
            </span>
            <span>Exercises</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className='panel-block'>
    <div className='content'>
      <Markdown>{`
  ## Reasons React is great

  1. Server-side rendering
  2. This totally works:

  <SomeOtherAmazingComponent />

  Pretty neat!
`}</Markdown>
    </div>
  </div>
</nav>

export default Content
