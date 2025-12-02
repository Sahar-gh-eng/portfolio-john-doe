// src/pages/Legal.jsx
import { useState } from "react";

function Legal() {
  const [openSection, setOpenSection] = useState("editor"); // section ouverte par défaut

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <h1>Mentions légales</h1>
        <div className="section-underline" />
      </section>

      <section className="legal-section container">
        <div className="accordion">
          {/* ÉDITEUR DU SITE */}
          <div className="accordion-item">
            <button
              className={`accordion-header ${
                openSection === "editor" ? "open" : ""
              }`}
              onClick={() => toggleSection("editor")}
            >
              <span>Éditeur du site</span>
              <span className="chevron" />
            </button>

            {openSection === "editor" && (
              <div className="accordion-body">
                <p className="legal-name">John Doe</p>
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>10 20 30 40 50</p>
                <p>john.doe@gmail.com</p>
              </div>
            )}
          </div>

          {/* HÉBERGEUR */}
          <div className="accordion-item">
            <button
              className={`accordion-header ${
                openSection === "host" ? "open" : ""
              }`}
              onClick={() => toggleSection("host")}
            >
              <span>Hébergeur</span>
              <span className="chevron" />
            </button>

            {openSection === "host" && (
              <div className="accordion-body">
                <p className="legal-name">alwaysdata</p>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <p>
                  <a
                    href="https://www.alwaysdata.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.alwaysdata.com
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* CRÉDITS */}
          <div className="accordion-item">
            <button
              className={`accordion-header ${
                openSection === "credits" ? "open" : ""
              }`}
              onClick={() => toggleSection("credits")}
            >
              <span>Crédits</span>
              <span className="chevron" />
            </button>

            {openSection === "credits" && (
              <div className="accordion-body">
                <h2>Crédits</h2>
                <p>
                  Ce site a été réalisé par John Doe, étudiant au{" "}
                  <a
                    href="https://www.centre-europeen-formation.fr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Centre Européen de Formation
                  </a>
                  .
                </p>
                <p>
                  Les images utilisées sur ce site sont libres de droits et ont
                  été obtenues sur le site{" "}
                  <a
                    href="https://pixabay.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pixabay
                  </a>
                  .
                </p>
                <p>
                  La favicon de ce site a été fournie par{" "}
                  <a
                    href="https://www.flaticon.com/free-icon/john-doe_219969"
                    target="_blank"
                    rel="noreferrer"
                  >
                    John doe Icons erstellt von Freepik - Flaticon
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Legal;
