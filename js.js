// const product = {
//     imgurl: 'https://example.com/product1.jpg',
//     name: 'simson',
//     rating: 4.5,
//     price: 19.99,
//     lastprice: function(percent){
//         return this.price - (this.price * percent )/ 100;
//     }
// }
// console.log(product.lastprice(20));


// const person = {
//     name: 'John',
//     city: 'shimkent',
//     job: 'doctor',
//     year: 2011,
//     bio: function() {
//         return `Hello, my name is ${this.name}
//         i live in ${this.city}
//         my job is ${this.job}
//         my year is ${2024 - this.year}`;
//     },
// };
// console.log(person.bio());


const myrestaurant = {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    displayItems: function() {

        return this.items.join("\n");

    }
}
console.log(myrestaurant.displayItems());