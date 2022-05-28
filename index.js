//Destructuring Assignments with Rest Operators to reassign array elements

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list)
{

    const [ , , ...arr] = list; //this is simply saying, do nothing for the first element, do nothing for the next element, for every other element in the array, print them out.

    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);