import { useContext } from 'react'
import BookShow from './BookShow'
import BooksContext from '../provider/Books'

const BookList =()=>{
    const {book}= useContext(BooksContext)

    const listBooks = book.map((book)=>{
        return <BookShow  book ={book}/>
    })
    return (
        <div className='book-list'>
            {listBooks}
           
        </div>
    )
}
export default BookList;