let navbar = document.querySelector('#navbarTogglerDemo01');

document.querySelector('.navbar-toggler').addEventListener('click', handleTogglerClick);


function handleTogglerClick()
{
    let toggled = navbar.classList.contains('show');

    if(toggled)
        navbar.classList.remove('show');
    else
        navbar.classList.add('show');
}