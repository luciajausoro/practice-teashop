const get = element => document.getElementById(element);

let open = get("menu");
let nav = get("nav");
let exit = get("exit");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})