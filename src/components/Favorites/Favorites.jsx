import Card from "../Card/Card";
import { connect } from 'react-redux'
import './Favorites.modules.css'

const Favorites = ({ myFavorites }) => {
  return (
    <div className="container-favorites">
      {
        myFavorites?.map(fav => {
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
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(
  mapStateToProps,
  null
)(Favorites);