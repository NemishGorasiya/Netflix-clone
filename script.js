let hidden = document.querySelectorAll(".hidden")
let buttons = document.querySelectorAll(".fa-plus");

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

// .hidden-content {
//     max-height: 0;
//     overflow: hidden;
//     transition: max-height 0.3s ease-out; /* Adjust the duration and timing function as needed */
// }

// .visible-content {
//     max-height: 500px; /* Set a reasonable max-height value */
//     transition: max-height 0.3s ease-in; /* Adjust the duration and timing function as needed */
// }