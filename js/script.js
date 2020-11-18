const numberField = $('input[name="number"]')

numberField.on('input', function(e) {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
})

$('.send').click(function(e) {
    e.preventDefault()

    var email = $.trim($('input[type="email"]').val())
    var telephone = $.trim($('input[type="text"]').val())
    var time = $.trim($('select').val())
    var message = $.trim($('textarea').val())

    if (email.length == 0) {
        alert('Enter the email')
        $('input[type="email"]').css('border-color','red')
        setInterval(function() {
            $('input[type="email"]').css('border-color','#4783C4')
        }, 2000)
    } else if (telephone.length <= 3) {
        alert('Enter the telephone number')
        $('input[type="text"]').css('border-color','red')
        setInterval(function() {
            $('input[type="text"]').css('border-color','#4783C4')
        }, 2000)
    } else if (message.length < 5) {
        alert('Enter the message')
        $('textarea').css('border-color','red')
        setInterval(function() {
            $('textarea').css('border-color','#4783C4')
        }, 2000)
    } else if (!email.includes('@')) {
        alert('Enter the valid email')
        $('input[type="email"]').css('border-color','red')
        setInterval(function() {
            $('input[type="email"]').css('border-color','#4783C4')
        }, 2000)
    } else {
        sendAjax()
    }
})

function sendAjax(number, email, message, time) {
    $.ajax({
        url: '../venv/index.php',
        type: 'POST',
        cache: false,
        data: {number, email, message, time},
        success: function() {
            alert('Your message has been delivered!')
        }
    })
}