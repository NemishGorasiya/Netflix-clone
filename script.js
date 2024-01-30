let hidden = document.querySelectorAll(".hidden")
let buttons = document.querySelectorAll(".fa-plus");



let eye_btn = document.getElementById("eye-btn");
let password = document.getElementById("signin-password");
eye_btn.addEventListener("click",()=>{
    eye_btn.classList.toggle("fa-eye-slash");
    eye_btn.classList.toggle("fa-eye");
    if (password.type === "password") {
        password.type = "text";
    }else {
        password.type = "password";
    }
})


buttons.forEach((ele,index) => {
    ele.addEventListener("click",()=>{ 
        if(ele.classList.contains("fa-close")){
            ele.classList.remove("fa-close");
            hidden[index].style.display = "none";
            return;
        }
        buttons.forEach((e)=>{
            e.classList.remove("fa-close");
        })
        hidden.forEach((ele)=>{
            ele.style.display = "none";
        })
        hidden[index].style.display = "block";
        buttons[index].classList.add("fa-close");
    })
});

let signin_email = document.getElementById("signin-email");
let signin_password = document.getElementById("signin-password");
let email_error = document.getElementById("email-error");
let password_error = document.getElementById("password-error");

signin_email.addEventListener("input",()=>{
    console.log(ValidateEmail(signin_email.value));
    if (!ValidateEmail(signin_email.value)) {
        email_error.style.display = "block";
    }else {
        email_error.style.display = "none";
    }
})
signin_password.addEventListener("input",()=>{
    console.log(ValidatePassword(signin_password.value));
    if(!ValidatePassword(signin_password.value)){
        password_error.style.display = "block";
    }else {
        password_error.style.display = "none";
    }
})


















function ValidateEmail(input) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (input.match(emailRegex)) {
      return true;
    } else {
      return false;
    }
}
function ValidatePassword(input) {
    if(input.length>=4 && input.length<=60) {
        return true;
    }else{
        return false;
}
}