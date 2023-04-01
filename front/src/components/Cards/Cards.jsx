import Card from "../Card/Card";
import { CardsContainer } from "./styledComponents";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions";


export default function Cards({ characters, onClose }) {

    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getFavorites());
    }, []);
    return (
    <CardsContainer>
        {characters.map(({ id, name, species, gender, image }) => {
        return (
            <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
            />
        );
        })}
    </CardsContainer>
    );
}










// import Card from '../Card/Card';
// import style from './Cards.module.css';


// export default function Cards({ characters, onClose }) {
//     //puedo poner dentro del parentesis {characters} y es lo mismo que el const
//     //const {characters} = props;
//     return (
//         <div className={style.container}>
//         {characters.map(({ id, name, species, gender, image }) => {
//         return (
//             <div>
//                 <div className={style.text}>
//                 I'M PICKLE RICK!
//                 </div>
//             <Card
//                 key={id}
//                 id={id}
//                 name={name}
//                 species={species}
//                 gender={gender}
//                 image={image}
//                 onClose={onClose}
//             />
//             </div>
//             );
//         })}
//         </div>
//     );
// } 