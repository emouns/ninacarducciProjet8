/**
 * ============================================================
 * FICHIER : src/App.jsx
 * RÔLE    : Point d'entrée de l'application React.
 *           Configure le système de navigation (routing) et
 *           déclare toutes les routes disponibles dans le site.
 * ============================================================
 */

// BrowserRouter  → active la navigation via l'URL du navigateur (ex: /about, /logement/123)
// Routes         → conteneur qui choisit quelle route afficher selon l'URL
// Route          → associe une URL à un composant à afficher
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout : structure commune à toutes les pages (Header + contenu + Footer)
import Layout from './components/Layout/Layout'

// Pages de l'application
import Home     from './pages/Home/Home'         // Page d'accueil : liste des logements
import About    from './pages/About/About'       // Page "À propos" : valeurs de Kasa
import Logement from './pages/Logement/Logement' // Page détail d'un logement (par ID)
import Error404  from './pages/Error404/Error404' // Page affichée si l'URL n'existe pas

function App() {
  return (
    /**
     * <BrowserRouter> enveloppe toute l'app pour activer la navigation React.
     * Sans lui, les <Routes> et <Link> ne fonctionneraient pas.
     */
    <BrowserRouter>
      <Routes>

        {/**
         * Route parente : <Layout />
         * Toutes les routes imbriquées ici hériteront du Layout
         * (Header en haut, Footer en bas). Le contenu de la page
         * sera injecté à l'emplacement <Outlet /> dans Layout.jsx.
         */}
        <Route element={<Layout />}>

          {/* Route exacte "/" → affiche la page d'accueil */}
          <Route path="/"               element={<Home />}     />

          {/* Route "/about" → affiche la page À propos */}
          <Route path="/about"          element={<About />}    />

          {/**
           * Route dynamique "/logement/:id"
           * ":id" est un paramètre variable (ex: /logement/abc123)
           * Logement.jsx récupère cet id avec useParams() pour trouver
           * le bon logement dans le fichier JSON.
           */}
          <Route path="/logement/:id"   element={<Logement />} />

          {/**
           * Route joker "*" → attrape TOUTES les URLs inconnues
           * (ex: /blabla, /page-inexistante) et affiche la page 404.
           * Doit toujours être en dernière position.
           */}
          <Route path="*"               element={<Error404 />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
