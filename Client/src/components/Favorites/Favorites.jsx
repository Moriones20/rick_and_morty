import "./Favorites.modules.css";
import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className="container-favorites">
      <div className="filter-order">
        <select className="order" name="order" onChange={handleOrder}>
          <option value="A">Select an order</option>
          <option value="A">Ascendent</option>
          <option value="D">Descendent</option>
        </select>

        <select className="filter" name="filter" onChange={handleFilter}>
          <option value="All">Select a gender</option>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className="card-fav">
        {myFavorites?.map((fav) => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              species={fav.species}
              gender={fav.gender}
              image={fav.image}
              onClose={fav.onClose}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
