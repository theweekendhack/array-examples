const numbers= [7,6,11,0,1];


//sum the all the values in the array
//const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];

let sum=0;

for(let i=0; i<numbers.length; i++)
{
    sum = sum + numbers[i];
}

console.log(sum);