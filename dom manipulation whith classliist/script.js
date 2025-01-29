// const mybutton = document.querySelector('#mybutton');

// mybutton.addEventListener('click', () => {
//    mybutton.classList.add('highlight');
// });

// mybutton.addEventListener('dblclick', () => {
//     mybutton.classList.remove('highlight');
// });

// const description = document.querySelector('#description');
// const bbutton = document.querySelector('#mybutton');

// button.addEventListener('click', () => {
//     description.classList.toggle('hide');
// });

// const like = document.querySelector('.like');
// like.addEventListener('click', () => {
//     like.classList.toggle('clicked');
// })

// const svg = document.querySelector('#svg');

// svg.addEventListener('click', () => {
//     svg.classList.toggle('clickedd');
// }); 


const button = document.querySelector('#button');
const body = document.querySelector('#body');

button.addEventListener('click', () => {
    body.classList.toggle('body');
});