import React from 'react'
import ReactDOM from 'react-dom'
import { LoginForm } from './components/login/main'
import { MainDash, PartiesDash, FoodMenuDash, Merch } from './components/content/main'
import { Footer } from './components/content/common'
import { TopMenuBar, LinkList, TopNavBar, linkProps } from './components/topBar/main'
const config = require('./config.json')
const pages = config.beantown.pages
const staticURL = config.beantown.static_url

function topMenu() {
    return (
        <div >
            <img src={staticURL + "/img/logos/beantown_script_logo.svg"}  alt="beantown pub logo" />
        </div>
    )
}

function navBar() {
    return (
        <TopNavBar
            fontColor='#fcba03'
            hoverColor='white'
            props={linkProps(pages, 'top_menu')}
        />
    )
}

const menuList = <LinkList props={linkProps(pages, 'menu_list')} />

function navBarLogo() {
    var imgStyles = {position: 'absolute', padding: '.25em'}
    return (
        <a href="/">
            <img style={imgStyles} src={staticURL + "/img/logos/beantown.svg"}  alt="beantown pub logo" />
        </a>
    );
}

ReactDOM.render(
    <TopMenuBar
        bottomMenu=''
        fontColor='#fcebbb'
        navBarLogo={navBarLogo()}
        topMenu={topMenu()}
        menuList={menuList}
        navBar={navBar()}
        barColor='black'
        menuColor='#494040' />,
    document.getElementById('topBar')
)

ReactDOM.render(
    <Footer/>,
    document.getElementById('footer')
)

if (document.getElementById('loginForm')) {
    const title = "Beantown Management"
    ReactDOM.render(
        <LoginForm title={title} />,
        document.getElementById('loginForm')
    )
}

if (document.getElementById('partiesDash')) {
    ReactDOM.render(
        <PartiesDash/>,
        document.getElementById('partiesDash')
    )
}

if (document.getElementById('foodDash')) {
    ReactDOM.render(
        <FoodMenuDash/>,
        document.getElementById('foodDash')
    )
}

if (document.getElementById('dashboard')) {
    ReactDOM.render(
        <MainDash/>,
        document.getElementById('dashboard')
    )
}

if (document.getElementById('merch')) {
    ReactDOM.render(
        <Merch/>,
        document.getElementById('merch')
    )
}
