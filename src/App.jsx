import './App.css';
import StudentCard from './components/StudentCard.jsx'; // Vérifiez 'components' ou 'Components'
import rou from './assets/7fayedh.jpeg';
import levi from './assets/levi.jpg';
import kakashi from './assets/kakashi.jpg';


const etudiants = [
  {
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
];

function App() {
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

      {/* Grille des cartes d'étudiants */}
      <main className="content">
        <section className="student-grid" aria-label="Liste des étudiants">
          {etudiants.map((etudiant) => (
            <StudentCard
              key={`${etudiant.nom}-${etudiant.prenom}`}
              name={etudiant.nom}
              prenom={etudiant.prenom}
              Email={etudiant.Email}
              Tel={etudiant.Tel}
              filier={etudiant.filier}
              annee={etudiant.annee}
              groupe={etudiant.groupe}
              ville={etudiant.ville}
              img={etudiant.img}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;