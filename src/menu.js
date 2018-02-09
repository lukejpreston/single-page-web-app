import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const MenuLink = ({pathname, active, index, label}) => <li>
  <Link to={pathname} className={`is-${active}`}>
    <span><b>{index}</b> {label}</span>
  </Link>
</li>

MenuLink.propTypes = {
  pathname: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

const MenuBlock = ({label, links}) => <div>
  <p className='menu-label'>{label}</p>
  <ul className='menu-list'>
    {links.map((link, index) => <MenuLink key={link.pathname} index={index} {...link} />)}
  </ul>
</div>

MenuBlock.propTypes = {
  label: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

const Menu = ({web}) => <aside className='menu'>
  <MenuBlock {...web} />
</aside>

Menu.propTypes = {
  web: PropTypes.object.isRequired
}

export default Menu
