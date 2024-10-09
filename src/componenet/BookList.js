
import BookShow from './BookShow'
import useBookContext from '../hooks/Use-book-context'



const BookList =()=>{
    const {book}= useBookContext()

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