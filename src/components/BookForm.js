import React, {useContext, useState} from 'react';
import { BookContent } from '../contexts/BookContext';

const BookForm = () => {
    const {addBook} = useContext(BookContent);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value="Add book"/>
        </form>
     );
}
 
export default BookForm;