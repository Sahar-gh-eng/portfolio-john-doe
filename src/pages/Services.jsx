// src/pages/Services.jsx
import React from 'react';

function Services() {
  const services = [
    {
      title: 'UX Design',
      icon: '✏️',
      text: `L'UX Design est une discipline qui consiste à concevoir
des produits (sites web, applications mobiles, logiciels, objets connectés, etc.)
en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre
l'expérience utilisateur la plus fluide et agréable possible.`,
    },
    {
      title: 'Développement web',
      icon: '</>',
      text: `Le développement de sites web consiste à créer des sites internet
en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.)
et des frameworks (Bootstrap, React, Angular, etc.).`,
    },
    {
      title: 'Référencement',
      icon: '🔎',
      text: `Le référencement naturel (SEO) est une technique qui consiste à optimiser
un site web pour le faire remonter dans les résultats des moteurs de recherche
(Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs
qualifiés sur le site.`,
    },
  ];

  return (
    <main className="page services-page">
      {/* Bandeau bleu en haut */}
      <header className="page-hero">
        <h1 className="page-title">Mon offre de services</h1>
        <p className="page-subtitle">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <div className="page-underline" />
      </header>

      {/* Cartes de services */}
      <section className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-text">{service.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Services;
