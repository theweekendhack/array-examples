

//Functions and Arrays

const calculateSum = arr=>{

    let sum=0;

    for(let i=0; i<arr.length; i++)
    {
        sum+=arr[i];
    }

    return sum;

}


const returnCubes = (arr)=>{

    let results = [];

    for(let i=0; i<arr.length; i++)
    {
        results[i] = numbers[i] ** 3;
    }

    return results;

}


const numbers= [2,4,5,7,1];

console.log(calculateSum(numbers));

console.log(returnCubes(numbers));

