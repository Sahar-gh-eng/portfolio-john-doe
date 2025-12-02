// src/pages/Home.jsx
import React, { useState } from 'react';
import GithubModal from '../components/GithubModal';

function Home() {
  const [showGithubModal, setShowGithubModal] = useState(false);

  const openModal = () => setShowGithubModal(true);
  const closeModal = () => setShowGithubModal(false);

  return (
    <>
      <main className="home">
        <section className="hero">
          <div className="hero-content">
            <p className="hero-kicker">Bonjour, je suis</p>
            <h1 className="hero-title">John Doe</h1>
            <p className="hero-subtitle">Développeur web full stack</p>

            <button className="hero-button" onClick={openModal}>
              En savoir plus
            </button>
          </div>
        </section>

        <section className="home-main">
          <div className="card about">
            <h2 className="section-title">A propos</h2>
            <div className="about-content">
              <img
  className="about-photo"
  src="/images/john-doe-about.jpg"
  alt="Photo de John Doe"
/>

              <div className="about-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, necessitatibus consectetur tempore perferendis
                  nostrum, ex delectus reiciendis impedit aut iure enim placeat?
                  Natus, neque at?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, necessitatibus consectetur tempore perferendis
                  nostrum, ex delectus reiciendis impedit aut iure enim placeat?
                  Natus, neque at?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, necessitatibus consectetur tempore perferendis
                  nostrum, ex delectus reiciendis impedit aut iure enim placeat?
                  Natus, neque at?
                </p>
              </div>
            </div>
          </div>

          <div className="card skills">
            <h2 className="section-title">Mes compétences</h2>

            <div className="skill">
              <div className="skill-header">
                <span>HTML5</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: '90%' }} />
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>CSS3</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: '80%' }} />
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>JAVASCRIPT</span>
                <span>70%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: '70%' }} />
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>PHP</span>
                <span>60%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: '60%' }} />
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>REACT</span>
                <span>50%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: '50%' }} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {showGithubModal && <GithubModal onClose={closeModal} />}
    </>
  );
}

export default Home;
