// src/pages/Portfolio.jsx
import React from 'react';

function Portfolio() {
  return (
    <main className="page portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-hero-overlay">
          <h1 className="page-title">Portfolio</h1>
          <p className="page-subtitle">
            Voici quelques-unes de mes réalisations.
          </p>
          <div className="page-underline" />
        </div>
      </section>

      <section className="portfolio-grid">
        {/* Carte 1 */}
        <article className="portfolio-card">
          <div className="portfolio-card-image">
            <img
              src="/images/portfolio-fresh-food.jpg"   // 🔁 adapte le nom si besoin
              alt="Site e-commerce Fresh Food"
            />
          </div>
          <div className="portfolio-card-body">
            <h2 className="portfolio-card-title">Fresh Food</h2>
            <p className="portfolio-card-category">
              Site de vente de produits frais en ligne
            </p>
            <button className="btn btn-primary" type="button">
              Voir le site
            </button>
          </div>
          <div className="portfolio-card-footer">
            Site réalisé avec PHP et MySQL
          </div>
        </article>

        {/* Carte 2 */}
        <article className="portfolio-card">
          <div className="portfolio-card-image">
            <img
              src="/images/portfolio-restaurant-akira.jpg" // 🔁 adapte le nom
              alt="Site Restaurant Akira"
            />
          </div>
          <div className="portfolio-card-body">
            <h2 className="portfolio-card-title">Restaurant Akira</h2>
            <p className="portfolio-card-category">
              Site de vente de plats en ligne
            </p>
            <button className="btn btn-primary" type="button">
              Voir le site
            </button>
          </div>
          <div className="portfolio-card-footer">
            Site réalisé avec WordPress
          </div>
        </article>

        {/* Carte 3 */}
        <article className="portfolio-card">
          <div className="portfolio-card-image">
            <img
              src="/images/portfolio-espace-bien-etre.jpg" // 🔁 adapte le nom
              alt="Site Espace bien-être"
            />
          </div>
          <div className="portfolio-card-body">
            <h2 className="portfolio-card-title">Espace bien-être</h2>
            <p className="portfolio-card-category">
              Site de réservation de séances bien-être
            </p>
            <button className="btn btn-primary" type="button">
              Voir le site
            </button>
          </div>
          <div className="portfolio-card-footer">
            Site réalisé avec LARAVEL
          </div>
        </article>

        {/* Carte 4 */}
        <article className="portfolio-card">
          <div className="portfolio-card-image">
            <img
              src="/images/portfolio-seo.jpg" // 🔁 adapte le nom
              alt="Projet SEO"
            />
          </div>
          <div className="portfolio-card-body">
            <h2 className="portfolio-card-title">SEO</h2>
            <p className="portfolio-card-category">
              Amélioration du référencement d’un site e-commerce
            </p>
            <button className="btn btn-primary" type="button">
              Voir le site
            </button>
          </div>
          <div className="portfolio-card-footer">
            Utilisation des outils SEO
          </div>
        </article>

        {/* Carte 5 */}
        <article className="portfolio-card">
          <div className="portfolio-card-image">
            <img
              src="/images/portfolio-api.jpg" // 🔁 adapte le nom
              alt="Création d’une API RESTful"
            />
          </div>
          <div className="portfolio-card-body">
            <h2 className="portfolio-card-title">Création d’une API</h2>
            <p className="portfolio-card-category">
              Création d’une API RESTFUL publique
            </p>
            <button className="btn btn-primary" type="button">
              Voir le site
            </button>
          </div>
          <div className="portfolio-card-footer">
            PHP · SYMFONY
          </div>
        </article>

        {/* Carte 6 */}
        <article className="portfolio-card">
          <div className="portfolio-card-image">
            <img
              src="/images/portfolio-maquette-site.jpg" // 🔁 adapte le nom
              alt="Maquette d’un site web"
            />
          </div>
          <div className="portfolio-card-body">
            <h2 className="portfolio-card-title">Maquette d’un site web</h2>
            <p className="portfolio-card-category">
              Création du prototype d’un site web
            </p>
            <button className="btn btn-primary" type="button">
              Voir le site
            </button>
          </div>
          <div className="portfolio-card-footer">
            Réalisé avec FIGMA
          </div>
        </article>
      </section>
    </main>
  );
}

export default Portfolio;
