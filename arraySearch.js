const movies = ["Titanic", "Avengers", "Bad Boys II","Spiderman 2"];


const searchMoviesList = (arr, searchValue)=>{

        let found=false;
        for(let i=0; i<arr.length; i++)
        {
            if(searchValue === arr[i])
            {

                found=true;
                break;
            }
        }           

        return found;
}

const searchMoviesListWithHighOrder = (arr, searchValue)=>{

   const result = arr.find(movie=> movie === searchValue);


    return result;

}


const result =searchMoviesListWithHighOrder(movies,"Bad Boys II");

if(result != undefined)
{
    console.log(` Value was located in our "database"`)
}
else
{
    console.log(`Value is not located in our "database"`)
}
