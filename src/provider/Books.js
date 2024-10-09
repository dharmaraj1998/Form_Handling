import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext()

function Provider({children}){
    const [book,setBook] = useState([]);

     
   const fetchList = async ()=>{
        const response =  await axios.get("http://localhost:3001/books")
        setBook(response.data)
      }
const createBook = async (title)=>{
        const response = await axios.post("http://localhost:3001/books",{
         title
        })
        setBook(response.data)
        console.log(response.data);
        
         
         const updateBooks = [...book,response.data]
         setBook(updateBooks)   
     }
   const  deleteBooks = async(id)=>{
          await axios.delete(`http://localhost:3001/books/${id}`);
         
         const updateBooks = book.filter(book=> book.id !== id)
         setBook(updateBooks)
 
     }
    const  editBooks = async(id,newTitle) =>{
 
         const response = await axios.put(`http://localhost:3001/books/${id}`,{
             title :newTitle
         })
         setBook(response.data)
         
         const updateBooks = book.map((book)=>{
             if(book.id === id){
                 return {...book, ...response.data}
             }
             return book
         })
         setBook(updateBooks)
        }

        const valueToShare = {
            book,
            fetchList,
            createBook,
            deleteBooks,
            editBooks
            }
        
    

    return(
        <BooksContext.Provider value={valueToShare}>
            {children}

        </BooksContext.Provider>
    )
}

export {Provider}
export default BooksContext;