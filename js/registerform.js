var regText = /^[a-zA-Z\-]+$/;
 
function validateName() {
  let firstName = document.getElementById("firstname").value;
  let nameValid = document.querySelector("#invalidName");
  if(!regText.test(firstName)){
    nameValid.innerText = "Please, use only letters"; 
    document.getElementById("firstName").focus();
    return false;
  }else{
    // nameValid = "";
    return true;
  }
}
function validateLastName(){
  let lastName = document.getElementById("lastname").value;
  let nameValid = document.querySelector("#invalidLastName");
  if(!regText.test(lastName)){
    nameValid.innerText = "Please, use only letters"; 
    document.getElementById("lastName").focus();
    return false;
  }else{
    // nameValid = "";
    return true;
  }
}
function validatePhone(){
  var regexNumber = /[0-9]|\./;
  let phone = document.getElementById("phone").value;
  let phoneValid = document.querySelector("#invalidPhone");
  if(!regexNumber.test(phone)){
    phoneValid.innerText = "Please, use only digits"; 
    document.getElementById("phone").focus();
    return false;
  } else{
    // phoneValid = "";
    return true;
  }
}
// function validateEmail(){
//   var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   var regexEmail1 = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
//   let email = document.getElementById("email").value;
//   let emailValid = document.querySelector("#invalidEmail");
//   if(email.match(regexEmail)){
//    return true;
//   } else{
//     emailValid.innerText = "Please, enter your email correctly"; 
//     document.getElementById("email").focus();
//     return false;
//   }
// }
function validateFormAll() 
{
var validateFlag = true; 
for (var i=0; i<3; i++) 
{
var countElem = document.loginForm.elements[i];
if (countElem.value == '') 
{ 
var validateFlag = false; 
alert('Please, fill out all fields!');
break; 
}
}
if (validateFlag) 
alert('Thank you for registration!')
return validateFlag;
}
function validate() {
    let password = document.querySelector("#pass1");
    let upper = document.querySelector("#upper");
    let lower = document.querySelector("#lower");
    let symbol = document.querySelector("#symbol");
    let number = document.querySelector("#number");
    let length = document.querySelector("#length");
  

    if (password.value.match(/[0-9]/)) {
      number.style.color = "green";
    } else {
      number.style.color = "red";
    }
  
    if (password.value.match(/[A-Z]/)) {
      upper.style.color = "green";
    } else {
      upper.style.color = "red";
    }
 
    if (password.value.match(/[a-z]/)) {
      lower.style.color = "green";
    } else {
      lower.style.color = "red";
    }
  
    if (password.value.match(/[!\@\#\$\%\^\&\,]/)) {
      symbol.style.color = "green";
    } else {
      symbol.style.color = "red";
    }
 
    if (password.value.length < 6) {
      length.style.color = "red";
    } else {
      length.style.color = "green";
    }
  }
  
  function confirmPassword() {
    let password = document.querySelector("#pass1");
    let password2 = document.querySelector("#pass2");
  
    if (password == password2) {
      document.querySelector("#upper").style.display = "none";
      document.querySelector("#lower").style.display = "none";
      document.querySelector("#symbol").style.display = "none";
      document.querySelector("#number").style.display = "none";
      document.querySelector("#length").style.display = "none";
    } else {
      document.querySelector("#upper").style.display = "block";
      document.querySelector("#lower").style.display = "block";
      document.querySelector("#symbol").style.display = "block";
      document.querySelector("#number").style.display = "block";
      document.querySelector("#length").style.display = "block";
    }
  }
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }