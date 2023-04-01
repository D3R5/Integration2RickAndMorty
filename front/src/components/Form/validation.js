const validation = (userData, errors, setErrors) => {
    //username
    if(!userData.username)
    setErrors({...errors,username:"Complete the field"});
    else if(userData.username.length>40)
    setErrors({...errors, username:"Cannot exceed 40 characters"})
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username))
    {
        setErrors({...errors,username:"Invalid Email"});
    } else { setErrors({...errors, username:""});
    }   

    //password
    if(userData.password.length < 8 || userData.password.length > 12){
        setErrors({...errors, password:"Enter length between 6 and 12 characters"});
    } else if (!/\d/.test(userData.password)) {
        setErrors({...errors, password:"Must have at least one number"});
    } else {
        setErrors({...errors, password:""});
    }
};

export default validation;