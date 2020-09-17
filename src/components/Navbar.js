import React, { useContext } from 'react';
import {BookContent} from '../contexts/BookContext';

const Navbar = () => {
    const {books} = useContext(BookContent);
    return ( 
        <div className="navbar">
            <h1>Reading List</h1>
            <p>Currently you have {books.length} books to get through..</p>
        </div>
    );
}

export default Navbar;