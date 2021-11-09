let words = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi']

const result = words.filter(a => a.toLocaleLowerCase().includes('m'))

console.log(result)