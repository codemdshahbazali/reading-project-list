import React, {useContext} from 'react';
import { BookContent } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = (props) => {
    const {books} = useContext(BookContent);
    return books.length? (
        <div className="book-list">
            <ul>
                {
                    books.map((book) => <BookDetails book={book} key={book.id}/>)
                }
            </ul>
        </div>
     ) : <div className="empty">No Books Available</div>
        
}
 
export default BookList;