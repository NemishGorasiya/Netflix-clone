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
    // console.log(ValidateEmail(signin_email.value));
    if (!ValidateEmail(signin_email.value)) {
        signin_email.style.outline = "2px solid red";
        signin_email.style.border = "none";
        email_error.style.display = "block";
    }else {
        email_error.style.display = "none";
        signin_email.style.border = "1px solid rgba(255 , 255, 255, 0.5)";
        signin_email.style.outline = "none";
    }
})
signin_password.addEventListener("input",()=>{
    // console.log(ValidatePassword(signin_password.value));
    if(!ValidatePassword(signin_password.value)){
        signin_password.style.outline = "2px solid red";
        signin_password.style.border = "none";
        password_error.style.display = "block";
    }else {
        password_error.style.display = "none";
        signin_password.style.border = "1px solid rgba(255 , 255, 255, 0.5)";
        signin_password.style.outline = "none";
    }
})

function ValidateEmail(input) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const mobileRegex = /^[0-9]{10}$/;
    if (input.match(emailRegex) || input.match(mobileRegex)) {
      return true;
    } else {
      return false;
    }
}
function ValidatePassword(input) {
    // Use a combo of uppercase letters, lowercase letters, numbers, and even some special characters (!, @, $, %, ^, &, *, +, #) in ALL passwords.
    let lower = false,upper = false,special=false,number=false;
    if (input.length < 8) {
        return false;
    }
    for(x of input){
        // console.log(x);
        if(x >= 'a' && x<='z'){
            lower = true;
        }else if(x >= 'A' && x<='Z'){
            upper = true;
        }else if(x >= 0 && x<=9){
            number = true;
        }else if(x === '!' || x === '@' || x === '$' || x === '%' || x === '^' || x === '&' || x === '*' || x === '+' || x === '#'){
            special = true;
        }
        if(lower && upper && number && special){
            return true;
        }
    }
    return false;
    // if(input.length>=4 && input.length<=60) {
    //     return true;
    // }else{
    //     return false;
    // }
}