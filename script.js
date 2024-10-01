//Change Theme Using ClassList
let Body = document.body;
let btn = document.querySelector(".btn");
let currentVal = 1;
Body.classList.add("light");


let changeTheme = ()=>{
    if(currentVal == 1){
        Body.classList.add("dark");
        Body.classList.remove("light");
        btn.innerHTML="Go to Light Mode";
        currentVal = 0;
    }
    else if(currentVal == 0){
        Body.classList.add("light");
        Body.classList.remove("dark");
        btn.innerHTML="Go to Dark Mode";
        currentVal = 1;
    }

}
btn.addEventListener("click",changeTheme);

