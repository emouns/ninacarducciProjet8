/**
 * ============================================================
 * FICHIER : src/components/Card/Card.jsx
 * RÔLE    : Carte cliquable représentant un logement dans la
 *           galerie de la page d'accueil.
 *           Affiche la photo de couverture et le titre du logement.
 *           Un clic navigue vers la page détail du logement.
 *
 * PROPS :
 *   - logement (objet) : un logement provenant de logements.json.
 *     Propriétés utilisées :
 *       • logement.id     → sert à construire l'URL de destination
 *       • logement.cover  → URL de la photo de couverture
 *       • logement.title  → nom du logement (aussi utilisé en alt)
 *
 * UTILISATION : affiché en boucle dans Home.jsx via logements.map()
 * ============================================================
 */

// Link : permet de naviguer vers une autre page sans rechargement
import { Link } from 'react-router-dom'
import './Card.scss'

function Card({ logement }) {
  return (
    /**
     * La carte entière est un lien cliquable.
     * L'URL est construite dynamiquement avec l'id du logement :
     * ex: /logement/abc123
     * Ce lien correspond à la route path="/logement/:id" dans App.jsx.
     */
    <Link to={`/logement/${logement.id}`} className="card">

      {/* Photo de couverture du logement */}
      <img
        src={logement.cover}
        alt={logement.title}
        className="card__img"
      />

      {/* Overlay sombre en bas de la carte avec le titre du logement */}
      <div className="card__overlay">
        <p className="card__title">{logement.title}</p>
      </div>

    </Link>
  )
}

export default Card
