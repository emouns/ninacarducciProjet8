/**
 * ============================================================
 * FICHIER : src/pages/Error404/Error404.jsx
 * RÔLE    : Page d'erreur 404 affichée dans deux cas :
 *           1. L'utilisateur tape une URL qui n'existe pas
 *              (route "*" dans App.jsx attrape tout le reste)
 *           2. L'utilisateur accède à /logement/:id avec un id
 *              qui n'existe pas dans le JSON (redirection depuis
 *              Logement.jsx avec <Navigate to="/404" />)
 *
 * AFFICHAGE : grand "404", message explicatif, lien retour accueil
 * ============================================================
 */

// Link : permet de naviguer vers "/" sans recharger la page
import { Link } from 'react-router-dom'
import './Error404.scss'

function Error404() {
  return (
    <div className="error404">

      {/* Grand texte "404" centré en rouge Kasa */}
      <h1 className="error404__code">404</h1>

      {/* Message explicatif pour l'utilisateur */}
      <p className="error404__text">
        Oups! La page que vous demandez n'existe pas.
      </p>

      {/**
       * Lien de retour vers la page d'accueil.
       * <Link to="/"> → navigation React sans rechargement de page.
       */}
      <Link to="/" className="error404__link">
        Retourner sur la page d'accueil
      </Link>

    </div>
  )
}

export default Error404
