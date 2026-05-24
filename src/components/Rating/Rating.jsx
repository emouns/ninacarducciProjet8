/**
 * ============================================================
 * FICHIER : src/components/Rating/Rating.jsx
 * RÔLE    : Affiche une note sous forme d'étoiles (★).
 *           Les étoiles "pleines" sont colorées en rouge Kasa,
 *           les étoiles "vides" restent grises.
 *           Toujours 5 étoiles au total.
 *
 * PROPS :
 *   - rating (string ou number) : la note du logement (ex: "4" ou 4)
 *     provient de logement.rating dans le fichier JSON.
 *
 * EXEMPLE : rating="3" → ★★★☆☆ (3 rouges, 2 grises)
 *
 * UTILISATION : affiché dans la page Logement.jsx
 * ============================================================
 */

import './Rating.scss'

function Rating({ rating }) {

  // Nombre total d'étoiles à afficher
  const total = 5

  /**
   * parseInt(rating) : convertit la note en nombre entier.
   * Nécessaire car dans le JSON la valeur peut être une chaîne ("4").
   */
  const note = parseInt(rating)

  return (
    <div className="rating">

      {/**
       * Array.from({ length: total }, ...) :
       * Crée un tableau de 5 éléments [0, 1, 2, 3, 4] pour générer 5 étoiles.
       *
       * Pour chaque position "i" :
       * - Si i < note (ex: i=0,1,2 pour une note de 3) → étoile active (rouge)
       * - Sinon → étoile inactive (grise)
       *
       * La classe CSS "rating__star--active" est ajoutée conditionnellement.
       */}
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`rating__star ${i < note ? 'rating__star--active' : ''}`}
        >
          ★
        </span>
      ))}

    </div>
  )
}

export default Rating
