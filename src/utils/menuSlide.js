import anime from 'animejs';

export function menuOpen() {
    anime({
        targets: '.slide_menu',
        easing: 'easeInOutQuad',
        translateX: '25rem'
    })
    anime({
        targets: '.animate',
        easing: 'linear',
        translateX: '27rem',
        delay: 300
    })
}

export function menuClose() {
    anime({
        targets: '.slide_menu',
        easing: 'easeInOutQuad',
        translateX: '-25rem'
    })
    anime({
        targets: '.animate',
        easing: 'linear',
        translateX: '-27rem',
    })
}

export function cartOpen() {
    anime({
        targets: '.slide_cart',
        easing: 'easeInOutQuad',
        translateX: '34em'
    })
    anime({
        targets: '.animate',
        easing: 'linear',
        translateX: '26.5em',
        delay: 300
    })
    anime({
        targets: '.slide_menu',
        easing: 'easeInOutQuad',
        translateX: '-25rem'
    })
    anime({
        targets: '.animate',
        easing: 'linear',
        translateX: '-27rem',
    })
}

export function cartClose() {
    anime({
        targets: '.slide_cart',
        easing: 'easeInOutQuad',
        translateX: '-30em'
    })
    anime({
        targets: '.animate',
        easing: 'linear',
        translateX: '-30em',
    })
}