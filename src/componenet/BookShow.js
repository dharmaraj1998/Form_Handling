

const BookShow =({book})=>{
    return (
        <div className="book-show">
            <h1>Title : {book.title}</h1>
            <p>Id : {book.id}</p>
        </div>
    )
}
export default BookShow;