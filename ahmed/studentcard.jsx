// src/components/StudentCard.jsx

function StudentCard(props) {
  // Valeur par défaut pour la ville ken ma farnahach (p.22 fel-TP)
  const ville = props.ville || "Non renseignée";[cite,
     32]

  return (
    <div className="card">
      <img src={props.image} alt="Photo de l'étudiant" />[cite: 24]
      <h1>Fiche étudiant</h1>[cite: 24]
      <p>
        <strong>Nom & Prénom:</strong> {props.prenom} {props.nom}[cite: 24]
      </p>
      <p><strong>Email:</strong> {props.email}</p>[cite: 24]
      <p><strong>Téléphone:</strong> {props.telephone}</p>[cite: 24]
      <p><strong>Filière:</strong> {props.filiere}</p>[cite: 24]
      <p><strong>Année:</strong> {props.anneeEtude}</p>[cite: 24]
      <p><strong>Groupe:</strong> {props.groupe}</p>[cite: 24]
      <p><strong>Ville:</strong> {ville}</p>[cite: 24, 32]
    </div>
  );
}

export default StudentCard;