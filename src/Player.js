import propTypes from "prop-types";
import {Card} from 'react-bootstrap';


const Player = ({Name,Nationality,Team,Jersey_no,Age,Rating,Image}) =>{
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image} alt="" />
      <Card.Body>
        <Card.Title><h1>Name: {Name}</h1>
        <h2>Nationality:{Nationality}</h2>
        <h3>Team:{Team}</h3>

        </Card.Title>
        <Card.Text>
        <p> Jersey number :{Jersey_no}</p>
        <h3>Age: {Age}</h3>
        <p> Rating:{Rating}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  );
}


  Player.propTypes = {
  Name: propTypes.string,
  Team: propTypes.string,
  Nationality: propTypes.string,
  Jersey_no: propTypes.number,
  Age: propTypes.number,
  Rating: propTypes.number,
  Image: propTypes.string
};

Player.defaultTypes ={
 Name: "Unknown Player",
 Team: "Unknown Number",
 Nationality:"Unknown contry", 
 Jersey_no: 0,
 Age:0,
 Rating: 0,
 Image: "Unknown url",

}
 

 export default Player