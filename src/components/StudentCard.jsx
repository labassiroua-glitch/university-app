import React from 'react';

function StudentCard(props) {
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
      <p className="card-item">
        <strong>Email :</strong> {props.Email}
      </p>
      <p className="card-item">
        <strong>Téléphone :</strong> {props.Tel}
      </p>
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
        <strong>Ville :</strong> {props.ville}
      </p>
    </div>
  );
}

export default StudentCard;