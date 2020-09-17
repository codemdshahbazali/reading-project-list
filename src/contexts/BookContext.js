import React, { useState, createContext } from 'react';
import {v1 as uuidv1} from 'uuid';

export const BookContent = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Village by the Sea', author: 'Arundithi Roy', id: 1},
        {title: 'Three Idiots', author: 'Chetan Bhagat', id: 2},
    ]);

    const addBook = (title, author) => {
        const newBooks = [...books, {title, author, id: uuidv1()}];
        setBooks(newBooks);
    }

    const removeBook = (id) => {
        //filtering all books excpet for the one we want to remove
        const newBooks = books.filter(book => book.id !== id);
        setBooks(newBooks);
    }

    return ( 
        <BookContent.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContent.Provider>
    );
}
 
export default BookContextProvider;