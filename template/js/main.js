let andi = document.querySelector('#innerButton')

document.querySelector('.sampleOfCakeHidden').addEventListener('click',expandBestSellerOrderButton)

function expandBestSellerOrderButton(){
    andi.classList.toggle('hidden')
}