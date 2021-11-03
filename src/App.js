import react,{useState} from 'react'
import './App.css';
import api from "./services/api.js"



function App() {
  
  const [usuario, setUsuario] = useState("")
  const [dados, setDados] = useState("")

  function atribuirUsuario(e){
    e.preventDefault()
    setUsuario(e.target.value)
    
  }

  function consultarUsuario(){
    let url = usuario 
    api.get(url).then(
      (Response) => {
        let objeto =JSON.stringify(Response.data)
        setDados(objeto)
      }).catch(
      (err) =>{setDados("Erro")
      })

  }    

  return (
    <div className="App">
      <header className="App-header">
        <h1> git hub</h1>
      </header>
      <div>
        <input type="text" name="usuario" onChange={(e) => atribuirUsuario(e)}></input>
        <button onClick={() => consultarUsuario()} > Buscar seu usuario</button >
      </div>
      <div className="resultado">
            {dados}
      </div>
    </div>
  );
}

export default App;
