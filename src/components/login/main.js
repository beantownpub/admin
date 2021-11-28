import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import MenuIcon, { getIcon } from '../content/icon'
import { SubmitButton } from '../elements/buttons/main'
import { StyledLoginContainer, StyledLoginForm, StyledLogin } from './styles'


const REQUIRED = {
    required: 'Required'
}

const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const LoginForm = (props) => {
    const [state, setState] = useState({
        showForm: true,
        loggedIn: false,
        failedLogin: false,
        username: ''
    })
    const { handleSubmit, register, errors, reset } = useForm()

    const hideForm = () => {
        setState({ showForm: false })
    }

    const toggleLogin = (user) => {
        setState({
            username: user,
            loggedIn: true
        })
    }

    const failedLogin = () => {
        setState({
            showForm: true,
            loggedIn: false,
            failedLogin: true,
            username: ''
        })
    }

    const onSubmit = values => {
        fetch('auth', {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                username: values.userName,
                password: values.passWord
            })
        })
        .catch(err => {
            alert('Network error: ' + err)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(
                errorInfo => Promise.reject(errorInfo)) //UPDATE HERE
            }
            return response //UPDATE HERE
        })
        .then(data => {
            console.log('LoginForm Status: ' + data.status)
            if (data.status === 200) {
                hideForm()
                toggleLogin(values.userName)
            } else {
                failedLogin()
            }
        })
        .catch(err => {
            console.error('WTF ' + err)
            failedLogin()
        })
    }

    return (
        <StyledLoginContainer aria-labelledby="Login container">
            <h1>{props.title}</h1>
        {state.showForm &&
        <StyledLoginForm>
            <h2>
                <MenuIcon
                    style={{fontSize: '.75rem', margin: 'auto', color: 'white'}}
                    name={getIcon('faLock')}
                /> Secure Login
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='userName' placeholder='Username' ref={register(REQUIRED)} />
                <h3>{errors.userName && errors.userName.message}</h3>
                <input name='passWord' placeholder='Password' type='password' ref={register(REQUIRED)} />
                <h3>{errors.passWord && errors.passWord.message}</h3>
                <SubmitButton borderColor='#e2e2e2' buttonText='Login' />
            </form>
            {state.failedLogin &&
                <h3>Login Failed</h3>
            }
        </StyledLoginForm>
        }
        <div>
            {state.loggedIn &&
            <StyledLogin>
            <h2>Hello {state.username}</h2>
            <a href="/dashboard">Proceed To Dashboard</a>
            </StyledLogin>
            }
        </div>
        </StyledLoginContainer>
    )
}
