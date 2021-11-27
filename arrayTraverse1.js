const movies = ["Titanic", "Avengers", "Bad Boys II","Spiderman 2"];

const displayArray = (arr)=>{

    for(let i=0; i<arr.length; i++)
    {
        console.log(arr[i]);
    }
}


displayArray(movies);


const displayArrayHighOrder = (arr)=>{

    arr.forEach((movie,index)=>{
        console.log(`Movie ${index+1}. ${movie}`)
    })
}



console.log(`\n\n`)
console.log(`Array values for forEach`);

displayArrayHighOrder(movies);