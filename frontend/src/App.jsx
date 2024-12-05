import React, {useState, useEffect} from 'react'
import axios from 'axios'


function App() {

  const [message, setMessage] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect (() =>{
    axios.get('http://localhost:5000/api')
    .then(response => {
      setMessage(response.data.message);
    })
    .catch (error => {
      console.error('Erro ao pegar a mensagem: ', error);
    });
    axios.get('http://localhost:5000/nome')
    .then(response => {
      setNome(response.data.nome);
    })
    .catch(error => {
      console.error("error: ", error)
    });
    axios.get('http://localhost:5000/usuarios')
    .then(response => {
      setNome(response.data.nome);
      setEmail(response.data.email);
    })
    .catch(error => {
      console.error("error: ", error)
    });

  }, []);
  



  return (
    <>
      <div>
        <h1>React com express</h1>
        <p>{message}</p>
        <p>{nome}</p>
        <p>{email}</p>
      </div>
    </>
  )
}

export default App
