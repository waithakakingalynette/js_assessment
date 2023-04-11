//1. Write a function that takes in a string and returns it when reversed
let food =("eating") 
function str(foods){
//   console.log("food.split","food.sort","food.join")
}

//2.Write a function that takes in the following array and consoles the target if it is found else
null

function binary(num,target){
    let left=0;
    let right=num.length-1;
    while(left<right){
        let middle=Math.floor((left+right)/2);
        if(num[middle]===target){
            return middle
        }
        else if(num[middle]>target){
            right=middle-1
        }
        else{
            left=middle+1
        }
    }
    return null
}

let num = [2,8,0,23,5,45,76]
target = 23;
console.log(binary(num,target));

//3. Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for (year in ( 2001)>=(2023)){
    if(year %4===0){
        console.log("2020 is a leap year")
    }
    else if(year %4!==0){
        console.log("2001 is not a leap year")
    }
}

//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
 
 for(y in (0)&&(100)){
    if(y %3===0 && y %5===0){
       console.log("FizzBuzz") 
    }
    else if(y %3===0){
        console.log("Fizz")
    }
    else if(y %5===0){
      console.log("Buzz")
    }
    else{
        return number
    }
 }



//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]
function numbers(num){
    num.forEach(element => {
        console.log(element*4)
    });
}
let numArray = [12,87,45,75,23,64,73];
numbers(numArray);



//6. Write a function that takes in an array of strings and returns an array with every element
//turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function arr(str){
    str.forEach(element => {
        console.log(element)
    });
}
let nums = [`10`,`24`,`45`,`56`,`67`];
// let emptyArr=[];
arr(nums);


