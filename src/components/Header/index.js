import { useState } from 'react'
import './styles.scss'

export const Header = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const handleMenuClick = e => {
    setIsOpen(!isOpen)
    setActiveLink(e.target.hash)
  }

  return (
    <header className="header">
      <div className='container'>
        <i className="fas fa-bars header-toggle" id="nav-toggle" onClick={handleMenuClick}></i>
        <nav className={`navigation-bar ${isOpen ? 'show' : ''}`} id="nav-menu">
          <div className="nav-content bd-grid">
            <i className="fas fa-times-circle nav-close" id="nav-close" onClick={handleMenuClick}></i>
            <div className='nav-menu'>
              <ul className="nav-list">
                {menuItems.map((el, idx) => {
                  return (
                    <li
                      className={`navigation-bar-item ${activeLink === el.link ? 'active-navigation' : ''}`}
                      id="navigation-bar-item"
                      key={idx}
                      onClick={handleMenuClick}
                    >
                      <a href={el.link} className="nav-link-item" title={el.title}>{el.text}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}