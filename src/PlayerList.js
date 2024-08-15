import players from "./players";
import Player from "./Player";



const PlayerList = () => (
 <div>
  {players.map((player, index) =>(
  <Player key={index} {...player} />


  ))}
 </div>
)

export default PlayerList
