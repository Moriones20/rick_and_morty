import Card from "../Card/Card";
import "./Cards.modules.css"

export default function Cards({ characters, onClose }) {
  return (
    <div className="container">
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            origin={character.origin}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
