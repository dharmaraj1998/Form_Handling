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

    return(
        <div>
            <BookList books = {book}/>
            <BookCreate createBook = {createBook}/>
            
        </div>
    )
}
export default App;