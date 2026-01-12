// getting the form element
const form = document.getElementById('user-form');      
// form submit event listener
form.addEventListener('submit',(event) => {
    event.preventDefault();// prevent form submission
    // regular Expressions variable 
    nameRegExp = /^[a-z A-Z]+$/;
    numRegExp = /^\d{10}$/;
    emailRegExp = /^[a-zA-Z0-9]+@gmail\.com/;
    // getting form values
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let number = document.getElementById('number');

    if(nameRegExp.test(name.value)== false){
        alert('Enter your name correctly');
    }
    if(emailRegExp.test(email.value)== false){
        alert('Enter your Email correctly');
    }
    if(numRegExp.test(number.value)== false){
        alert('Enter your number correctly');
    }
    if(nameRegExp.test(name.value)== true && emailRegExp.test(email.value)==true && numRegExp.test(number.value)== true){
        alert('form submited');
    }
}); 
const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const maxChars = 200;

// Initial counter display
counter.textContent = `0 / ${maxChars} characters`;

textarea.addEventListener("input", () => {
let typedChars = textarea.value.length;

// If user exceeds the limit
if (typedChars > maxChars) {
    textarea.value = textarea.value.slice(0, maxChars);
    typedChars = maxChars;
    counter.textContent = `⚠ ${typedChars} / ${maxChars} characters (Limit reached)`;
    counter.style.color = "red";
} else {
    counter.textContent = `${typedChars} / ${maxChars} characters`;
    counter.style.color = "#333";
  }
});



