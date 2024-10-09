import "./index.css"
import { useEffect, useState } from "react";
import BookCreate from "./componenet/BookCreate";
import BookList from "./componenet/BookList";
import axios from "axios"



function App(){
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
        const response = await axios.delete(`http://localhost:3001/books/${id}`)
        setBook(response.data)
        console.log(response);
        
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
            <BookList books = {book} deleteBook ={deleteBooks} editBook = {editBooks}/>
            <BookCreate createBook = {createBook}/>
            
        </div>
    )
}
export default App;