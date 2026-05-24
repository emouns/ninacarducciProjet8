/**
 * ============================================================
 * FICHIER : src/components/Tags/Tags.jsx
 * RÔLE    : Affiche la liste des tags (étiquettes) d'un logement
 *           sous forme de badges colorés.
 *
 * PROPS :
 *   - tags (tableau de strings) : liste des tags du logement.
 *     Provient de logement.tags dans le fichier JSON.
 *     Exemple : ["Moderne", "Studio", "Centre-ville"]
 *
 * UTILISATION : affiché dans la page Logement.jsx
 * ============================================================
 */

import './Tags.scss'

function Tags({ tags }) {
  return (
    // Liste non ordonnée : chaque tag est un élément de liste
    <ul className="tags">

      {/**
       * On parcourt le tableau "tags" avec .map() pour afficher
       * chaque tag dans un élément <li>.
       * key={index} : identifiant unique requis par React pour optimiser
       * le rendu de liste. On utilise l'index car les tags n'ont pas d'id.
       */}
      {tags.map((tag, index) => (
        <li key={index} className="tags__item">
          {tag}
        </li>
      ))}

    </ul>
  )
}

export default Tags
