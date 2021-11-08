let users = [
    {name: 'giorgi', age: 16},
    {name: 'levani', age: 90},
    {name: 'nino', age: 30},
    {name: 'otari', age: 11},
    {name: 'mari', age: 28}
  ]

  const newArray = users.filter(user => user.age > 18)

  console.log('users whose age is greater than 18: ', newArray)
  console.log()
  
  const answer = newArray.map(user => user.name)
  console.log(answer)