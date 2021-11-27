const numbers= [7,6,11,0,1];


const num = 0;


let isFound = false;
for(let i=0; i<numbers.length; i++)
{

        if(numbers[i] === num)
        {
            isFound = true;
            break;
        }


}


if(isFound === true)
{
    console.log(`${num} was found in the list`)
}

else
{
    console.log(`${num} was not found in the list`)
}
