const nameField = document.querySelector('#name')
const helper = document.querySelector('#helper')

nameField.addEventListener('focus', () => {
    helper.textContent = 'Please enter your name'
    helper.style.transition =  ' 0.5s all ';
});      

nameField.addEventListener('blur', () => {
    helper.textContent = '';
});

nameField.addEventListener('input', () => {
    if (nameField.value.length > 4) {
        helper.style.color = 'red';
        helper.textContent = 'weak';    
    } else if (nameField.value.length >= 6 && nameField.value.length < 15) {
        helper.style.color = 'orange';
        helper.textContent ='medium';
    } else if (nameField.value.length >= 15 && nameField.value.length < 20) {
        helper.style.color = 'green';
        helper.textContent ='very good';
    }
    
});