import Card from "./Card";

export default function Cards({ characters }) {
  return (
    <div>
      {characters.map((character) => {
        return(
         <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            origin={character.origin}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
        ) 
      })}
    </div>
  );
}
