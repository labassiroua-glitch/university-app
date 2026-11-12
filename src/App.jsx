import { useState } from "react";
import './App.css';
import StudentCard from './components/StudentCard.jsx';
import rou from './assets/7fayedh.jpeg';
import levi from './assets/levi.jpg';
import kakashi from './assets/kakashi.jpg';

function App() {
  // 1. Initialisation de la liste avec un id unique pour chaque étudiant
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      nom: "Labassi",
      prenom: "Roua",
      Email: "Labassiroua@gmail.com",
      Tel: "94625418",
      filier: "Génie logiciel et système d'information",
      annee: "20 ans", 
      groupe: "GLSI 2A",
      ville: "Djerba",
      img: rou
    },
    {
      id: 2,
      nom: "Ackerman",
      prenom: "Levi",
      Email: "levi.ackerman@gmail.com",
      Tel: "+216 22 113 344",
      filier: "Génie logiciel et système d'information",
      annee: "21 ans", 
      groupe: "GLSI 2A",
      ville: "Mahdia",
      img: levi
    },
    {
      id: 3,
      nom: "Hatake",
      prenom: "Kakashi",
      Email: "kakashi.hatake@gmail.com",
      Tel: "+216 55 667 788",
      filier: "Génie logiciel et système d'information",
      annee: "22 ans", 
      groupe: "GLSI 2B",
      ville: "Mahdia",
      img: kakashi
    }
  ]);

  // État pour la barre de recherche / filtrage
  const [recherche, setRecherche] = useState("");

  // 2. Fonction Ajouter un étudiant (spread operator ...)
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id: Date.now(), // ID unique
      nom: "Makchaha",
      prenom: "Majd",
      Email: "majd.makchaha@gmail.com",
      Tel: "+216 22 113 344",
      filier: "Génie logiciel et système d'information",
      annee: "21 ans", 
      groupe: "GLSI 2A",
      ville: "Mahdia",
      img: levi
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  
  function supprimerEtudiant(id) {
    const nouvelleListe = etudiants.filter((etudiant) => etudiant.id !== id);
    setEtudiants(nouvelleListe);
  }

  // 4. Fonction Modifier un étudiant (prompt, trim et map)
  function modifierEtudiant(id) {
    const nouveauPrenom = prompt("Entrez le nouveau prénom de l'étudiant :");
    if (nouveauPrenom !== null && nouveauPrenom.trim() !== "") {
      const listeModifiee = etudiants.map((etudiant) => {
        if (etudiant.id === id) {
          return { ...etudiant, prenom: nouveauPrenom.trim() };
        }
        return etudiant;
      });
      setEtudiants(listeModifiee);
    }
  }

  // 5. Filtrer les étudiants selon le texte saisi dans la recherche
  const etudiantsFiltres = etudiants.filter((etudiant) => {
    const terme = recherche.toLowerCase();
    return (
      etudiant.nom.toLowerCase().includes(terme) ||
      etudiant.prenom.toLowerCase().includes(terme) ||
      etudiant.filier.toLowerCase().includes(terme)
    );
  });

  return (
    <div className="page-container">
      {/* En-tête avec titre et sous-titre */}
      <header className="page-header">
        <h1>Liste des étudiants</h1>
        <p className="subtitle">GLSI 2 - Année universitaire 2026-2027</p>
      </header>

      {/* Barre de navigation bleue */}
      <nav className="navbar">
        <a href="#accueil">Accueil</a>
        <a href="#etudiants" className="active">Étudiants</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Actions : Barre de recherche et Bouton d'ajout */}
      <div className="actions" style={{ textAlign: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou filière..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          style={{ padding: "8px 12px", width: "300px", marginRight: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button onClick={ajouterEtudiant} style={{ padding: "8px 15px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Ajouter un étudiant
        </button>
      </div>

      {/* Grille des cartes d'étudiants */}
      <main className="content">
        <section className="student-grid" aria-label="Liste des étudiants">
          {etudiantsFiltres.map((etudiant) => (
            <StudentCard
              key={etudiant.id}
              id={etudiant.id}
              name={etudiant.nom}
              prenom={etudiant.prenom}
              Email={etudiant.Email}
              Tel={etudiant.Tel}
              filier={etudiant.filier}
              annee={etudiant.annee}
              groupe={etudiant.groupe}
              ville={etudiant.ville}
              img={etudiant.img}
              onSupprimer={supprimerEtudiant}
              onModifier={modifierEtudiant}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;