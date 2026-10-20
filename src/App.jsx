/*import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'*/
import './App.css'
import Image from './assets/7fayedh.jpeg'

const nom="Labassi Roua"
const age="20"
const email="Labassiroua@gmail.com"
const telephone="94625418"
const filiere="genie logiciel et systeme f'informatique"
const groupe="GLSI 2A"
const ville="Djerba"
const image = Image

function App() {
  return (
    <div>
      <h1>Fiche étudiant</h1>
      <img src={image} alt="image etudiant"
      style={{
          width: '150px',        /* Kibr el-photo */
          height: '150px',       /* Tole el-photo */
          borderRadius: '50%',   /* Ykhalliha Daira */
          objectFit: 'cover',     /* Ykhalli el-wjeh msh mjewwed */
          
        }} />
        <div><p> nom et prénom:{nom}</p>
      <p>email:{email}</p>
      <p>telephone:{telephone}</p>
      <p>filiere:{filiere}</p>
      <p>groupe:{groupe}</p>
      <p>ville:{ville}</p></div>
      
      <div id="contact"> <a id="roua" href="mailto : labassiroua@gmail.com">Contactez</a></div>
    
    </div>
  );
}

export default App;
