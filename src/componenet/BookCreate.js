import {  useState } from "react";
import useBookContext from "../hooks/Use-book-context";

const BookCreate =()=>{
    const [title,setTitle] = useState("")
    const {createBook} = useBookContext()

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