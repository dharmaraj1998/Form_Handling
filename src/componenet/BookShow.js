import {  useState } from "react"
import BookEdit from "./BookEdit"
import useBookContext from "../hooks/Use-book-context"


const BookShow =({book})=>{
    const [editTitle,setEditTitle] = useState(false)
    const {deleteBooks,editBooks} = useBookContext()

    const handleClick = ()=>{
        deleteBooks(book.id)
    }
    const handleEditClick = ()=>{
        setEditTitle(!editTitle)
    }
    const handleSubmit = (id,title)=>{
        setEditTitle(false)
        editBooks(id,title)
    }

    let titleContent = <h3>{book.title}</h3>
    if(editTitle){
       titleContent = <BookEdit book= {book} onSubmit = {handleSubmit}/>
    }
    return (
        <div className="book-show">
            <h1>{titleContent}</h1>
            <p>Id : {book.id}</p>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}
export default BookShow;