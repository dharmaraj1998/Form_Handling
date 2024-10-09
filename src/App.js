import "./index.css"
import { useEffect, useState } from "react";
import BookCreate from "./componenet/BookCreate";
import BookList from "./componenet/BookList";
import axios from "axios"
import { useContext } from "react";
import BooksContext from "./provider/Books";



function App(){
    const sharedData = useContext(BooksContext)
    const [book,setBook] = useState([]);

    const fetchList = async ()=>{
      const response =  await axios.get("http://localhost:3001/books")
      setBook(response.data)
    }

    useEffect(()=>{
        fetchList()
    },[])
    

    const createBook =async (title)=>{
       const response = await axios.post("http://localhost:3001/books",{
        title
       })
       setBook(response.data)
       console.log(response.data);
       
        
        const updateBooks = [...book,response.data]
        setBook(updateBooks)   
    }
    const deleteBooks =async(id)=>{
         await axios.delete(`http://localhost:3001/books/${id}`);
        
        const updateBooks = book.filter(book=> book.id !== id)
        setBook(updateBooks)

    }
    const editBooks = async(id,newTitle) =>{

        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title :newTitle
        })
        console.log(response.data);
        setBook(response.data)
        
        const updateBooks = book.map((book)=>{
            if(book.id === id){
                return {...book, ...response.data}
            }
            return book
        })
        setBook(updateBooks)
    }


    return(
        <div>
            <h1>
                {sharedData.count}
            
            </h1>
            <button onClick={sharedData.increment}>button</button>
            <button onClick={sharedData.increment}>increment</button>
            <BookList books = {book} deleteBook ={deleteBooks} editBook = {editBooks}/>
            <BookCreate createBook = {createBook}/>
            
        </div>
    )
}
export default App;