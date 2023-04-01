import React from "react";
import style from "./About.module.css";


class About extends React.Component {
    constructor(props) {
        super (props);
    }
    render () {
        return(
            <>
            <h1 className={style.word}>Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous adventures across the universe. Rick Sanchez is living with his daughter Beth’s family and constantly bringing her, his son-in-law Jerry, granddaughter Summer, and grandson Morty into intergalactic escapades. 
            <br />
            <br />
            Rick and Morty stars Justin Roiland (Adventure Time), Sarah Chalke (Scrubs), Chris Parnell (Saturday Night Live), and Spencer Grammer (Greek). The series is created by Dan Harmon (Community) and Roiland, who also serve as executive producers.  
            <br />
            <br />
            Rick and Morty season 4 premieres this November on Adult Swim.</h1>
            </>
        );
    }
}

export default About;