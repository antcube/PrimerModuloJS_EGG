const parrafo = document.querySelector('.parrafo')

parrafo.addEventListener('click', () => {
    parrafo.textContent = 'Click en el párrafo'
}, true)
parrafo.addEventListener('click', () => {
    parrafo.classList.add('clickeado');
})
