import React, {useState, useEffect} from 'react'
import axios from 'axios'


function App() {

  
  const [usuarios, setUsuario] = useState([]);

  const buscar_usuarios = () => {
    axios.get("http://localhost:5000/usuarios")
    .then (response => {
      setUsuario(response.data);
    })
    .catch (error => {
      console.error("Erro ao encontrar usuarios: ", error);
    });
  }


  return (
    <>
      <div>
        <h1>React com express</h1>

        <button onClick={buscar_usuarios}>Buscar Usuarios</button>
        <ul>
          {usuarios.map(usuario => (
            <li key={usuario.id}>
              <p>{usuario.nome}</p>
              <p>{usuario.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
