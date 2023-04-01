
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import style from './App.module.css';
import { useEffect, useState } from 'react' ;
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/About/About.jsx";
import Form from "./components/Form/Form";

function App () {

  //! HOOKS
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect (() => {
    !access  && navigate ("/");
  }, [access]);


 //! CREDENCIALES FALSAS
  const username = "ders@gmail.com";
  const password = "claveprueba321";


 //! MANEJADORES DE EVENTOS
  const onSearch = (id) => {
    const URL_BASE = "http:localhost:3001/rickandmorty/character" //"https://be-a-rym.up.railway.app/api"
    //const KEY ="216f04036b13.036a1a7847f0b793f2f5";
    if(characters.find((char) =>char.id === id)) {
      return alert("Pj repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert("Ups! Algo salió mal");
      }
    });  
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (useData) => {
    if(useData.username ===username && useData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Datos incorrectos");
    }
  };


  // ! RENDER
  return (
    
    <div className={style.background}>
      <div className={style.logo}>
      <div>
      {pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route
        path="/home"
        element = {< Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About/>}/>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailID" element={<Detail/>}/>
      </Routes>
      </div>
      </div>
    </div>
  )
}

export default App


/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> elimino esta parte para la tarea de react lifestyle*/