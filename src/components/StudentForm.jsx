import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAjouterEtudiant }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const [anneeEtude, setAnneeEtude] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState("");

  function handleImageChange(e) {
    const fichier = e.target.files[0];
    if (fichier) {
      setImage(URL.createObjectURL(fichier));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nouvelEtudiant = {
      nom: nom.trim(),
      prenom: prenom.trim(),
      Email: email.trim(),
      Tel: telephone.trim(),
      filier: filiere,
      annee: anneeEtude.trim(),
      groupe: groupe.trim(),
      ville: ville.trim(),
      img: image,
    };

    onAjouterEtudiant(nouvelEtudiant);

    // Réinitialisation des champs après l'ajout
    setNom("");
    setPrenom("");
    setEmail("");
    setTelephone("");
    setFiliere("");
    setAnneeEtude("");
    setGroupe("");
    setVille("");
    setImage("");
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2 className="form-title">Ajouter un étudiant</h2>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder="Saisir le nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prenom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          placeholder="Saisir le prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="exemple@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Telephone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          placeholder="Ex: 94625418"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere"
          name="filiere"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
          required
        >
          <option value="">Choisir une filière</option>
          <option value="Génie logiciel et système d'information">
            Génie logiciel et système d&apos;information
          </option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="RSI">RSI</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="anneeEtude">Annee d&apos;etude :</label>
        <input
          type="text"
          id="anneeEtude"
          name="anneeEtude"
          placeholder="Ex: 2ème année ou 20 ans"
          value={anneeEtude}
          onChange={(e) => setAnneeEtude(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>
        <input
          type="text"
          id="groupe"
          name="groupe"
          placeholder="Ex: GLSI 2A"
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          name="ville"
          placeholder="Ex: Mahdia"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image :</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <button type="submit" className="btn-submit">
        Ajouter
      </button>
    </form>
  );
}

export default StudentForm;