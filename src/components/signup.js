import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const signup = () => {

     const [fullName, setFullName]=useState('');
     const [email, setEmail]=useState('');
     const [password, setPassword]=useState('');

     const [registerationError, setRegisterationError]=useState('');

     const handleRegister=(e)=>{
        e.preventDefault();
        console.log(fullName, email, password);
    }


    return (
        <div className='container'>
            <br></br>
            <br></br>
            <h2> S'INSCRIRE ICI</h2>
            <br></br>
            <form autoComplete="off" className='form-group'
            onSubmit={handleRegister}>
                <label>Nom et Prenom </label>
                <input type="text" className='form-control'
                    required onChange={(e)=>setFullName(e.target.value)}
                    value={fullName}
                />
                <br></br>
                <label>Email</label>
                <input type="email" className='form-control'
                    required onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
                <br></br>
                <label>Mot de passe</label>
                <input type="password" className='form-control'
                    required onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                <br></br>
                <button type="submit" className='btn btn-success mybtn2'>
                   S'INSCRIRE
                </button>
            </form>
            {registerationError&&<div className='error-msg'>
                {registerationError}
            </div>}

            <span>Vous avez déjà un compte? Connectez-vous 
            <Link to="login"> ici</Link></span>
        </div>
    )
}
