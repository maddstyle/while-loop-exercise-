alert("connected");
// print all numbers between -10 and 19
let num = -10;

while (num <= 19){
    console.log(num);
    num++;
}



// print all even numbers between 10 and 40
let number = 10;
while(number <= 40){
  console.log(number);
  number+=2;
}

// while(number <= 40){
//     if(number % 2 === 0){
//         console.log(number);
//     }
//     number+=1;
// }

// print all odd numbers between 300 and 333
let count = 300;
while(count <= 333){
    if(count % 2 !== 0){
        console.log(count);
    }
    count+=1;
}
// print all numbers divisible by 5 and 3 between 5 and 50
let counter = 5;
while( counter <= 50){
    if (counter % 3 === 0 && counter % 5 === 0){
    console.log(counter);
    }
    counter+=1;
}
// print numbers from 1 to 50 
num = 1;
while(num <= 50){
    console.log(num);
    num++;
}