import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './styles'

const MenuLink = ({pathname, active, label}) => <li>
  <Link to={pathname} className={`is-${active}`}>
    <span>{label}</span>
  </Link>
</li>

MenuLink.propTypes = {
  pathname: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

const MenuBlock = ({label, links}) => <div className={styles.menuBlock()}>
  <p className='menu-label'>{label}</p>
  <ul className='menu-list'>
    {links.map((link, index) => <MenuLink key={link.pathname} {...link} />)}
  </ul>
</div>

MenuBlock.propTypes = {
  label: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

const Menu = ({web, server, desktop, mobile, testing}) => <aside className='menu'>
  <MenuBlock {...web} />
  <MenuBlock {...server} />
  <MenuBlock {...desktop} />
  <MenuBlock {...mobile} />
  <MenuBlock {...testing} />
</aside>

Menu.propTypes = {
  web: PropTypes.object.isRequired,
  server: PropTypes.object.isRequired,
  desktop: PropTypes.object.isRequired,
  mobile: PropTypes.object.isRequired,
  testing: PropTypes.object.isRequired
}

export default Menu
