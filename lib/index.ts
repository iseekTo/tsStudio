
type places = string[] | string;

interface book {
    price?: number
    label?: places
    where?: places
}

let book: book = {
    price: 200,
    label: '封神',
    where: '天河以南'
}

console.log(book, '111') 
