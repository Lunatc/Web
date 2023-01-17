const emailField = document.getElementById('emailField')
const phoneNumber = document.getElementById('phoneNumber')
const zipCode = document.getElementById('zipCode')
const button = document.getElementById('button')

document.querySelectorAll('a[href^="#"]').forEach(function (element) {
    if (!element.hash) return;
    if (element.origin + element.pathname !== self.location.href) return;
  
    (function (destination) {
        console.log('teste')
      element.addEventListener(
        'click',
        function (event) {
          window.scrollTo({
            top: destination.offsetTop,
            behavior: 'smooth',
          });
          event.preventDefault();
        },
        false
      );
    })(document.querySelector(element.hash));
});

//VALIDAR FORMS
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
        VMasker(document.querySelector('#phoneNumber')).maskPattern('(99) 99999-9999');
    } else {
        window.alert("Telefone invalido")
    }

    if(validateZip(zip)){
        console.log(zip)
        VMasker(document.querySelector('#zipCode')).maskPattern('99999-999');
    } else {
        window.alert("Código postal inválido")
    }

})

function validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

function validatePhone(phone){
    const re = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
    return re.test(phone)
}

function validateZip(zip){
    const re = /^[0-9]{5}-?[0-9]{3}$/
    return re.test(zip)
}

