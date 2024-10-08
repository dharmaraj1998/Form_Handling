import BookShow from './BookShow'

const BookList =({books ,deleteBook,editBook })=>{

    const listBooks = books.map((book)=>{
        return <BookShow  book ={book} deleteBook ={deleteBook} editBook = {editBook} />
    })
    return (
        <div className='book-list'>
            {listBooks}
           
        </div>
    )
}
export default BookList;