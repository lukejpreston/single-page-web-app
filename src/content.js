import React from 'react'
import Markdown from 'react-remarkable'

const Content = () => <nav className='panel'>
  <p className='panel-heading'>repositories</p>
  <div className='panel-block'>
    <div className='tabs is-boxed'>
      <ul>
        <li className='is-active'>
          <a>
            <span className='icon is-small'><i className='fas fa-image' /></span>
            <span>About</span>
          </a>
        </li>
        <li>
          <a>
            <span className='icon is-small'><i className='fas fa-music' /></span>
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
