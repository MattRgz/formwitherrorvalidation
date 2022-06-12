import React from 'react';

const style={
    boxes:{
        display:'flex',
        justifyContent:'center',
        marginTop:'15px',
        padding:'10px',
        backgroundColor:'lightblue',
        borderRadius:'12px',
        boxShadow:'2px 2px 5px 1px grey'
    },
    inputBoxes:{
        borderRadius:'7px',
        width:'100%',
        display:'flex',
        justifyContent:'center'
    },
    labelBoxes:{
        display:'flex',
        width:'30%',
        justifyContent:'center',
    },
    inputContainer:{
        display:'flex',
        width:'30%',
        justifyContent:'start',
    },
    errorContainer:{
        backgroundColor:'rgb(205, 92, 92, 0.7)',
        margin:'5px',
        fontSize:'0.8em',
        dispaly:'flex',
        textAlign:'center',
        width:'40%',
        borderRadius:'15px',

    }
}
const Inputboxes = ({value,name,onValueChange,shown,errorMsg,email}) => {
    return (
        <div style={style.boxes}> 
            <div style={style.labelBoxes} >
                {value}
            </div>
            <div style={style.inputContainer}>
                <input type={shown?email?'email':'text':'password'} id='input' onChange={onValueChange} name={name} style={style.inputBoxes}/>
            </div>
            {
                    errorMsg ?
                    <div style={style.errorContainer}>
                        {errorMsg}
                    </div> :
                    ''
                }
            
        </div>
    );
}

export default Inputboxes;
