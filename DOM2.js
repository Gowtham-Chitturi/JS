// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);


// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","123"));

// let div = document.querySelector("div");
// div.style.backgroundColor = "red";
// div.style.backgroundColor = "violet";
// div.style.fontSize = "30px";
// div.innerText = "hello";

let newBtn = document.createElement("button");
newBtn.innerText="click me";
console.log("newBtn");

let div=document.querySelector("div");
div.after(newBtn);

let para = document.querySelector("p");
para.remove()