/**
 * ============================================================
 * FICHIER : src/components/Banner/Banner.jsx
 * RÔLE    : Bandeau visuel en haut des pages Home et About.
 *           Affiche une image de fond différente selon la page,
 *           et un texte uniquement sur la page d'accueil.
 *
 * PROPS :
 *   - page (string, optionnel) : passer "about" pour la page À propos.
 *                                Laisser vide pour la page d'accueil.
 *
 * UTILISATION :
 *   <Banner />             → page d'accueil (image + texte)
 *   <Banner page="about"/> → page À propos (image différente, pas de texte)
 * ============================================================
 */

import './Banner.scss'

// Image de fond pour la page d'accueil
import homeBanner  from '../../assets/Image_source_1.png'

// Image de fond pour la page À propos
import aboutBanner from '../../assets/_Section 1.png'

function Banner({ page }) {

  // Choisit l'image selon la prop "page" reçue.
  // Si page === 'about' → image About, sinon image Home (par défaut).
  const bgImage = page === 'about' ? aboutBanner : homeBanner

  return (
    <div
      // Ajoute la classe CSS "banner--about" uniquement sur la page About
      // pour adapter la hauteur ou le style du bandeau si besoin.
      className={`banner ${page === 'about' ? 'banner--about' : ''}`}

      // L'image est appliquée en CSS via backgroundImage (pas en balise <img>)
      // pour permettre l'effet de couverture (cover) et le positionnement.
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/**
       * Le texte "Chez vous, partout et ailleurs" s'affiche UNIQUEMENT
       * sur la page d'accueil. Sur la page About, rien n'est affiché
       * (page !== 'about' est false → le bloc ne s'affiche pas).
       */}
      {page !== 'about' && (
        <p className="banner__text">Chez vous, partout et ailleurs</p>
      )}
    </div>
  )
}

export default Banner
