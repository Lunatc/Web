const emailField = document.getElementById('emailField')
const phoneNumber = document.getElementById('phoneNumber')
const zipCode = document.getElementById('zipCode')
const button = document.getElementById('button')


button.addEventListener('click', function (){
    const email = emailField.value
    const phone = phoneNumber.value
    const zip = zipCode.value

    if(validateEmail(email)){
        console.log(email)
    } else {
        window.alert("Email invalido")
    }

    if(validatePhone(phone)){
        console.log(phone)
    } else {
        window.alert("Telefone invalido")
    }

    if(validateZip(zip)){
        console.log(zip)
    } else {
        window.alert("Código postal inválido")
    }

})

/function validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

function validatePhone(phone){
    const re = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
    return re.test(phone)
}

function validateZip(zip){
    const re = /^[0-9]{5}-[0-9]{3}$/
    return re.test(zip)
}
