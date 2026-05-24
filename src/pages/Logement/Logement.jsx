/**
 * ============================================================
 * FICHIER : src/pages/Logement/Logement.jsx
 * RÔLE    : Page de détail d'un logement.
 *           Récupère l'ID du logement depuis l'URL, cherche
 *           le logement correspondant dans le JSON, et affiche
 *           toutes ses informations (photos, titre, hôte, tags,
 *           note, description, équipements).
 *           Si l'ID n'existe pas → redirection vers la page 404.
 *
 * ROUTE   : accessible à l'URL "/logement/:id"
 *           Exemple : /logement/OWkW8rnS (id tiré du JSON)
 * ============================================================
 */

// useParams  : hook qui lit les paramètres dynamiques de l'URL (:id)
// Navigate   : composant qui redirige automatiquement vers une autre URL
import { useParams, Navigate } from 'react-router-dom'

// Données de tous les logements (on va chercher celui qui correspond à l'id)
import logements from '../../data/logements.json'

// Composants affichés sur cette page
import Carousel from '../../components/Carousel/Carousel' // diaporama photos
import Rating   from '../../components/Rating/Rating'     // étoiles de note
import Tags     from '../../components/Tags/Tags'         // badges de tags
import Collapse from '../../components/Collapse/Collapse' // accordéons description/équipements

import './Logement.scss'

function Logement() {

  /**
   * useParams() lit les paramètres de l'URL courante.
   * Pour l'URL "/logement/abc123", il renvoie { id: "abc123" }.
   * On déstructure directement pour obtenir la variable "id".
   */
  const { id } = useParams()

  /**
   * On cherche dans le tableau le logement dont l'id correspond
   * à celui de l'URL. Si trouvé → logement = objet logement.
   * Si non trouvé → logement = undefined.
   */
  const logement = logements.find((l) => l.id === id)

  /**
   * GARDE DE SÉCURITÉ : si l'id n'existe pas dans le JSON,
   * on redirige immédiatement vers la page 404.
   * "replace" signifie qu'on remplace l'entrée dans l'historique
   * (l'utilisateur ne pourra pas revenir en arrière vers l'URL invalide).
   */
  if (!logement) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="logement">

      {/**
       * Carrousel de photos du logement.
       * pictures={logement.pictures} → tableau d'URLs des photos
       */}
      <Carousel pictures={logement.pictures} />

      {/* En-tête : infos du logement (à gauche) et infos hôte (à droite) */}
      <div className="logement__header">

        {/* Colonne gauche : titre, localisation, tags */}
        <div className="logement__info">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          {/* Tags : badges colorés (ex: "Moderne", "Studio") */}
          <Tags tags={logement.tags} />
        </div>

        {/* Colonne droite : photo + nom de l'hôte, et note en étoiles */}
        <div className="logement__host">
          <div className="logement__host-info">

            {/**
             * Nom de l'hôte affiché avant sa photo (ordre inversé visuellement
             * par CSS flex-direction: row-reverse ou équivalent).
             */}
            <p className="logement__host-name">{logement.host.name}</p>

            {/* Photo de profil de l'hôte */}
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="logement__host-img"
            />
          </div>

          {/* Note du logement (ex: "4" → 4 étoiles sur 5) */}
          <Rating rating={logement.rating} />
        </div>

      </div>

      {/* Deux accordéons : Description et Équipements */}
      <div className="logement__collapses">

        {/**
         * Description : contenu de type texte (string)
         * → Collapse affichera un <p>
         */}
        <Collapse title="Description" content={logement.description} />

        {/**
         * Équipements : contenu de type tableau (array of strings)
         * → Collapse affichera une <ul> avec des <li>
         */}
        <Collapse title="Équipements" content={logement.equipments} />

      </div>

    </div>
  )
}

export default Logement
