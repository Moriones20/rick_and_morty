import Card from './Card';

export default function Cards(props) {
   return (
      <div>
         {
            props.characters.map(character => {
               return (
                  <div>
                     {Card(character)}
                  </div>
               )
            }) 
         }
      </div>
   )
}
