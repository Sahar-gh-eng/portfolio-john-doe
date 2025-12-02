// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        © 2024 John Doe – Portfolio
      </div>

      <div className="footer-social">
        {/* GitHub */}
        <a
          href="https://github.com/johndoe"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <svg
            className="footer-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.49
                 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.12-1.5-1.12-1.5-.91-.64.07-.63.07-.63
                 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09
                 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.06A9.18 9.18 0 0 1 12 6.07
                 c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.06 2.74-1.06.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.77
                 0 3.96-2.34 4.83-4.57 5.09.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49
                 A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
            />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/johndoe"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <svg
            className="footer-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9.5 15H7V10h2.5Zm-1.25-8.4A1.45 1.45 0 1 1 9.7 8.1 1.46 1.46 0 0 1 8.25 9.6ZM19 18h-2.5v-4.4c0-1.05-.55-1.7-1.45-1.7-.67 0-1.16.37-1.37.9A1.9 1.9 0 0 0 13.6 13v5H11.1V10H13.5v1a2.47 2.47 0 0 1 2.25-1.25c1.64 0 3.25 1.08 3.25 3.55Z"
            />
          </svg>
        </a>

        {/* Twitter / X (facultatif, tu peux supprimer si tu ne veux pas) */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <svg
            className="footer-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M17.21 3H19.5L14.3 9.11L20.42 21H14.93L11.21 13.84L6.8 21H4.5L10.06 14.36L4.2 3H9.86L13.21 9.52L17.21 3ZM16.25 19.29H17.75L8.22 4.62H6.59L16.25 19.29Z"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
