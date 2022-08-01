const body = document.querySelector("body");
const darkmode = document.querySelector("#darkmode");
const lightmode = document.querySelector("#lightmode");

function setDarkMode() {
body.style.background = "#702283";   
}
function setLightMode() {
body.style.background = "#fdffab";
}

darkmode.addEventListener("click", setDarkMode);
lightmode.addEventListener("click", setLightMode);

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
alert('Welcome')
return validateFlag;
}
var regText = /^[a-zA-Z\-]+$/;
 
function validateName() {
  let firstName = document.getElementById("firstname").value;
  let nameValid = document.querySelector("#invalidName");
  if(!regText.test(firstName)){
    nameValid.innerText = "Please, use only letters"; 
    document.getElementById("firstName").focus();
    return false;
  }else{
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
    return true;
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