
```javascript
import { useState } from "react"

interface Person {
	nome: string;
	idade: number;
}

export default function App(){

  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [lista, setLista] = useState<Person[]>([]);

  function handleSave(e){

    setLista([...lista, {nome, idade: Number(idade)}]);

    setNome("");
    setIdade("");
  }

  return (
  <div>
    <div>
	    <label htmlFor="name">Nome:</label>
	    <input type="text" id="name" onChange={ (e) => setNome(e.target.value) }
	     value={nome}/>
    </div>
    <div>
	   <label htmlFor="idade">Idade:</label>
	   <input id="idade" onChange={(e) => setIdade(e.target.value) 
	   value={idade}/>
    </div>
  
  <button onClick={handleSave}>Salvar</button>

    <ol>
      {lista.map((item, indice) => (
        <li key={indice}>
          {item.nome} - {item.idade}
        </li> 
       ))}
    </ol>
    
  </div>
  )
}
```