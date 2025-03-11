export default function App() {
  
  return (
    <>
      <Message/>
    </>
  );

}

function Message() {

  const nomes = [
    {
    name: "Ana",
    gender: "F",
    age: 21
    },
    {
    name: "Bruno",
    gender: "M",
    age: 17
    },
    {
    name: "Carla",
    gender: "F",
    age: 15
    },
    {
    name: "Daniel",
    gender: "M",
    age: 22
    }
  ]

  const f = {
    backgroundColor: "orange",
  };
  const m = {
    backgroundColor: "palegreen",
  };



  const listaNomes = nomes.map((item, indice) => {

    const currentAge = item.age < 18 ? "(menor)":""; // { item.age < 18 && <>menor</> }
    const currentGender = item.gender === "F" ? f : m;
        
    return (

      <li key={indice} style={currentGender}> 
        {item.name} {currentAge}
      </li>

    )
  });

      
  return (
    <ol>
      {listaNomes}
    </ol>
  )
    
}




