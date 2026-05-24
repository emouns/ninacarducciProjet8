/**
 * ============================================================
 * FICHIER : src/pages/Home/Home.jsx
 * RÔLE    : Page d'accueil du site Kasa.
 *           Affiche le bandeau visuel principal et la galerie
 *           de toutes les cartes de logements disponibles.
 *
 * DONNÉES : importées directement depuis le fichier JSON local.
 *           (Dans une vraie application, ces données viendraient
 *           d'une API externe via fetch ou axios.)
 *
 * ROUTE   : accessible à l'URL "/"
 * ============================================================
 */

// Données statiques : tableau de tous les logements disponibles
import logements from '../../data/logements.json'

// Composant Card : affiche la vignette d'un logement (photo + titre + lien)
import Card   from '../../components/Card/Card'

// Composant Banner : bandeau visuel en haut de page
import Banner from '../../components/Banner/Banner'

import './Home.scss'

function Home() {
  return (
    <div className="home">

      {/**
       * Bandeau de la page d'accueil.
       * Pas de prop "page" → Banner utilise l'image par défaut
       * et affiche le texte "Chez vous, partout et ailleurs".
       */}
      <Banner />

      {/**
       * Galerie de logements : affiche une Card pour chaque logement.
       *
       * logements.map(...) : parcourt tous les logements du JSON
       * et génère un composant <Card> pour chacun.
       *
       * key={logement.id} : identifiant unique requis par React.
       *   Ici on utilise l'id du logement (plus fiable que l'index).
       *
       * logement={logement} : on passe l'objet logement entier à Card,
       *   qui utilisera ses propriétés (id, cover, title) en interne.
       */}
      <section className="home__gallery">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>

    </div>
  )
}

export default Home
