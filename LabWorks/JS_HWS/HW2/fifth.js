let words = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi']

const result = words.filter(word => word.toLocaleLowerCase().includes('m'))

console.log(result)