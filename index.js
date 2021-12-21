const $icon = document.querySelector('.icon')
const $arrow = document.querySelector('.arrow')

$icon.onmouseover = () => {
    $arrow.animate([
        { left: '0' },
        { left: '50px' },
        { left: '0' },

    ], {
        duration: 700,
        iterations: Infinity
    });
}