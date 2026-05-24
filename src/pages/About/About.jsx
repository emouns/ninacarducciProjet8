/**
 * ============================================================
 * FICHIER : src/pages/About/About.jsx
 * RÔLE    : Page "À propos" du site Kasa.
 *           Présente les valeurs de l'entreprise sous forme
 *           d'accordéons dépliables (un par valeur).
 *
 * ROUTE   : accessible à l'URL "/about"
 * ============================================================
 */

import Banner   from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import './About.scss'

/**
 * Données statiques des valeurs de Kasa.
 * Chaque objet contient :
 *   - title   : le nom de la valeur (affiché dans l'en-tête du Collapse)
 *   - content : le texte explicatif (affiché quand le Collapse est ouvert)
 *
 * Ces données sont déclarées hors du composant car elles ne changent jamais :
 * les mettre à l'intérieur recréerait le tableau à chaque rendu inutilement.
 */
const aboutData = [
  {
    title: 'Fiabilité',
    content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
  },
  {
    title: 'Respect',
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de mauvaise foi fera l'objet de sanctions."
  },
  {
    title: 'Service',
    content: 'Nos équipes se tiennent disponibles pour vous permettre de mener à bien votre projet locatif.'
  },
  {
    title: 'Sécurité',
    content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos équipes.'
  }
]

function About() {
  return (
    <div className="about">

      {/**
       * Bandeau de la page About.
       * La prop page="about" indique au composant Banner d'utiliser
       * l'image About (sans texte superposé).
       */}
      <Banner page="about" />

      {/**
       * Section des accordéons : un Collapse par valeur Kasa.
       *
       * aboutData.map(...) : génère un composant <Collapse>
       * pour chaque élément du tableau aboutData.
       *
       * key={index} : identifiant unique pour React (pas d'id disponible ici).
       * title={item.title}     → texte de l'en-tête de l'accordéon
       * content={item.content} → texte affiché à l'ouverture
       */}
      <div className="about__collapses">
        {aboutData.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>

    </div>
  )
}

export default About
