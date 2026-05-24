/**
 * ============================================================
 * FICHIER : src/components/Header/Header.jsx
 * RÔLE    : Barre de navigation en haut de toutes les pages.
 *           Contient le logo cliquable (retour accueil) et
 *           les liens de navigation Accueil / À propos.
 *
 * UTILISATION : importé et affiché dans Layout.jsx
 * ============================================================
 */

// Link    : crée un lien de navigation sans recharger la page (comme <a> mais React)
// NavLink : comme Link, mais ajoute automatiquement une classe CSS quand
//           le lien correspond à la page actuelle (utile pour le style "actif")
import { Link, NavLink } from 'react-router-dom'

import './Header.scss'

// Image du logo Kasa importée depuis les assets
import logo from '../../assets/kasa_logo.png'

function Header() {
  return (
    <header className="header">

      {/**
       * Logo cliquable : ramène toujours à la page d'accueil ("/").
       * <Link to="/"> → navigation React sans rechargement de page.
       */}
      <Link to="/">
        <img src={logo} alt="Kasa logo" className="header__logo" />
      </Link>

      {/* Barre de navigation avec les deux liens principaux */}
      <nav className="header__nav">

        {/**
         * <NavLink> avec une fonction className :
         * - Si le lien est actif (page courante), ajoute la classe "header__link--active"
         * - Sinon, utilise seulement "header__link"
         * Cela permet de souligner ou mettre en évidence le lien de la page actuelle.
         */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'header__link header__link--active' : 'header__link'
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'header__link header__link--active' : 'header__link'
          }
        >
          À propos
        </NavLink>

      </nav>
    </header>
  )
}

export default Header
