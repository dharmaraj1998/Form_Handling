import { useContext, useState } from "react";
import BooksContext from "../provider/Books";

const BookCreate =()=>{
    const [title,setTitle] = useState("")
    const {createBook} = useContext(BooksContext)

    const handleClick = (e)=>{
       setTitle(e.target.value);

    }
    const handleEvent =(e)=>{
        e.preventDefault()
        createBook(title)
        setTitle('')
    }
    return (
        <div className="book-create">
            <h1>Search book</h1>
           <form onSubmit={handleEvent}>
            <input type="text" className="input" value ={title} onChange={handleClick}/>
            <button className="button">create</button>
           </form>
        </div>
    )
}
export default BookCreate;