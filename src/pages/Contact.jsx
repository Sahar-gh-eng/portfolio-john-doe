// src/pages/Contact.jsx
import React from "react";

function Contact() {
  return (
    <main className="page contact-page">
      <section className="contact-hero">
        <h1>Contact</h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div className="section-underline" />
      </section>

      <section className="contact-section">
        {/* Formulaire */}
        <div className="contact-form-card">
          <h2>Formulaire de contact</h2>
          <div className="contact-underline" />

          <form className="contact-form">
            <div className="form-group">
              <label>Votre nom</label>
              <input type="text" placeholder="Votre nom" />
            </div>

            <div className="form-group">
              <label>Votre adresse email</label>
              <input type="email" placeholder="Votre adresse email" />
            </div>

            <div className="form-group">
              <label>Votre numéro de téléphone</label>
              <input type="text" placeholder="Votre numéro de téléphone" />
            </div>

            <div className="form-group">
              <label>Votre message</label>
              <textarea rows="4" placeholder="Votre message" />
            </div>

            <button className="btn btn-primary" type="submit">
              Envoyer
            </button>
          </form>
        </div>

        {/* Coordonnées */}
        <div className="contact-info-card">
          <h2>Mes coordonnées</h2>
          <div className="contact-underline" />

          <div className="contact-info">
            <div className="contact-name">John Doe</div>
            40 rue Laure Diebold  
            <br />
            69009 Lyon, France  
            <br />
            10 20 30 40 50  
            <br />
            john.doe@gmail.com  
          </div>

          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.0356355051263!2d4.80684!3d45.77875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c02ab0c8d6fb%3A0x9e52aca5f05d39b1!2sLaure%20Diebold!5e0!3m2!1sfr!2sfr!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
