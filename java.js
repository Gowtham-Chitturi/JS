let num;
while (true) {
    num = Number(prompt("enter a number"));
    if (!isNaN(num)) {
        break;
    } else {
        console.log("please enter a valid number");
    }
}

let result="";


let num1=num;
while(num1>0){
    let number=num1%10;
    result+=word(number);
    num1=parseInt(num1/10);
}

let words=result.split(" ");

let new_arr=words.reverse();

let result1="";
for(let i=1;i<new_arr.length;i++){
    result1+=(new_arr[i]+" ");
}
console.log(result1)

function word(num){
    switch (num) {
        case 0:
            return "zero ";
        case 1:
            return ("one ");
        case 2:
            return ("two ");
        case 3:
            return ("three ");
        case 4:
            return ("four ");
    
        case 5:
            return ("five ");
    
        case 6:
            return ("six ");
    
        case 7:
            return ("seven ");
        case 8:
            return ("eight ");
    
        case 9:
            return ("nine ");
    }
}



if (num % 2 === 0) {
    console.log("even number");
} else {
    console.log("odd number");
}