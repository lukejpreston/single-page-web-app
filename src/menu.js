import React from 'react'

const Menu = () => <aside className='menu'>
  <p className='menu-label'>General</p>
  <ul className='menu-list'>
    <li>
      <a className='is-active'>
        <span><b>0</b> Dashboard</span>
      </a>
    </li>
    <li>
      <a>
        <span><b>1</b> Dashboard</span>
      </a>
    </li>
  </ul>
</aside>

export default Menu
