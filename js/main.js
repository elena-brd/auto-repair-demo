
const loader = document.querySelector('.loader');
const footer = document.querySelector('#main-footer')
const header = document.querySelector('#main-header');

function loading() {
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.display = 'none';

        header.style.display = 'block'
        footer.style.display = 'block'
        setTimeout(() => header.style.opacity = 1, 20, footer.style.opacity = 1, 20);
    }, 4000)
}

loading();