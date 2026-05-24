/**
 * ============================================================
 * FICHIER : src/components/Carousel/Carousel.jsx
 * RÔLE    : Diaporama d'images pour la page détail d'un logement.
 *           Permet de naviguer entre plusieurs photos avec des
 *           boutons précédent / suivant.
 *           Si le logement n'a qu'une seule photo, les boutons
 *           et le compteur sont masqués.
 *
 * PROPS :
 *   - pictures (tableau de strings) : liste des URLs des photos
 *     du logement (provient de logement.pictures dans le JSON)
 *
 * UTILISATION : affiché en haut de la page Logement.jsx
 * ============================================================
 */

// useState : hook React qui permet de stocker et modifier un état local.
// Ici, il stocke l'index (numéro) de la photo actuellement affichée.
import { useState } from 'react'
import './Carousel.scss'

function Carousel({ pictures }) {

  /**
   * index : numéro de la photo affichée (commence à 0 pour la 1ère photo)
   * setIndex : fonction pour changer l'index → déclenche un re-rendu React
   */
  const [index, setIndex] = useState(0)

  /**
   * handlePrev : passe à la photo précédente.
   * Si on est sur la 1ère photo (index === 0), on boucle
   * vers la dernière photo (pictures.length - 1).
   */
  const handlePrev = () => {
    setIndex(index === 0 ? pictures.length - 1 : index - 1)
  }

  /**
   * handleNext : passe à la photo suivante.
   * Si on est sur la dernière photo, on revient à la 1ère (index 0).
   */
  const handleNext = () => {
    setIndex(index === pictures.length - 1 ? 0 : index + 1)
  }

  return (
    <div className="carousel">

      {/* Affiche la photo dont le numéro correspond à l'index actuel */}
      <img
        src={pictures[index]}
        alt={`Photo ${index + 1}`}
        className="carousel__img"
      />

      {/**
       * Les boutons et le compteur ne s'affichent QUE s'il y a
       * plusieurs photos. Si une seule photo → pas de navigation.
       * L'opérateur && affiche le bloc seulement si la condition est vraie.
       */}
      {pictures.length > 1 && (
        <>
          {/* Bouton flèche gauche : photo précédente */}
          <button
            className="carousel__btn carousel__btn--prev"
            onClick={handlePrev}
          >
            &#10094; {/* Caractère HTML de la flèche gauche ❮ */}
          </button>

          {/* Bouton flèche droite : photo suivante */}
          <button
            className="carousel__btn carousel__btn--next"
            onClick={handleNext}
          >
            &#10095; {/* Caractère HTML de la flèche droite ❯ */}
          </button>

          {/* Compteur : "1 / 5", "2 / 5", etc. */}
          <span className="carousel__counter">
            {index + 1} / {pictures.length}
          </span>
        </>
      )}

    </div>
  )
}

export default Carousel
