import BookShow from './BookShow'

const BookList =({books})=>{

    const listBooks = books.map((book)=>{
        return <BookShow  book ={book} />
    })
    return (
        <div className='book-list'>
            {listBooks}
           
        </div>
    )
}
export default BookList;