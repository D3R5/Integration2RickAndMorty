import React from "react";
import {Link} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css";

class Nav extends React.Component {
    constructor (props) {
        super (props);
    }
    

    render (){
        return(
            <div>
                <SearchBar onSearch={this.props.onSearch}/>
                <Link to="/home">
                    <h3 className={style.info}>HOME</h3>
                </Link>
                <Link to="/about">
                    <h3 className={style.info}>ABOUT</h3>
                </Link>
                <Link to="/favorites">
                    <h3>FAVORITES</h3>
                </Link>
            </div>
        );
    }
};

export default Nav;


