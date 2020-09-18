import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/BookReducer';


export const BookContent = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer ,[]);

    // const addBook = (title, author) => {
    //     const newBooks = [...books, {title, author, id: uuidv1()}];
    //     setBooks(newBooks);
    // }

    // const removeBook = (id) => {
    //     //filtering all books excpet for the one we want to remove
    //     const newBooks = books.filter(book => book.id !== id);
    //     setBooks(newBooks);
    // }

    return ( 
        <BookContent.Provider value={{books, dispatch}}>
            { props.children }
        </BookContent.Provider>
    );
}
 
export default BookContextProvider;