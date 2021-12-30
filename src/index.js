import React from 'react'
import ReactDOM from 'react-dom'
import Popup from 'react-popup'
// import { MainDash, PartiesDash, FoodMenuDash, Merch } from './components/content/main'
import { Footer } from './components/content/main'
import { TopMenuBar, LinkList, TopNavBar, linkProps } from './components/topBar/main'
import ReactRoutes from './components/reactRoutes'
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

if (document.getElementById('app')) {
    ReactDOM.render(
        <ReactRoutes/>,
        document.getElementById('app')
    )
}

if (document.getElementById('popupContainer')) {
    ReactDOM.render(
        <Popup/>,
        document.getElementById('popupContainer')
    )
}

// if (document.getElementById('loginForm')) {
//     const title = "Beantown Management"
//     ReactDOM.render(
//         <LoginForm title={title} />,
//         document.getElementById('loginForm')
//     )
// }
//
// if (document.getElementById('foodDash')) {
//     ReactDOM.render(
//         <BeantownFoodMenuDash/>,
//         document.getElementById('foodDash')
//     )
// }
//
// if (document.getElementById('dashboard')) {
//     ReactDOM.render(
//         <MainDash/>,
//         document.getElementById('dashboard')
//     )
// }
