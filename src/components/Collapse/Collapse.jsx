/**
 * ============================================================
 * FICHIER : src/components/Collapse/Collapse.jsx
 * RÔLE    : Accordéon dépliable/repliable.
 *           Affiche un titre cliquable. Un clic ouvre ou ferme
 *           le contenu associé avec une animation de flèche.
 *           Utilisé dans les pages About et Logement.
 *
 * PROPS :
 *   - title   (string)          : texte du titre affiché dans le bouton
 *   - content (string ou array) : contenu affiché quand le collapse est ouvert.
 *       • Si c'est un tableau → affiche une liste <ul> avec des <li>
 *         (ex: liste des équipements d'un logement)
 *       • Si c'est un texte  → affiche un simple paragraphe <p>
 *         (ex: description d'un logement, texte des valeurs About)
 *
 * UTILISATION :
 *   <Collapse title="Description" content={logement.description} />
 *   <Collapse title="Équipements" content={logement.equipments} />
 * ============================================================
 */

// useState : stocke l'état ouvert/fermé du collapse
import { useState } from 'react'
import './Collapse.scss'

function Collapse({ title, content }) {

  /**
   * isOpen : booléen qui indique si le contenu est visible (true) ou caché (false)
   * Commence fermé par défaut (false).
   */
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">

      {/**
       * En-tête cliquable : un clic inverse l'état isOpen
       * (true → false, false → true) grâce à !isOpen
       */}
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Titre de l'accordéon */}
        <span className="collapse__title">{title}</span>

        {/**
         * Flèche indicatrice de l'état.
         * Quand isOpen est true → ajoute la classe "collapse__arrow--open"
         * qui fait pivoter la flèche via CSS (transform: rotate).
         */}
        <span className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}>
          ▲
        </span>
      </button>

      {/**
       * Contenu affiché UNIQUEMENT si isOpen est true.
       * Si isOpen est false, ce bloc entier n'est pas rendu dans le DOM.
       */}
      {isOpen && (
        <div className="collapse__content">

          {/**
           * Affichage conditionnel selon le type de "content" :
           *
           * Array.isArray(content) → vérifie si content est un tableau
           * → OUI (tableau) : affiche une liste à puces <ul>/<li>
           *   (utilisé pour les équipements du logement)
           * → NON (texte)   : affiche un simple paragraphe <p>
           *   (utilisé pour la description, les valeurs About)
           */}
          {Array.isArray(content) ? (
            <ul className="collapse__list">
              {content.map((item, index) => (
                // key={index} : identifiant unique requis par React pour les listes
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}

        </div>
      )}

    </div>
  )
}

export default Collapse
