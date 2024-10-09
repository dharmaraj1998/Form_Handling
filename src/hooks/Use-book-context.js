import {  useContext } from "react";
import BooksContext from "../provider/Books";


export default function useBookContext(){
    return useContext(BooksContext)
};