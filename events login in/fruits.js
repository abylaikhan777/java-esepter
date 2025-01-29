const fruitSelect = document.querySelector('#fruits');
const selectedValue = document.querySelector('#selectedValue');

fruitSelect.addEventListener('change', () => {
    selectedValue.textContent = fruitSelect.value;
});