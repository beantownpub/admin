import React from 'react';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faShoppingCart,
    faCartPlus,
    faCashRegister,
    faCoffee,
    faCouch,
    faPen,
    faPaintBrush,
    faComment,
    faInfo,
    faCocktail,
    faHome,
    faCamera,
    faEnvelope,
    faCalendar,
    faBeer,
    faUtensils,
    faTshirt,
    faGift,
    faHatCowboy,
    faLock
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function getIcon(icon) {
    let icons = {
        "faBeer": faBeer,
        "faShoppingCart": faShoppingCart,
        "faCashRegister": faCashRegister,
        "faCartPlus": faCartPlus,
        "faCocktail": faCocktail,
        "faCouch": faCouch,
        "faPen": faPen,
        "faPaintBrush": faPaintBrush,
        "faComment": faComment,
        "faInfo": faInfo,
        "faUtensils": faUtensils,
        "faCamera": faCamera,
        "faHome": faHome,
        "faEnvelope": faEnvelope,
        "faCalendar": faCalendar,
        "faFacebook": faFacebook,
        "faInstagram": faInstagram,
        "faTwitter": faTwitter,
        "faLinkedin": faLinkedin,
        "faCoffee": faCoffee,
        "faGithub": faGithub,
        "faTshirt": faTshirt,
        "faGift": faGift,
        "faHatCowboy": faHatCowboy,
        "faLock": faLock
    }
    let Icon = icons[icon]
    return Icon
}

export const SocialIcon = (props) => {
    return (
        <FontAwesomeIcon icon={getIcon(props.iconName)} style={props.style} fixedWidth />
    )
}

export default class MenuIcon extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <FontAwesomeIcon icon={this.props.name} style={this.props.style} fixedWidth />
		)
    }
}
