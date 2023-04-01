import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        username:"",
        password:"",
    });

    const [errors, setErrors] = useState ({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({...userData,[property]:value});
        validation({...userData,[property]:value, errors, setErrors})
    };

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    };

    return(
        <form className={style.text} onSubmit={submitHandler}>
            <div className={style.login}>
                <label htmlFor="username" className={style.word} >Username:</label>
                <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                />
                <p>{errors.username}</p>
            </div>
            <div className={style.login}>
                <label htmlFor="password" className={style.word}>Password:</label>
                <input
                type="text"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                />
            </div>
            <button type="submit">LOGIN</button>
        </form>
    );
};


export default Form;