import { useState } from "react";
import "./SearchBar.modules.css"

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }
   
   return (
      <div>
         <input type='search' className="search" onChange={handleChange} value={id}/>
         <button className="agregar" onClick={() =>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
