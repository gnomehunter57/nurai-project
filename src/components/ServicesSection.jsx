import React from 'react'
import './ServicesSection.css'
import ServiceItem from './ServiceItem'

function ServicesSection({ services }) {
  return (
    <section className="services-section" id="services">
      <h2>Популярные услуги</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <ServiceItem key={index} title={service} />
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
