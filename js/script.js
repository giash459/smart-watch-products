const ringButtons = document.querySelectorAll(".ring-button");
// console.log(ringButtons);
for(let i = 0 ; i < ringButtons.length ; i++){
    const ringBtn = ringButtons[i];
    // console.log(ringBtn);
    ringBtn.addEventListener('click', function(e){
        // console.log(e)
        // console.log(typeof e)
        // console.log(e.target)

        // purple add korar agee sob goloke check kore purple thakle remove kore dibo ebong anno ekta border add kore dibo
        for(let j = 0 ; j < ringButtons.length ; j++){
            ringButtons[j].classList.remove('border-purple-500');
            ringButtons[j].classList.add('border-gray-300')
        }

        // color add 
        e.target.classList.add('border-purple-500');
        e.target.classList.remove('border-gray-300');

        const productImage = document.getElementById('product-image');
        productImage.src = '../images/teal.png'
    })
}