

const displayArray = (arr)=>{

    for(let i=0; i<arr.length; i++)
    {
        console.log(arr[i]);
    }
}


const movies = ["Titanic", "Avengers", "Bad Boys II"];

console.log(`The length of the initial array is ${movies.length}`);
console.log(`Contents of the initial array :`)
displayArray(movies);

//push adds a value to the end of the array
movies.push("Avatar");
movies.push("Lion King");
movies.push("The Matrix");

console.log("\n\n\n");
console.log(`The modified array is ${movies.length}`);
console.log(`Contents of the modified array :`)
displayArray(movies);


//adds an element to the begiining of the array
movies.unshift("Justice League");

console.log("\n\n\n");
console.log(`(Added to the beginning of the array) length ${movies.length}`);
console.log(`Contents of the modified array :`)
displayArray(movies);

//This removes an element from the end of the array
movies.pop();

//Shift removes from the beginning of the array
movies.shift();

console.log("\n\n\n");
console.log(`(We removed from the begging and end) length ${movies.length}`);
console.log(`Contents of the modified array :`)
displayArray(movies);



movies.splice(1,2);
console.log("\n\n\n");
console.log(`Added The Matrix to index 1 :`)
console.log(`Length of new array  ${movies.length}`)
displayArray(movies);