type places = string[] | string;

interface IBook {
    price?: number;
    label?: places;
    where?: places;
}

let book: IBook = {
    price: 200,
    label: "封神",
    where: "天河以南"
};

console.log(book, "111");
