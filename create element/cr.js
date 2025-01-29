// const fruits = [
//     {name: 'pizza', price: '3.99$'},
//     {name: 'pizza', price: '3.99$'},
//     {name: 'pizza', price: '3.99$'},
//     {name: 'pizza', price: '3.99$'},
//     {name: 'pizza', price: '3.99$'},
// ];

// const container = document.getElementById('container');

// fruits.forEach((fruits) => {

//     const card = document.createElement('div');
//     const name = document.createElement('h1');
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     name.textContent = fruits.name, fruits.price;
//     card.style.padding = '10px';
//     deleteButton.style.transition = '0.5s all';
// deleteButton.addEventListener('click', () => {
//     card.remove();
// });
// card.appendChild(name);
// container.appendChild(card);
// card.appendChild(deleteButton);
// });

const data = [
    {name: 'abai sholy', description: 'tatatatast'},
    {name: 'aibarys', description: 'kuku kuku'},
    {name: 'nurzat', description: 'kuku kuku'},
    {name: 'myrza', description: 'kuku kuku'},
    {name: 'aian', description: 'kuku kuku'},
    {name:'shanerke', description: 'kuku kuku'},
];

const container = document.getElementById('container');
data.forEach((data) => {
    const card = document.createElement('div');
    const name = document.createElement('h1');
    const description = document.createElement('p');

    name.textContent = data.name;
    description.textContent = data.description;

    card.appendChild(name);
    container.appendChild(card);
    card.appendChild(description);
});
