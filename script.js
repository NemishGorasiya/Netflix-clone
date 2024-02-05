let hidden = document.querySelectorAll(".hidden")
let buttons = document.querySelectorAll(".fa-plus");
let sign_in_btn = document.getElementById("sign-in-btn");
let sign_up_btn = document.getElementById("sign-up-btn");
let signInForm = document.getElementById("signInHero");
let signUpForm = document.getElementById("signUpHero");
let signin_email = document.getElementById("signin-email");
let signin_password = document.getElementById("signin-password");
// let email_error = document.getElementById("email-error");
// let password_error = document.getElementById("password-error");

// let eye_btn = document.getElementById("eye-btn");
let password = document.getElementById("signin-password");

let signup_email = document.getElementById("signup-email");
let signup_password = document.getElementById("signup-password");
let signup_re_password = document.getElementById("signup-re-password");

let emails_or_numbers = document.querySelectorAll(".email-or-number");
let passwords = document.querySelectorAll(".password");
let signup_confirmed_password = document.getElementById("signup-confirmed-password");
let eye_btns = document.querySelectorAll(".eye-btn");
let error_msgs = document.querySelectorAll(".error-message");
let inputs = document.querySelectorAll("input[type=text] , input[type=password]");

let signin_btn_home = document.getElementById("signin-btn-home");
let log_out_btn = document.getElementById("log-out-btn");

document.addEventListener("DOMContentLoaded",()=>{
    if (localStorage.getItem("LoggedIn") === "true") {
       console.log("called");
       signin_btn_home.style.display = "none";
       log_out_btn.style.display = "flex";
    }
})
if(log_out_btn != null){
    log_out_btn.addEventListener("click",()=>{
        localStorage.setItem("LoggedIn","false");
        signin_btn_home.style.display = "flex";
        log_out_btn.style.display = "none";
    })
}
const moveToSignUp = (e) => {
    e.preventDefault();
    signup_email.value = "";
    signup_password.value = "";
    signup_confirmed_password.value = "";
    error_msgs.forEach((ele)=>{
        ele.style.display = "none";
    })
    inputs.forEach((ele)=>{
        ele.style.border = "1px solid rgba(255 , 255, 255, 0.5)";
        ele.style.outline = "none";
    })
    signUpForm.style.display = "flex";
    signInForm.style.display = "none";
}
const moveToSignIn = (e) => {
    e.preventDefault();
    signin_email.value = "";
    signin_password.value = "";
    error_msgs.forEach((ele)=>{
        ele.style.display = "none";
    })
    inputs.forEach((ele)=>{
        ele.style.border = "1px solid rgba(255 , 255, 255, 0.5)";
        ele.style.outline = "none";
    })
    signInForm.style.display = "flex";
    signUpForm.style.display = "none";
}

const signIn = (e) => {
    e.preventDefault();
    
    if (ValidateEmail(signin_email.value) && ValidatePassword(signin_password.value)) {
        let users = JSON.parse(localStorage.getItem("users"));
        if (users === null) {
            alert("user does not exist");
            return;
        }
        let flag = false;
        users.forEach((ele)=>{
            if(ele.email === signin_email.value){
                flag = true;
                if (ele.password === signin_password.value) {
                    alert("Login Successful");
                    signin_password.value = "";
                    signin_email.value = "";
                    localStorage.setItem("LoggedIn","true");
                    document.location.href="/";
                    return;
                }else{
                    alert("wrong password");    
                    return;
                }
            }
        })
        if(!flag){
            alert("user does not exist");
        }
    }else {
        alert("somthing is wrong");
    }

}

const signUp = (e) => {
    e.preventDefault();

    if (ValidateEmail(signup_email.value) && ValidatePassword(signup_password.value) && (signup_password.value === signup_confirmed_password.value)) {
        // alert("signUp");
        let users;
        if (localStorage.getItem("users") !== null) {
            users = JSON.parse(localStorage.getItem("users"));
            let flag = false;
            users.forEach((ele)=>{
                if(ele.email === signup_email.value){
                    flag = true;
                }
            })
            if(flag) {
               alert("user already exists with same email.");
               return;
            }
        // localStorage.setItem(signup_email.value,signup_password.value);
    } else {
        users = [];
    }
    let x = {
        email : signup_email.value,
        password : signup_password.value
    }
    users.push(x);
    localStorage.setItem("users",JSON.stringify(users));
        alert("sign up");
        console.log(users); 
        signup_email.value = "";
        signup_password.value = "";
        signup_confirmed_password.value = "";
        moveToSignIn(e);
    }else {
        alert("somthing is wrong");
    }
}

eye_btns.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        ele.classList.toggle("fa-eye-slash");
        ele.classList.toggle("fa-eye");
        if (ele.previousElementSibling.type === "password") {
            ele.previousElementSibling.type = "text";
        }else {
            ele.previousElementSibling.type = "password";
        }
    })
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

emails_or_numbers.forEach((ele)=>{
    ele.addEventListener("input",()=>{
        if (!ValidateEmail(ele.value)) {
            ele.style.outline = "2px solid red";
            ele.style.border = "none";
            ele.nextElementSibling.style.display = "block";
        }else {
            ele.nextElementSibling.style.display = "none";
            ele.style.border = "1px solid rgba(255 , 255, 255, 0.5)";
            ele.style.outline = "none";
        }
    })
})

passwords.forEach((ele)=>{
    ele.addEventListener("input",()=>{
        if(!ValidatePassword(ele.value)){
            ele.style.outline = "2px solid red";
            ele.style.border = "none";
            ele.parentElement.nextElementSibling.style.display = "block";
        }else {
            ele.parentElement.nextElementSibling.style.display = "none";
            ele.style.border = "1px solid rgba(255 , 255, 255, 0.5)";
            ele.style.outline = "none";
        }
    })
})

const confirm_password = () => {
    if (signup_confirmed_password.value === signup_password.value || signup_confirmed_password.value === "") {
        signup_confirmed_password.parentElement.nextElementSibling.style.display = "none";
        signup_confirmed_password.style.outline = "none";
        signup_confirmed_password.style.border = "1px solid rgba(255 , 255, 255, 0.5)";
    }else {
        signup_confirmed_password.parentElement.nextElementSibling.style.display = "flex";
        signup_confirmed_password.style.outline = "2px solid red";
        signup_confirmed_password.style.border = "none";
    }
}

if(signup_password != null){
    signup_password.addEventListener("input",confirm_password);
}
if(signup_confirmed_password != null){
    signup_confirmed_password.addEventListener("input",confirm_password);
}


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
}




