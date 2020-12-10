let name = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
// let name = document.getElementById("firstname");
// let name = document.getElementsByClassName("firstname");
let nameResult = document.querySelector(".nameResult");
let lastNameResult = document.querySelector("#lastNameResult");
let emailResult = document.querySelector("#emailResult");
let subjectResult = document.querySelector("#subjectResult");

let email = document.querySelector('#email');
let subject = document.querySelector('#subject');
const submitForm = document.querySelector(".submitButton");
submitForm.addEventListener("click", validate);

let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validate() {
  let valid;
  console.log(name.value);
  console.log(lastname.value);
  console.log(email.value);
  console.log(subject.value);
  if (name.value === null || name.value === "") {
    nameResult.textContent = "first name cannot be empty";
    nameResult.style.color = "red";
    valid = false;
  }
  else {
      if(name.value.length < 6 ) {
        nameResult.textContent = "first name should be atleast 6 characters";
        nameResult.style.color = "red";
      }
      else {
        nameResult.textContent = "";
      }
  }
  if (lastname.value === null || lastname.value === "") {
    lastNameResult.textContent = "last name cannot be empty";
    lastNameResult.style.color = "red";
    valid = false;
  }
  else {
    if(lastname.value.length < 6 ) {
        lastNameResult.textContent = "last name should be atleast 6 characters";
        lastNameResult.style.color = "red";
        // valid = false;
      }
      else {
        lastNameResult.textContent = "";
    }
  }
  if(email.value === null || email.value === "") {
    emailResult.textContent = "email cannot be empty";
    emailResult.style.color = "red";
    valid = false;
  }  
  else {
      if(emailRegex.test(email.value)) {
        emailResult.textContent = "";
      }
      else {
        emailResult.textContent = "you have entered an invalid email-id";
        emailResult.style.color = "red";
      }
  }
  if(subject.value === null || subject.value === "") {
      subjectResult.textContent = "subject cannot be empty";
      subjectResult.style.color = "red";
  }
  else {
      if(subject.value.length <= 50) {
        subjectResult.textContent = "subject must be atleast 50 characters long";
        subjectResult.style.color = "red";
      }
      else {
        subjectResult.textContent = "";
      }
  }
  return valid;
}
