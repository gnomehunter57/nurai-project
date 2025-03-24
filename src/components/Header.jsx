import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">NurAI</div>
      <nav>
        <ul>
          <li>
            <a href="#home">Главная</a>
          </li>
          <li>
            <a href="#services">Услуги</a>
          </li>
          <li>
            <a href="#news">Новости</a>
          </li>
          <li>
            <a href="#cabinet">Личный кабинет</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
