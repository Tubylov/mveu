import React from 'react';

function Login() {

    function Log(){
        const login = document.getElementById('login').value
        const password = document.getElementById('password').value
        const data = {
            login: login,
            password: password
        }
        console.log(data)

        const api = 'http://localhost:9001/login'

        fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then((result) => {
          console.log(result)
          localStorage.setItem('token', result.token)
        })

    }

  return (
    <>
        <h1>Логин</h1>
        <input id='login' type='text' placeholder='Логин' />
        <input id='password'  type='password' placeholder='Пароль' />
        <button onClick={Log}>Войти</button>
    </>
  );
}

export default Login;
