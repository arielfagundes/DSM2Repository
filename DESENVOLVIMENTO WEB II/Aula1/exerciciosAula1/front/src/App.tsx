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


       

      const listaNomes = nomes.map((item, indice) =>{

        const currentAge = nomes[indice].age < 18 ? "menor":"";
        const currentGender = nomes[indice].gender === "F" ? f : m;
        

        return (
          <div key={indice} style={currentGender}> 
            {indice + 1}. {item.name} ({currentAge})
          </div>
        )
      });

      

      return (
        <div >
          {listaNomes}
        </div>
      )
    
  }
   
  
