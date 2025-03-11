function App() {                                     //se for um componente a primeira letra tem que ser maiúscula
  return (
  <>
  <Carro />
  <Varios />     
  <Mais />                         
  </>
  )
  
} 

export default App

function Carro() {                                    //todo componente é uma função     
  const marca = "Ford"           
  return (                                            //cada Return só pode ter uma div
    <div style={{backgroundColor: "yellow"}}>         {/*chaves JS e chave em XML*/}
      <div>Marca: {marca} </div>  
      <div>Modelo: Onix</div>                         {/*Comentário*/}
      <div>Placa: SWJ-9H50</div>
    </div>
  );
}                      

function Varios(){
  const marcas = ["Ford","GM","VW"]
  return marcas.map((item, indice)=> (

// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div style={{backgroundColor: "green"}} key={indice}>
        <div>Marca: {item}</div>
        <div>Modelo: Onix</div>
        <div>Placa: 123-456</div>
      </div>
    ));
}


function Mais(){
  const marcas = [
    {Marca: "Ford", Modelo: "Ka", Placa: "123-456", cor: "blue" },
    {Marca: "GM", Modelo: "Cobalt", Placa: "456-456", cor: "green" },
    {Marca: "VW", Modelo: "Gol", Placa: "789-456", cor: "yellow" }
  ];
  return marcas.map((item, indice)=> (

      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div style={{backgroundColor: item.cor}} key={indice}>
        <div>Marca: {item.Marca}</div>
        <div>Modelo: {item.Modelo}</div>
        <div>Placa: {item.Placa}</div>
      </div>
    ));
}
