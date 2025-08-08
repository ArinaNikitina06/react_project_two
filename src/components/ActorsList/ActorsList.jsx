import Actor from "../Actor/Actor";
import "./actorsList.scss";

const ActorsList = ({currentActors}) => {
  return (
    <div className="actors-list">
      {currentActors.map(({id, name, enName, enProfession, profession, photo }) => (
        <Actor key={id} id={id} name={name} enName={enName} enProfession={enProfession} profession={profession} photo={photo}></Actor>
      ))}
    </div>
  );
};

// description: 
// "Atlas"
// enName: 
// "Douglas Jung"
// enProfession: 
// "actor"
// id: 
// 6436423
// name: 
// null
// photo: 
// "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6436423.jpg"
// profession: 
// "актеры"

export default ActorsList;
