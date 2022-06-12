import React, {useState} from 'react';
import Inputboxes from './Inputboxes';


const style={
    boxesContainer:{
        display:'flex',
        justifyContent:'center',
        width:'40%',
        alignContent:'center',
        flexDirection:'column',
        marginTop:'15px'
    },
    submitButton:{
        width:'100px',
        display:'flex',
        justifyContent:'center',
        marginTop:'20px',
        backgroundColor:'#F0FFF0'
    },
    submitBox:{
        display:'flex',
        justifyContent:'center',
    }
}

const Form = (props) => {

    const[firstName,setFirstName] = useState('')
    const[firstNameError, setFirstNameError] = useState('')
    const[lastName,setLastName] = useState('')
    const[lastNameError, setLastNameError] = useState('')
    const[eMail,setEmail] = useState('')
    const[eMailError, setEmailError] = useState('')
    const[password,setPassword] = useState('')
    const[passwordError, setPasswordError] = useState('')
    const[secondPassword,setSecondPassword] = useState('')
    const[secondPasswordError, setSecondPasswordError] = useState('')

    const firstNameHandler=(e)=>{
        setFirstName(e.target.value)
    }
    const lastNameHandler =(e)=>{
        setLastName(e.target.value)
    }
    const eMailHandler =(e)=>{
        setEmail(e.target.value)
    }
    const passwordHandler =(e)=>{
        setPassword(e.target.value)
    }
    const secondPasswordHandler =(e)=>{
        setSecondPassword(e.target.value)
    }
    const handlerSubmit= (e) =>{
        if(firstName.length<2){
            setFirstNameError('El campo debe tener al menos 2 Caracteres!')
        }else{
            setFirstNameError('')
        }
        if(lastName.length < 2){
            setLastNameError('El campo debe tener al menos 2 Caracteres!')
        }else{
            setLastNameError('')
        }
        if(eMail.length<5){
            setEmailError('El campo debe tener al menos 5 Caracteres!')
        }else{
            setEmailError('')
        }
        if(password.length<1){
            setPasswordError('El campo no puede estar vacio!')
        }else if(password.length<8){
            setPasswordError('El campo debe tener al menos 8 Caracteres!')
        }else{
            setPasswordError('')
        }
        if(secondPassword.length<1){
            setSecondPasswordError('El campo no puede estar vacio!')
        }else if(password.length<8){
            setSecondPasswordError('El campo debe tener al menos 8 Caracteres!')
        }else{
            if(password!==secondPassword){
                setSecondPasswordError('Las contraseñas deben coincidir!')
            }else{
                setSecondPasswordError('')
            }
        }
        e.preventDefault()
    }


        return (
            <form  style={style.boxesContainer} onSubmit={handlerSubmit}>
                <div >
                    <Inputboxes value={'First Name'} name={firstName} onValueChange={firstNameHandler} shown={'!'} errorMsg={firstNameError} />
                    <Inputboxes value={'Last Name'} name={lastName} onValueChange={lastNameHandler} shown={'!'} errorMsg={lastNameError}/>
                    <Inputboxes value={'E-Mail'} name={eMail} onValueChange={eMailHandler} shown={'!'} email={'!'} errorMsg={eMailError}/>
                    <Inputboxes value={'Password'} name={password} onValueChange={passwordHandler} errorMsg={passwordError}/>
                    <Inputboxes value={'Confirm Password'} name={secondPassword} onValueChange={secondPasswordHandler} errorMsg={secondPasswordError}/>
                </div>
                <div style={style.submitBox}>
                    <input type="submit" value="submit" style={style.submitButton}/>
                </div>
            </form>
        );
}

export default Form;

