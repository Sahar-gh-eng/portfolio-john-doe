# Portfolio – John Doe

Projet de création d’un site portfolio réalisé dans le cadre de la formation Développeur Web.  
Réalisation effectuée par **Sahar Sediame**.

---

## 🎯 Objectif du projet

Ce projet a pour but de mettre en pratique :
- La création d’une application React avec Vite
- La construction de pages statiques multi-sections
- L’utilisation de composants réutilisables (Header, Footer…)
- L’implémentation de hooks (`useState`)
- La mise en page responsive
- L’utilisation d’un formulaire avec champs obligatoires

---

## 📄 Pages du site

Le site contient les pages suivantes :

### • Accueil  
Page de présentation générale du portfolio.

### • Services  
Présentation des prestations proposées, mise en page avec Bootstrap.

### • Portfolio  
Galerie de projets réalisés.

### • Contact  
Formulaire de contact fonctionnel avec champs obligatoires + informations de contact + carte Google Maps.

### • Mentions légales  
Page incluant plusieurs sections sous forme d’accordéon interactif (`useState`).

---

## 🚀 Installation & Lancement

Cloner le projet :

```bash
git clone https://github.com/Sahar-gh-eng/portfolio-john-doe.git

Installer les dépendances :
npm install

Lancer le serveur de développement :
npm run dev

Le site sera accessible à l'adresse indiquée dans le terminal (ex. : http://localhost:5173

📁 Structure du projet
public/
  images/               → Images du site

src/
  components/
    layout/             → Header, Footer
    ...                 → Autres composants si ajoutés
  pages/                → Home, Services, Portfolio, Contact, Legal (Mentions légales)
  App.jsx               → Routing principal
  main.jsx              → Point d’entrée

package.json
vite.config.js
README.md

🛠 Technologies utilisées

React
Vite
JavaScript
HTML / CSS
Bootstrap (page Services)

👩‍💻 Auteur

Projet réalisé par Sahar Sediame dans le cadre de la formation.

✔ Bonus pédagogique

Utilisation de useState pour :
gérer le menu mobile
gérer l’accordéon des mentions légales
Mise en page responsive sur toutes les pages
Composants réutilisables et isolés

