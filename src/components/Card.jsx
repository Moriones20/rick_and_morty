import { NavLink } from "react-router-dom"

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>

         <NavLink to={`/detail/${id}`}>
            <h2>{name}</h2>
         </NavLink>

         <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{origin.name}</h3>
         <img src={image} alt='' />
      </div>
   );
}  
