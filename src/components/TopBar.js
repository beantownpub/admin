import React from 'react'
import { StyledCloseMenu, StyledHamburger, StyledSlideMenu, StyledTopNav, StyledNavBar, StyledLink } from './Styles'
import MenuIcon, { getIcon } from './icon'

const slide = require('./menuSlide')

export function linkProps(pages, menuType) {
    const props = []
    let id = 0
    for (const page of Object.keys(pages)) {
            if (pages[page][menuType] === true) {
                props.push({id: id, name: pages[page].name, icon: pages[page].icon, text: pages[page].text})
            }
        ++id
    }
    return props
}

const iconStyle = {
    color: '#EFD73D',
    fontSize: '1em'
}

export function LinkList(props) {
    const slider = props.props.map((prop) =>
        <StyledLink key={prop.id}>
        <a href={prop.name} className="animate">
            <MenuIcon
                name={getIcon(prop.icon)}
                style={iconStyle} /> {prop.text}</a>
        </StyledLink>
    );
    return (
        <div>{slider}</div>
    );
}

export function TopNavBar(props) {
    const navBar = props.props.map((prop) =>
        <a key={prop.id} href={prop.name}>{prop.text}</a>
    )
    return (
        <StyledTopNav hoverColor={props.hoverColor} fontColor={props.fontColor}>
            <nav className="top_nav">{navBar}</nav>
        </StyledTopNav>
    )
}

function closeButton() {
    return (
        <StyledCloseMenu>
            <button className="menu_close" id="close_menu" onClick={() => slide.menuClose()}>Close Menu</button>
        </StyledCloseMenu>
    )
}

function openButton() {
    return (
        <StyledHamburger>
            <button className="hamburger" id="open_menu" onClick={() => slide.menuOpen()}>Open Menu</button>
        </StyledHamburger>
    )
}

export class TopMenuBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <StyledNavBar barColor={this.props.barColor}>
                <StyledSlideMenu menuColor={this.props.menuColor}>
                    <div className="slide_menu">
                    {this.props.topMenu}
                        <div className="menu_list">
                            {this.props.menuList}
                        </div>
                        {closeButton()}
                        <h2>Est. 1999</h2>
                    </div>
                </StyledSlideMenu>
                {openButton()}
                {this.props.navBarLogo}
                {this.props.bottomMenu}
                {this.props.navBar}
            </StyledNavBar>
        )
    }
}