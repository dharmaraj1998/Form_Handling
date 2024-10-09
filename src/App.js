import "./index.css"
import { useContext, useEffect } from "react";
import BookCreate from "./componenet/BookCreate";
import BookList from "./componenet/BookList";
import BooksContext from "./provider/Books";



function App(){
    
    const {book,fetchList} = useContext(BooksContext)

    useEffect(()=>{
        fetchList()
    },[])
    

    return(
        <div>
            <BookList/>
            <BookCreate/>
            
        </div>
    )
}
export default App;