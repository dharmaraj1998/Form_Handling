import "./index.css"
import { useState } from "react";
import BookCreate from "./componenet/BookCreate";

function App(){
    const [book,setBook] = useState([]);

    const createBook = (book)=>{
        setBook(book)
    }

    return(
        <div>
            <h1>{book}</h1>
            <BookCreate createBook = {createBook}/>
            
        </div>
    )
}
export default App;