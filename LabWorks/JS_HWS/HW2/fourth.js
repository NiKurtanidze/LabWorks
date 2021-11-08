let words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit.', 'Nullam', 'lectus', 'quam']


console.log(words.reduce(myFunc))

function myFunc(word, element){
    if(words.indexOf(element) % 2 == 1) element = element.toUpperCase()
    return word + element
}