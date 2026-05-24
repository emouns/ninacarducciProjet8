/**
 * ============================================================
 * FICHIER : src/components/Footer/Footer.jsx
 * RÔLE    : Pied de page affiché en bas de toutes les pages.
 *           Contient le logo Kasa (version blanche) et
 *           le texte de copyright.
 *
 * UTILISATION : importé et affiché dans Layout.jsx
 * ============================================================
 */

import './Footer.scss'

// Logo blanc de Kasa utilisé dans le fond sombre du footer
import logo from '../../assets/LOGO.png'

function Footer() {
  return (
    <footer className="footer">

      {/* Logo Kasa en version claire pour contraster avec le fond sombre */}
      <img
        src={logo}
        alt="Kasa logo"
        className="footer__logo"
      />

      {/* Mention légale de copyright */}
      <p className="footer__text">© 2020 Kasa All rights reserved</p>

    </footer>
  )
}

export default Footer
