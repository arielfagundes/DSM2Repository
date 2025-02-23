import { useState } from "react";

export default function App(){

  const [nome, setNome] = useState<string>("Ariel"); // useState: mudança de estado - Atribuído

  const [idade, setAge] = useState<number>(53);

  const [peso, setPeso] = useState<number>(); //<type>Uma boa prática de programação


  function handleNome(e){ //evento

    setNome(e.target.value);

  }

  function handleAge(e){

    setAge(e.target.value);
  
  }

  function handlePeso(e){
    
    setPeso(e.target.value);
  
  }

  function handleSave(){

    console.log(`APARECEU AQUI SEUS DADOS: ${nome}, ${idade} anos e ${peso} kg.`)

  }
  
  return ( 
  <div>
    <input value={nome} onChange={handleNome} />
    <div>Nome: {nome}</div> 

    <input type="number" value={idade} onChange={handleAge} />
    <div>Idade (anos): {idade}</div>

    <input type="number" value={peso} onChange={handlePeso} />
    <div>Peso (kg): {peso}</div>

    <br />

    <div>
      <button onClick={handleSave}>Salvar</button> 
    </div>


  </div>
  
  )
}




