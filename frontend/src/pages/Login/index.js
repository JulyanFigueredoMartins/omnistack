import React, { useState } from 'react';
import api from '../../services/api'; 

export default function Login({ history }) {
    const [email, setEmail] = useState('');//retorna um bvetor,aplicar desestruturação. 
  //setEmail é a funcao para alterar valor 
  //email recebe o valor de email passado para a funcao setEmail no evento onChange

  async function handleSubmit(event){
    event.preventDefault();
    
    const response = await api.post('/sessions',{email});

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');

  }
    return (
        <>
        <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>

        <form onSubmit={handleSubmit}>
            <label html="email">E-MAIL *</label>
            <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail" 
            onChange={event => setEmail(event.target.value)}//event.target.value é o valor do input
            />

            <button className="btn" type="submit">Entrar</button>

        </form>
        </>
    )
}