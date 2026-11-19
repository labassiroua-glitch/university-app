import { useState } from 'react';

function StudentCard(props) {
  // État local pour afficher ou masquer les coordonnées de chaque étudiant indépendamment
  const [coordonneesVisible, setCoordonneesVisible] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisible(!coordonneesVisible);
  }

  const ville = props.ville || "Non renseignée";

  return (
    <div className="card">
      <div className="avatar-container">
        <img 
          src={props.img} 
          alt={`Photo de ${props.prenom}`} 
          className="avatar"
        />
      </div>
      <h2 className="card-title">Fiche étudiant</h2>

      <p className="card-item">
        <strong>Nom & Prénom :</strong> {props.prenom} {props.name}
      </p>

      {/* Affichage conditionnel des coordonnées avec && */}
      {coordonneesVisible && (
        <div className="coordonnees-section" style={{ margin: "10px 0", padding: "8px", background: "#f8f9fa", borderRadius: "5px" }}>
          <p className="card-item">
            <strong>Email :</strong> {props.Email}
          </p>
          <p className="card-item">
            <strong>Téléphone :</strong> {props.Tel}
          </p>
        </div>
      )}

      <p className="card-item">
        <strong>Filière :</strong> {props.filier}
      </p>
      <p className="card-item">
        <strong>Année / Âge :</strong> {props.annee}
      </p>
      <p className="card-item">
        <strong>Groupe :</strong> {props.groupe}
      </p>
      <p className="card-item">
        <strong>Ville :</strong> {ville}
      </p>

      <div className="card-actions" style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "15px" }}>
        {/* Bouton Afficher / Masquer */}
        <button 
          onClick={basculerCoordonnees} 
          style={{ padding: "8px", cursor: "pointer", background: "#64748b", color: "#fff", border: "none", borderRadius: "5px" }}
        >
          {coordonneesVisible ? 'Masquer les coordonnées' : 'Afficher les coordonnées'}
        </button>

        <a 
          href={`mailto:${props.Email}`} 
          style={{ textAlign: "center", padding: "8px", background: "#0d9488", color: "#fff", textDecoration: "none", borderRadius: "5px" }}
        >
          Contacter
        </a>

        <div style={{ display: "flex", gap: "8px" }}>
          <button 
            onClick={() => props.onModifier(props.id)} 
            style={{ flex: 1, padding: "8px", background: "#f59e0b", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Modifier
          </button>
          <button 
            onClick={() => props.onSupprimer(props.id)} 
            style={{ flex: 1, padding: "8px", background: "#dc2626", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;