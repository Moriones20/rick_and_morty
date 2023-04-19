import "./Card.modules.css";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [id, myFavorites]);

  return (
    <div className="card">
      <div className="btn-fav-close">
        <button className="favorite" onClick={handleFavorite}>
          {isFav ? "❤️" : "🤍"}
        </button>
        <button className="close" onClick={() => onClose(id)}>
          X
        </button>
      </div>
      <div className="card-link">
        <NavLink to={`/detail/${id}`}>
          <h2>{name}</h2>
          <h3>Specie: {species}</h3>
          <h3>Gender: {gender}</h3>
          <img src={image} alt="" />
        </NavLink>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
