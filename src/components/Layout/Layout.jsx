/**
 * ============================================================
 * FICHIER : src/components/Layout/Layout.jsx
 * RÔLE    : Structure commune partagée par toutes les pages.
 *           Affiche le Header en haut, le Footer en bas,
 *           et insère le contenu de la page courante au milieu
 *           grâce à <Outlet />.
 *
 * UTILISATION : déclaré dans App.jsx comme route parente.
 *               Toutes les pages (Home, About, Logement, 404)
 *               s'affichent à l'intérieur de ce Layout.
 * ============================================================
 */

// Outlet : composant de react-router-dom qui agit comme un "trou"
// dans lequel la page enfant active (Home, About, etc.) est injectée.
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.scss'

function Layout() {
  return (
    // Conteneur principal qui structure toute la page en colonne (flex)
    <div className="layout">

      {/* Barre de navigation en haut : logo + liens Accueil / À propos */}
      <Header />

      {/**
       * Zone principale de contenu.
       * <Outlet /> est remplacé automatiquement par le composant
       * de la route active : <Home />, <About />, <Logement />, etc.
       */}
      <main className="layout__main">
        <Outlet />
      </main>

      {/* Pied de page : logo Kasa + mention copyright */}
      <Footer />

    </div>
  )
}

export default Layout
