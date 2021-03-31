import React from 'react'
import { faTasks } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'

import './index.css'

export default () => {
  return (
    <nav
      className='navbar navbar-inverse bg-inverse'
    >
      <div
        className='container'
      >
        <div
          className='navbar-header'
        >
          <Link
            className='navbar-brand'
            to="/todos"
          >
            <FontAwesomeIcon
              icon={faTasks}
              style={style.icon}
            />
             TodoApp
          </Link>
          <div
            id='navbar'
            className='navbar-collapse collapse'
          >
            <ul
              className='nav navbar-nav'
            >
              <li><Link to='/todos'>Tarefas</Link></li>
              <li><Link to='/about'>Sobre</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

const style = {
  icon: {
    marginRight: 5
  }
}