import React from "react";
import style from "./Card.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { removeFavorite, getFavorites } from "../../redux/actions";
import { useState, useEffect } from "react";



    //Si isFav es true, entonces settea el estado en false, y despacha la función deleteFavorite que se recibio por props pasando el ID del personaje como argumento.
    //Si isFav es false, entonces settea ese estado en true, y despacha la función addFavorite que se recibio por props, pasando props como argumento.


function Card({ id, name, species, gender, image, onClose, myFavorites }) {
    const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch();

    const addFavorite = (character) => {
    axios
        .post("http://localhost:3001/rickandmorty/fav", character)
        .then((res) => console.log("ok"));
    };
    const removeFavorite = async (id) => {
        await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
        dispatch(getFavorites());
        alert("Successfully removed");
    };
    const handleFavorite = () => {
        if (isFav) {
        setIsFav(false);
        removeFavorite(id);
    } else {
        setIsFav(true);
        addFavorite({
        id,
        name,
        species,
        gender,
        image,
        });
    }
    };

    useEffect(() => {
    myFavorites.forEach((fav) => {
        if (fav.id === id) {
        setIsFav(true);
            }
        });
    }, [myFavorites]);
    return (
    <div className={style.container}>
        {isFav ? (
        <button onClick={handleFavorite}>😍</button>
        ) : (
        <button onClick={handleFavorite}>🤩</button>
        )}
        <button onClick={() => onClose(id)} className={style.closeButton}>X</button>
        <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
        </Link>
        <img src={image} alt="" />

        <h2>Species: {species}</h2>
        <h2>Gender: {gender}</h2>
    </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
    removeFavorite:(id) => {
        dispatch(removeFavorite(id));
    },
    };
};
const mapStateToProps = (state) => {
    return {
    myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);









// import style from "./Card.module.css";
// import {Link} from "react-router-dom";

// export default function Card ( {id,name,species,gender,image,status,onClose} ) {
//     return(
//         <div className= {style.container}>
//             <button
//             onClick={() => onClose(id)}
//             className={style.closeButton}
//             >
//                 Destroy me pls!
//             </button>
//             <Link>
//             <h2>{name}</h2>
//             </Link>
//             <img src={image} alt=""/>
//             <h2>Species: {species}</h2>
            
//             <h2>Gender: {gender}</h2>
//         </div>
//     );
// }