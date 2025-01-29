const errorMessage = document.querySelector('#errorMessage');
const requestForm = document.querySelector('#requestForm');

requestForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameValue = document.querySelector('#name').value;
    const phoneValue = document.querySelector('#phone').value;
    const problemValue = document.querySelector('#problem').value;

    if (nameValue === ''){
        errorMessage.style.top = '50px';
        errorMessage.textContent = 'Please enter your name';
        nameValue.style.borderColor = 'red';
    } else if (phoneValue === ''){
        errorMessage.style.top = '50px';
        errorMessage.textContent = 'Please enter your name';
    } else if (problemValue === ''){
        errorMessage.style.top = '50px';
        errorMessage.textContent = 'proplem tanda';
        
    } else {
        errorMessage.style.background = 'green';
        errorMessage.textContent = 'all is true';
        nameValue.style.top = '50px';
    } 
})
const arrowUp = document.querySelector('#arrowUp');
 window.addEventListener('scroll', () => {
    if (window.scrollY> 600) {
        arrowUp.style.display = 'block';
    } else {
        arrowUp.style.display = 'none';
    }
});

const tipoheader = document.querySelector('#header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        tipoheader.style.width = '100vw';
        tipoheader.style.transition = '0.5s all';
        tipoheader.style.left = '0'
        tipoheader.style.borderRadius = '0';
    } else {
        tipoheader.style.width = '500px';
        tipoheader.style.left = '325px';
        tipoheader.style.borderRadius = '20%';
    }
})