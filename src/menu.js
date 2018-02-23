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

const Menu = ({selectModule, selected, web, server, desktop, mobile, testing, additional}) => <div>
  <aside className='menu is-hidden-mobile'>
    <MenuBlock {...web} />
    <MenuBlock {...server} />
    <MenuBlock {...desktop} />
    <MenuBlock {...mobile} />
    <MenuBlock {...testing} />
    <MenuBlock {...additional} />
  </aside>
  <div className='is-hidden-tablet'>
    <div className='field'>
      <div className='control'>
        <div className='select is-link is-fullwidth'>
          <select onChange={evt => selectModule(evt.target.value)} value={selected}>
            <optgroup label={web.label} />
            {web.links.map(link => <option key={link.pathname} value={link.pathname}>{link.label}</option>)}
            <optgroup label={server.label} />
            {server.links.map(link => <option key={link.pathname} value={link.pathname}>{link.label}</option>)}
            <optgroup label={desktop.label} />
            {desktop.links.map(link => <option key={link.pathname} value={link.pathname}>{link.label}</option>)}
            <optgroup label={mobile.label} />
            {mobile.links.map(link => <option key={link.pathname} value={link.pathname}>{link.label}</option>)}
            <optgroup label={testing.label} />
            {testing.links.map(link => <option key={link.pathname} value={link.pathname}>{link.label}</option>)}
            <optgroup label={additional.label} />
            {additional.links.map(link => <option key={link.pathname} value={link.pathname}>{link.label}</option>)}
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

Menu.propTypes = {
  selectModule: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  web: PropTypes.object.isRequired,
  server: PropTypes.object.isRequired,
  desktop: PropTypes.object.isRequired,
  mobile: PropTypes.object.isRequired,
  testing: PropTypes.object.isRequired,
  additional: PropTypes.object.isRequired
}

export default Menu
