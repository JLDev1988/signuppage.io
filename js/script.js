/*declaration*/
const formBox = document.getElementById("form-box");
const emailInfo = document.getElementById("email-info");
const email = document.getElementById("email");
const myForm = document.getElementById("form");
const emailLabel = document.getElementById("email-label");
const svgImage = document.getElementById("img");
const popupMessage = document.getElementById("popup-message");
const Button = document.getElementById("custom-button2");
const form = myForm.parentElement;

let formWidth = window.innerWidth;

/*function*/
const customerEmail = (email) => {
  const emailRegExp = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  return emailRegExp.test(email);
}

const signupImages = () => {
  if (formWidth >= 1440) {
    svgImage.src = "./assets/images/illustration-sign-up-desktop.svg";
    svgImage.style.formWidth = "350px"
  } else {
    svgImage.src = "assets/images/illustration-sign-up-mobile.svg";
    svgImage.style.formWidth = `${formWidth}px`;
  }
}

const SuccessMessage= (email) => {
  email.value = "";
  formBox.classList.add("success-msg");
  form.classList.add("hidden");
  emailInfo.innerHTML = email;
  popupMessage.classList.remove("hidden");
}

const invalidEmail= () => {
  if (emailLabel.childNodes.length > 3) return;
  const label = document.createElement("label");
  label.classList.add("error-message");
  label.htmlFor = "input";
  label.innerHTML = "Invalid email";
  emailLabel.append(label);
  email.classList.add("error");
  email.value = "";
}

const formSubmit= (e) => {
  e.preventDefault();
  if (customerEmail(email.value)) {
    SuccessMessage(email.value);
  } else {
    invalidEmail();
  }
}

const  buttonHandler= (e) => {
  e.preventDefault();
  popupMessage.classList.add("hidden");
  formBox.classList.remove("success-msg");
  form.classList.remove("hidden");
}

myForm.addEventListener("submit", formSubmit);
Button.addEventListener("click", buttonHandler);
window.addEventListener("resize", () => {
  formWidth = window.innerWidth;
    signupImages()
})


signupImages();

email.onfocus = () => {
  const emailLabel = document.getElementById("email-label");
  emailLabel.childNodes[3].remove();
  email.classList.remove("error");
};
