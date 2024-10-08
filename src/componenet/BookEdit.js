import { useState } from "react";


const BookEdit = ({book,onSubmit})=>{
    const [editTitle, setEditTitle] = useState(book.title);

    const handleEditClick =(e)=>{
        setEditTitle(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
       
        onSubmit(book.id,editTitle)
        


    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <input className="input" type="text" value={editTitle} onChange={handleEditClick} />
            <button className="button is-primary">save</button>
        </form>
    )
}
export default BookEdit;