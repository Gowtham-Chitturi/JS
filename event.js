let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }


// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("This is tanu")
// }
     
prac

let modeBtn = document.querySelector("#mode");
let currMode = "light";
 
modeBtn.addEventListener("click", () =>{
   if(currMode === "light"){
    currMode = "dark"
    document.querySelector("body").style.backgroundColor = "black";
   }else{
    currMode = "light"
    document.querySelector("body").style.backgroundColor = "white";
   }
    console.log(currMode)
});

