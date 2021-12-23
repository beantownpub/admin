import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { BeantownHomeDash, BeantownFoodMenuDash } from './content/beantown'
import { HubPubHomeDash, HubPubFoodMenuDash } from './content/theHubPub'
import { LoginForm } from './login/main'

export default function ReactRoutes() {
    console.log('WTF Routes')
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm/>} />
                <Route path="login" element={<LoginForm/>} />
                <Route path="beantown" element={<BeantownHomeDash/>} />
                <Route path="beantown/food" element={<BeantownFoodMenuDash/>} />
                <Route path="thehubpub" element={<HubPubHomeDash/>} />
                <Route path="thehubpub/food" element={<HubPubFoodMenuDash/>} />
            </Routes>
        </BrowserRouter>
    )
}