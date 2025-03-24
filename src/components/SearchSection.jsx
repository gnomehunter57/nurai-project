import React from 'react'
import './SearchSection.css'

function SearchSection({ searchQuery, setSearchQuery }) {
  return (
    <section className="search-section">
      <div className="search-content">
        <h1>Электронные государственные услуги</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Поиск услуг..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>Найти</button>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
