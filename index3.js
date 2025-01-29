// const header = document.getElementById('header');
// console.log(header.textContent);
// header.textContent = 'Updated Header';

//const items = document.getElementsByClassName('item');
//console.log(items[0].textContent);

//for (let index = 0; index < items.length; index++) {
//    console.log(items[index].textContent);
    
//}

// const header = document.querySelector('#header');
// console.log(header.textContent);
// const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item.textContent));

const header = document.querySelector('#header');
header.textContent = 'Updated Header';

const items = document.querySelectorAll('.item');

items[0].textContent = 'Updated Items';
items[1].textContent = 'Updated Items';
items[2].textContent = 'Updated Items';
items[3].textContent = 'Updated Items';

const example = document.querySelector('.example');
console.log(example.innerHTML);

example.innerHTML = '<h2>Updated Example</h2>';
