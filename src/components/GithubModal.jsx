// src/components/GithubModal.jsx
import React from 'react';
import './GithubModal.css';

function GithubModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()} // évite de fermer en cliquant dans la carte
      >
        <div className="modal-header">
          <h2>Mon profil GitHub</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-avatar">
            <img
              src="https://i.ibb.co/6Pn8k1h/doraemon.png"
              alt="Avatar GitHub"
            />
          </div>

          <div className="modal-info">
            <p className="modal-name">John Doe</p>
            <p className="modal-location">Lyon, France</p>

            <p className="modal-bio">
              As we all know, John Doe&apos;s identity is unknown.
              I just wanted to contribute without being known.
            </p>

            <ul className="modal-stats">
              <li>📦 Repositories : 1</li>
              <li>👥 Followers : 16</li>
              <li>➡️ Following : 0</li>
            </ul>

            <a
              href="#"
              className="modal-link"
              onClick={(e) => e.preventDefault()}
            >
              Voir le profil GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubModal;
