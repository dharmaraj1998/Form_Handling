import "./index.css"
import { useEffect } from "react";
import BookCreate from "./componenet/BookCreate";
import BookList from "./componenet/BookList";
import useBookContext from "./hooks/Use-book-context";



function App(){
    
    const {fetchList} = useBookContext()

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