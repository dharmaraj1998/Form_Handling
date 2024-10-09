import { createContext, useState } from "react";

const BooksContext = createContext()

function Provider({children}){
    const[count,setCount] = useState(0)

    const valueToShare = {
        count,
        increment : ()=>{
            setCount(count+1)
        }
    }
    return(
        <BooksContext.Provider value={valueToShare}>
            {children}

        </BooksContext.Provider>
    )
}

export {Provider}
export default BooksContext;