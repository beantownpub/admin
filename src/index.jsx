import React from 'react'
import ReactDOM from 'react-dom'
import SportsWidget from './components/SportsWidget'
import { StyledHead } from './components/Styles'
import { TopMenuBar, LinkList, TopNavBar, linkProps } from './components/TopBar'
const config = require('./config.json')
const pages = config.jalgraves.pages
const topBarMenu = document.getElementById('topBar')
const bruinsWidget = document.getElementById('bruinsWidget')

function topMenu() {
    return (
        <div >
            <StyledHead>jal</StyledHead>
            <StyledHead>gra</StyledHead>
            <StyledHead>ves</StyledHead>
        </div>
    )
}

function navBar() {
    return (
        <TopNavBar
            fontColor="rgb(252, 204, 18)"
            hoverColor="white"
            props={linkProps(pages, 'top_menu')}
        />
    )
}

// function menuList() {
//     return (
//         <LinkList
//             props={linkProps(pages, 'menu_list')}
//         />
//     )
// }

const menuList = <LinkList props={linkProps(pages, 'menu_list')} />

ReactDOM.render(
    <TopMenuBar
        bottomMenu=""
        topMenu={topMenu()}
        menuList={menuList}
        navBar={navBar()}
        barColor="white"
        menuColor="#494040" />,
    topBarMenu
)

if (bruinsWidget) {
    ReactDOM.render(
        <SportsWidget team = 'bruins' /> ,
        bruinsWidget
    )
}