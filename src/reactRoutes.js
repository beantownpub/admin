import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { BeantownDash, MainDash, TheHubPubDash } from './components/content/main'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainDash />
                </Route>
                <Route path="/dashboards/thehubpub">
                    <TheHubPubDash />
                </Route>
            </Switch>
        </Router>
    )
}