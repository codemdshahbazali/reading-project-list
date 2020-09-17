import React, {useContext} from 'react';
import { BookContent } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    const {removeBook} = useContext(BookContent);

    return ( 
        <li onClick={() => removeBook(book.id)}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
     );
}
 
export default BookDetails;