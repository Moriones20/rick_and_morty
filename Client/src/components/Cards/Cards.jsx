import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import "./Cards.modules.css";

export default function Cards({ characters, onClose, onSearch }) {
  return (
    <div className="container">
      <div className="searchbar">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="cards-container">
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
    </div>
  );
}
