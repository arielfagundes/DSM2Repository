import { useState } from "react";

const table: CSSProperties = {
  tableLayout: "auto", // a largura da tabela se ajusta ao conteúdo
  borderCollapse: "collapse",
  marginTop: "20px",
  };
  const cell: CSSProperties = {
  border: "1px solid black",
  padding: "5px",
  whiteSpace: "nowrap", // garante que o conteúdo não quebre em várias linhas
  };

  interface Person {
    nome: string;
    idade: number; 
  }

  export default function App(){
    
    const [nome, setNome] = useState<string>("");
    const [idade, setIdade] = useState<string>("");
    const [list, setList] = useState<Person[]>([]);
  
    
  
  
  }



