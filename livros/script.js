// Buscando e contando dados do array

const booksByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title: "O segredo da mente milhonária",
                author: "T. Harv Eker",
            },
            {
                title: "O mais rico da Babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico e Pai pobre",
                author: "Robert T. Kiyosaki",
            },
        ],
    },
    {
        category:"Inteligencia Emocional",
        books:[
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas eficazes",
                author: "Stephen R. Covey",
            },
            {
                title: "Ansiedade -  como enfrentar esse mal",
                author: "Augusto Cury",
            },
        ],
    },
];
//Contagem de categorias
const totalBooks = [];

const totalCategories = booksByCategory.lenght
console.log(booksByCategory);
    
for(let category of booksByCategory){
    console.log('Total de livros da categoria', category.category)
    console.log(category.books.length)
}
function countAuthor(){
    let              authors = [];
    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
            authors.push(book.author)
            }
        }
    }
    console.log("Total de autores", authors.lenght)

}
countAuthor()

function booksOfAuthor(author){
    let books = [];
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author)
            books.push(books.title)
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury')
