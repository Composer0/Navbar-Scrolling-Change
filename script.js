const nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)
// window is the viewing window of content. fixNav is the function that is being called with this event listner.

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
    // console.log(window.scrollY, nav.offsetHeight) used to help determine a point you want to use to change the active navbar.
}