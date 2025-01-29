
const cards = document.querySelectorAll('.card');
let flippedCards = []                                                                                                                                                                                                                                                                                                                        
cards.forEach(card => {
     card.addEventListener('click', (e) => {
        card.classList.add('flipped');
     });
});