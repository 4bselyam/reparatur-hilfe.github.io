const firstButton = $('#1')
const secondButton = $('#2')
const thirdButton = $('#3')

firstButton.click(function (e) {
    e.preventDefault()

    firstButton.toggleClass('active')

    if(firstButton.hasClass('active')) {
        secondButton.removeClass('active')
        thirdButton.removeClass('active')
    }
})

secondButton.click(function (e) {
    e.preventDefault()

    secondButton.toggleClass('active')

    if(secondButton.hasClass('active')) {
        firstButton.removeClass('active')
        thirdButton.removeClass('active')
    }
})

thirdButton.click(function (e) {
    e.preventDefault()

    thirdButton.toggleClass('active')

    if(thirdButton.hasClass('active')) {
        firstButton.removeClass('active')
        secondButton.removeClass('active')
    }
})

function removeClasses() {
    firstButton.removeClass('active')
    secondButton.removeClass('active')
    thirdButton.removeClass('active')
}

// ======================================

// $(window).resize(function (e) {
//     if(e.target.innerWidth <= 1100) {
//         $('.card-photo img').attr('width', '250')
//     } else if (e.target.innerWidth <= 850) {
//         $('.card-photo img').attr('width', '200')
//     } else {
//         $('.card-photo img').attr('width', '300') 
//     }

//     if (e.target.innerWidth <= 768) {
//         $('.main-logo img[src="img/logo.png"]').attr('height', '200')
//     } 
// })