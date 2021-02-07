import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import MenuIcon, { getIcon } from './icons'
import { ViewButton } from './merch/buttons'
import { StyledContactForm } from './Styles'

const config = require('../config.json')
// const apiUrl = process.env.CONTACT_API_URL || config.beantown.urls.contactApi
const apiUrl = 'https://contact-api.dev.jalgraves.com/v1/contact/beantown'
const contactReply = 'Request Received! We will respond to you as soon as we can. Thanks!'

export const ContactForm = () => {
    const [reply, setReply] = useState('')
    const { handleSubmit, register, errors, reset } = useForm()
    const heads = {
        'Content-Type': 'application/json',
        'X-JAL-Comp': 'ContactForm'
    }
    const onSubmit = (values, e) => {
        fetch(apiUrl, {method: 'POST', credentials: 'include', body: JSON.stringify(values), headers: heads})
            .then(response => response.json())
            .then(data => setReply(data.msg))
            .catch(error => console.log(error))
        e.target.reset()
    }

    return (
        <StyledContactForm>
            {reply &&
                <p>{reply}</p>}
            {reply != contactReply &&
                <div>
                <h2>
                    <MenuIcon
                        style={{fontSize: '.85rem', margin: 'auto'}}
                        name={getIcon('faEnvelope')}
                    /> Request Info
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name="name"
                        placeholder='Name'
                        ref={register({ required: 'Required'})}
                    />
                    <h3>{errors.name && errors.name.message}</h3>
                    <input
                        name="email"
                        placeholder='Email'
                        ref={register({
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"
                        }
                        })}
                    />
                    <h3>{errors.email && errors.email.message}</h3>
                    <input
                        name="phone"
                        placeholder='Phone'
                        ref={register({ required: 'Required'})}
                    />
                    <h3>{errors.phone && errors.phone.message}</h3>
                    <textarea
                        name='details'
                        rows='6'
                        columns='50'
                        ref={register({ required: 'Required'})}
                    ></textarea>
                    <h3>{errors.details && errors.details.message}</h3>
                    <ViewButton borderColor='#e2e2e2' text='Submit' />
                </form>
            </div>}
        </StyledContactForm>
    )
}