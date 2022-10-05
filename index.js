const submit = document.querySelector('#btn-submit');
const card_front = document.querySelector('.card-front');
const card_back = document.querySelector('.card-back');
const rating = document.querySelector('#rating');
const rate_btns = document.querySelectorAll('.rate-btn');

// Handle submit button 
submit.addEventListener('click', function(){
    card_front.style.display = "none";
    card_back.style.display = "block";
});

// Handle updating the score based on what the user selected
rate_btns.forEach((btn) =>{
    btn.addEventListener('click', function(){
        const user_rate = btn.innerHTML;
        rating.innerHTML = `You selected ${user_rate} out of 5`;
    });
});