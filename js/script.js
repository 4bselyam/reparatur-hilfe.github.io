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