/**
 * ============================================================
 * FICHIER : src/main.jsx
 * RÔLE    : Point de démarrage de l'application.
 *           C'est le premier fichier exécuté par Vite.
 *           Il "monte" le composant App dans la page HTML.
 * ============================================================
 */

// StrictMode : mode développement de React qui détecte les problèmes
// potentiels et affiche des avertissements supplémentaires en console.
// N'a aucun effet en production.
import { StrictMode } from 'react'

// createRoot : méthode moderne de React 18 pour attacher l'app au DOM.
import { createRoot } from 'react-dom/client'

// Styles globaux appliqués à toute l'application (reset CSS, polices, etc.)
import './index.css'

// Le composant racine qui contient tout le routing et toutes les pages
import App from './App.jsx'

/**
 * createRoot(document.getElementById('root'))
 * → trouve la balise <div id="root"> dans index.html
 * → c'est là que toute l'application React sera affichée
 *
 * .render(<App />) → injecte le composant App dans ce div
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
