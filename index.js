const submit = document.querySelector('#btn-submit');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const rating = document.querySelector('#rating');
const rateBtns = document.querySelectorAll('.rate-btn');

// Handle submit button 
submit.addEventListener('click', function(){
    cardFront.style.display = "none";
    cardBack.style.display = "block";
});

// Handle updating the score based on what the user selected
rateBtns.forEach((btn) =>{
    btn.addEventListener('click', function(){
        const user_rate = btn.innerHTML;
        rating.innerHTML = `You selected ${user_rate} out of 5`;
    });
});