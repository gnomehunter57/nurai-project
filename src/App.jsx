import React, { useState } from 'react'
import './App.css'

import Header from './components/Header'
import SearchSection from './components/SearchSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'

function App() {
  const allServices = [
    'Получение паспорта',
    'Регистрация авто',
    'Оформление пенсии',
    'Справка о доходах',
    'Запись к врачу',
    'Регистрация бизнеса',
    'Оформление субсидий',
    'Получение ИИН',
    'Оплата штрафов',
    'Пособия на рождение ребенка',
    'Регистрация недвижимости',
    'Выдача лицензий',
    'Запись на вакцинацию',
    'Рассмотрение жалоб',
    'Оформление загранпаспорта',
    'Получение визы',
    'Регистрация брака',
    'Развод онлайн',
    'Получение свидетельства о рождении',
    'Замена документов',
    'Получение справки о пенсионных начислениях',
    'Воинский учет', 
    "Информация о начислениях ЕНПФ",
    'Оплата коммунальных услуг',
    'Перевод земли в собственность',
    'Запись на техосмотр',
    'Подключение к интернету',
    'Подача налоговой декларации',
    'Запись ребёнка в детсад',
    'Получение справки о несудимости',
  ]

  const [searchQuery, setSearchQuery] = useState('')

  const filteredServices = allServices.filter((service) =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="App">
      <Header />
      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ServicesSection services={filteredServices} />
      <Footer />
    </div>
  )
}

export default App
