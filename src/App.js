import "./index.css"
import { useState } from "react";
import BookCreate from "./componenet/BookCreate";
import BookList from "./componenet/BookList";

function App(){
    const [book,setBook] = useState([]);

    const createBook = (title)=>{
        const updateBooks = [...book,{id : Math.random()*9999, title}]
        setBook(updateBooks)   
    }
    const deleteBooks =(id)=>{
        const updateBooks = book.filter(book=> book.id !== id)
        setBook(updateBooks)

    }
    const editBooks = (id,newTitle) =>{
        const updateBooks = book.map((book)=>{
            if(book.id === id){
                return {...book, title : newTitle}
            }
            return book
        })
        setBook(updateBooks)
    }


    return(
        <div>
            <BookList books = {book} deleteBook ={deleteBooks} editBook = {editBooks}/>
            <BookCreate createBook = {createBook}/>
            
        </div>
    )
}
export default App;