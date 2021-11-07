let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];

arr.forEach(element => {
    if(element.length >= 5) console.log(element)
});

console.log()
console.log()

for(let i = 0; i < arr.length; i++){
    if(arr[i].length >= 5) console.log(arr[i])
}